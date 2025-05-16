'use client';
import { Accordion, AccordionItem, addToast, Button, Input, Select, SelectItem, Spinner, Textarea } from '@heroui/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import ThemeSelector from 'Components/Editor/ThemeSelector/ThemeSelector';
import { Logo } from 'Components/Logo/Logo';
import ActionButton from 'ProUI/ActionButton/ActionButton';
import { ProAvatar } from 'ProUI/Common/Common';
import { ProTextArea } from 'ProUI/Form/Form';
import ProIcon from 'ProUI/Icons/icons';
import { useEffect, useRef, useState } from 'react';
import { getGreeting } from 'utils/greetingUtils';
import FileUploader, { ImagePreview } from '../FileUploader/FileUploader';
import { useWallDashboard } from '../hooks/useWallDashboard';
import PaymentStatusSheet from 'Components/PaymentSuccess/PaymentSuccess';
import SuccessSheet from '../SuccessSheet/SuccessSheet';
import { compressImage } from 'utils/imageUtils';
import { v4 as uuidv4 } from 'uuid';

export default function DigitalWallDashboard() {
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [digitalWallId, setDigitalWallId] = useState('your-digital-wall-id');
  const [categories, setCategories] = useState([{ name: '' }]);
  const [products, setProducts] = useState([{ category: 0, title: '', weight: '', image: null, imagePreview: '' }]);
  const [banners, setBanners] = useState([{ image: null, imagePreview: '', text: '' }]);
  const [newArrivals, setNewArrivals] = useState([{ title: '', weight: '', image: null, imagePreview: '' }]);
  const [offers, setOffers] = useState([{ offer: '' }, { offer: '' }, { offer: '' }]);
  const [spotlight, setSpotlight] = useState({ image: null, imagePreview: '', text: '' });
  const [companyDetails, setCompanyDetails] = useState({
    logo: "",
    name: "",
    phone_number: "",
    whatsapp_number: "",
    whatsapp_message: ""
  })


  const [dailyPrices, setDailyPrices] = useState([
    { label: '', amount: '' },
    { label: '', amount: '' },
    { label: '', amount: '' }
  ]);

  const [user, setUser] = useState(null);
  const [walls, setWalls] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClientComponentClient()
  const { colorFromImage, setColorFromImage } = useWallDashboard(companyDetails?.logo);
  const [errors, setErrors] = useState({
    companyDetails: {},
    spotlight: {},
    categories: [],
    products: [],
    banners: [],
    newArrivals: [],
    socialDetails: {}
  });
  const [selectedThemeColor, setSelectedThemeColor] = useState()
  const [selectedContentColor, setSelectedContentColor] = useState()
  const [selectedHighlightedColor, setSelectedHighlightedColor] = useState()
  const [allColors, setAllColors] = useState()
  const [themeColor, setThemeColor] = useState({
    theme_color: "#fff",
    content_color: "#000",
    highlight_color: "#eebc1d"
  })
  const [socialDetails, setSocialDetails] = useState({
    instagram: '',
    facebook: '',
    x: '',
  });
  const [isWallUpdated, setIsWallUpdated] = useState(false)

  const handleChooseThemeColor = (color, mode) => {
    if (mode === 'theme') {
      // Set the selected color for theme
      setSelectedThemeColor(color);
      setThemeColor({ ...themeColor, theme_color: color?.hex });

      // Ensure that the selected theme color is hidden from the content section
      if (color?.hex === selectedContentColor?.hex) {
        setSelectedContentColor(null); // Clear content color if it's the same as theme color
      }
    } else if (mode === 'content') {
      // Set the selected color for content
      setSelectedContentColor(color);
      setThemeColor({ ...themeColor, content_color: color?.hex });

      // Ensure that the selected content color is hidden from the theme section
      if (color?.hex === selectedThemeColor?.hex) {
        setSelectedThemeColor(null); // Clear theme color if it's the same as content color
      }
    } else {
      setSelectedHighlightedColor(color);
      setThemeColor({ ...themeColor, highlight_color: color?.hex });

      // Ensure that the selected theme color is hidden from the content section
      if (color?.hex === selectedHighlightedColor?.hex) {
        setSelectedHighlightedColor(null); // Clear content color if it's the same as theme color
      }
      setSelectedHighlightedColor
    }
  }


  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase.auth.getSession();
      const session = data?.session;
      if (!session?.user) {
        console.warn('No user session found');
        return null;
      }
      const { data: digitalWall } = await supabase
        .from('digital_wall_users')
        .select('*')
        .eq('user_id', session.user.id);

      // const { data: digitalWall } = await supabase.from('digital_wall_users').select('*').eq('id', data.session?.user.id)
      if (error) {
        console.error('Error fetching session:', error);
        return null;
      }
      const userData = { ...data.session?.user, ...digitalWall };
      return { ...data.session?.user, ...digitalWall?.[0] };
    };

    const getUser = async () => {
      const user = await fetchUserData();

      setUser(user);
    };

    getUser();
  }, []); // This only runs once when component mounts


  useEffect(() => {
    if (!user) return;
    const fetchWalls = async () => {
      setIsPageLoading(true)
      try {
        const { data, error, status } = await supabase
          .from('digital_wall')
          .select('*')
          .eq('user_id', user.user_id)

        if (error) throw error;
        setIsPageLoading(false)
        const currentWall = data?.[0]

        setWalls(currentWall || []);
        setCategories(currentWall?.categories || []);
        setProducts(currentWall?.products || []);
        setBanners(currentWall?.banners || []);
        setNewArrivals(currentWall?.new_arrivals || []);
        setSpotlight(currentWall?.spotlight || {});
        setOffers(currentWall?.offers || []);
        setDailyPrices(currentWall?.daily_prices || [
          { label: '', amount: '' },
          { label: '', amount: '' },
          { label: '', amount: '' }
        ]);
        setCompanyDetails(currentWall.company_details)
        setThemeColor(currentWall.theme)
        setSelectedContentColor(currentWall.theme?.content_color)
        setSelectedThemeColor(currentWall.theme?.theme_color)
        setSelectedThemeColor(currentWall.theme?.highlight_color)
        setColorFromImage((prev) => {
          const safePrev = Array.isArray(prev) ? prev : [];

          if (!currentWall?.theme) return safePrev;

          const newColors = [
            { hex: currentWall.theme.content_color },
            { hex: currentWall.theme.theme_color },
            { hex: currentWall.theme.highlight_color },
          ];

          const filteredNewColors = newColors.filter(
            (newColor) =>
              newColor?.hex && !safePrev.some((existing) => existing?.hex === newColor?.hex)
          );

          return [...safePrev, ...filteredNewColors];
        });

      } catch (error) {
        console.error('Error fetching walls:', error);
        addToast({
          title: 'Error',
          description: 'Failed to load digital walls',
          type: 'error',
          color: 'danger',
          variant: 'bordered',
        });
      }
    };

    fetchWalls();
  }, [user]); // This effect only runs when `user` changes


  // Initialize refs at the top level
  const refs = useRef({
    spotlight: null,
    products: {},
    banners: {},
    newArrivals: {}
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      companyDetails: {},
      spotlight: {},
      categories: [],
      products: [],
      banners: [],
      newArrivals: [],
      socialDetails: {}
    };

    // Company details validation
    // if (!companyDetails.name?.trim()) {
    //   newErrors.companyDetails.name = "Company name is required";
    //   isValid = false;
    // }

    // if (companyDetails.phone_number && !/^\d{10,15}$/.test(companyDetails.phone_number)) {
    //   newErrors.companyDetails.phone_number = "Please enter a valid phone number";
    //   isValid = false;
    // }

    // if (companyDetails.whatsapp_number && !/^\d{10,15}$/.test(companyDetails.whatsapp_number)) {
    //   newErrors.companyDetails.whatsapp_number = "Please enter a valid WhatsApp number";
    //   isValid = false;
    // }

    // Social media URL validation
    const urlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/;

    // if (socialDetails.instagram && !urlRegex.test(socialDetails.instagram)) {
    //   newErrors.socialDetails.instagram = "Please enter a valid URL";
    //   isValid = false;
    // }

    // if (socialDetails.facebook && !urlRegex.test(socialDetails.facebook)) {
    //   newErrors.socialDetails.facebook = "Please enter a valid URL";
    //   isValid = false;
    // }

    // if (socialDetails.x && !urlRegex.test(socialDetails.x)) {
    //   newErrors.socialDetails.x = "Please enter a valid URL";
    //   isValid = false;
    // }

    // Categories validation
    // categories.forEach((category, idx) => {
    //   if (!category.name?.trim()) {
    //     if (!newErrors.categories[idx]) newErrors.categories[idx] = {};
    //     newErrors.categories[idx].name = "Category name is required";
    //     isValid = false;
    //   }
    // });

    // // Products validation
    // products.forEach((product, idx) => {
    //   if (!newErrors.products[idx]) newErrors.products[idx] = {};

    //   if (!product.title?.trim()) {
    //     newErrors.products[idx].title = "Product name is required";
    //     isValid = false;
    //   }

    //   if (!product.category) {
    //     newErrors.products[idx].category = "Category is required";
    //     isValid = false;
    //   }
    // });
    // banners.forEach((banner, idx) => {
    //   if (!newErrors.banners) newErrors.banners = [];
    //   if (!newErrors.banners[idx]) newErrors.banners[idx] = {};

    //   if (!banner.title?.trim()) {
    //     newErrors.banners[idx].name = "Banner name is required";
    //     isValid = false;
    //   }
    // });

    // Set the errors
    setErrors(newErrors);
    return isValid;
  };
  // const handleImageUpload = async (e, section, index = null) => {
  //   const rawFile = e.target.files[0];
  //   const file = await compressImage(rawFile);
  //   if (!file) return;

  //   if (section === 'spotlight') {
  //     setSpotlight({ ...spotlight, image: file });
  //   } else if (section === 'products') {
  //     const updated = [...products];
  //     updated[index].image = file;
  //     setProducts(updated);
  //   } else if (section === 'banners') {
  //     const updated = [...banners];
  //     updated[index].image = file;
  //     setBanners(updated);
  //   } else if (section === 'newArrivals') {
  //     const updated = [...newArrivals];
  //     updated[index].image = file;
  //     setNewArrivals(updated);
  //   }
  // };
  const handleImageUpload = async (e, section, index = null) => {
    const rawFile = e.target.files[0];
    const file =
      rawFile.size > 2 * 1024 * 1024
        ? await compressImage(rawFile)
        : rawFile;
    if (!file) return;

    //  const {data}= await supabase.storage.from('digital-wall-assets').upload(`image_${uuidv4()}`,file)

    // Add a local preview using URL.createObjectURL (optional enhancement)
    const localPreview = URL.createObjectURL(file);
    console.log(file)
    if (section === 'spotlight') {
      setSpotlight({ ...spotlight, image: file, });
    } else if (section === 'products') {
      const updated = [...products];
      updated[index].image = file;
      setProducts(updated);
    } else if (section === 'banners') {
      const updated = [...banners];
      updated[index].image = file;
      setBanners(updated);
    } else if (section === 'newArrivals') {
      const updated = [...newArrivals];
      updated[index].image = file;
      setNewArrivals(updated);
    }
  };

  const removeImage = (section, index = null) => {
    if (section === 'spotlight') {
      setSpotlight({ ...spotlight, image: null, imagePreview: '' });
      if (refs.current.spotlight) refs.current.spotlight.value = '';
    } else if (section === 'products') {
      const newProducts = [...products];
      newProducts[index].image = null;
      newProducts[index].imagePreview = '';
      setProducts(newProducts);
      if (refs.current.products[index]) refs.current.products[index].value = '';
    } else if (section === 'banners') {
      const newBanners = [...banners];
      newBanners[index].image = null;
      newBanners[index].imagePreview = '';
      setBanners(newBanners);
      if (refs.current.banners[index]) refs.current.banners[index].value = '';
    } else if (section === 'newArrivals') {
      const newItems = [...newArrivals];
      newItems[index].image = null;
      newItems[index].imagePreview = '';
      setNewArrivals(newItems);
      if (refs.current.newArrivals[index]) refs.current.newArrivals[index].value = '';
    } else if (section === 'logo') {
      setCompanyDetails({ ...companyDetails, logo: '' })
    }
  };

  const handleRemoveField = (idx, fieldName) => {
    if (fieldName === 'category') {
      const newCategories = categories.filter((_, i) => i !== idx);
      setCategories(newCategories);
    };
    if (fieldName === 'product') {
      const newProducts = products.filter((_, i) => i !== idx);
      setProducts(newProducts);
    };
    if (fieldName === 'banner') {
      const newBanners = banners.filter((_, i) => i !== idx);
      setBanners(newBanners);
    }
    if (fieldName === 'newArrival') {
      const newNewArrivals = newArrivals.filter((_, i) => i !== idx);
      setNewArrivals(newNewArrivals);
    }
    if (fieldName === 'offer') {
      const updatedOffer = offers.filter((_, i) => i !== idx);
      setOffers(updatedOffer);
    }
  }
  const handleLogout = async () => {
    setIsLoading(true)
    const { error } = await supabase.auth.signOut();
    if (error) {
      setIsLoading(false)
      console.error('Error logging out:', error.message);
    } else {
      setIsLoading(false)
      addToast({
        title: 'Success',
        description: 'Logged out successfully',
        type: 'success',
        color: 'success',
        variant: 'bordered',
      })
      window.location.href = '/wall/login'; // or router.push('/')
    }
  };

  // const handleSave = async () => {
  //   setIsLoading(true)
  //   const formData = new FormData();

  //   // Only include digitalWallId if you're updating
  //   if (walls.id) {
  //     formData.append('digitalWallId', walls.id);
  //   }

  //   // Append structured data as JSON
  //   formData.append('categories', JSON.stringify(categories));
  //   formData.append('offers', JSON.stringify(offers));
  //   // formData.append('products', JSON.stringify(products));
  //   const cleanProducts = products.map((prod, idx) => ({
  //     ...prod,
  //     imageKey: `product_image_${idx}` // for mapping in backend
  //   }));

  //   formData.append('products', JSON.stringify(cleanProducts));

  //   // Then, add each image file separately
  //   products.forEach((prod, idx) => {
  //     if (prod.image) {
  //       formData.append(`product_image_${idx}`, prod.image);
  //     }
  //   });
  //   formData.append('spotlight', JSON.stringify(spotlight));
  //   formData.append('banners', JSON.stringify(banners));
  //   formData.append('newArrivals', JSON.stringify(newArrivals));

  //   formData.append('spotlight_text', spotlight.text);
  //   formData.append('spotlight_image', spotlight.imagePreview);
  //   formData.append('wall_slug', user?.wall_slug);
  //   formData.append('shop_name', user?.shop_name);
  //   formData.append('daily_prices', JSON.stringify(dailyPrices));
  //   formData.append('template', user?.template || 'hero_wall');
  //   formData.append('company_details', JSON.stringify(companyDetails));

  //   try {
  //     const res = await fetch('/api/digital-wall/dashboard/save', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await res.json();
  //     console.log('Save response:', data);

  //     if (res.ok) {
  //       addToast({
  //         title: 'Success',
  //         description: `Digital wall ${digitalWallId ? 'updated' : 'created'} successfully!`,
  //         type: 'success',
  //         color: 'success',
  //         variant: 'flat',
  //       });
  //       setIsLoading(false)
  //     } else {
  //       alert(data.error || 'Failed to save digital wall');
  //       setIsLoading(false)
  //     }
  //   } catch (error) {
  //     setIsLoading
  //     console.error('Error saving digital wall:', error);
  //     alert('Failed to save digital wall');
  //   }
  // };
  const handleSave = async () => {
    setIsLoading(true);
    if (!validateForm()) {
      addToast({
        title: 'Fill required fields',
        description: 'Please fill required fields',
        type: 'error',
        color: 'danger',
        variant: 'bordered',
      });
      setIsLoading(false);

      return;
    }
    const formData = new FormData();

    if (walls.id) {
      formData.append('digitalWallId', walls.id);
    }

    formData.append('categories', JSON.stringify(categories));
    formData.append('offers', JSON.stringify(offers));
    formData.append('products', JSON.stringify(products));
    formData.append('banners', JSON.stringify(banners));
    formData.append('newArrivals', JSON.stringify(newArrivals));
    formData.append('spotlight', JSON.stringify(spotlight));

    formData.append('wall_slug', user?.wall_slug);
    formData.append('shop_name', user?.shop_name);
    formData.append('daily_prices', JSON.stringify(dailyPrices));
    formData.append('template', user?.template || 'hero_wall');
    formData.append('company_details', JSON.stringify(companyDetails));
    formData.append('theme', JSON.stringify(themeColor));
    formData.append('social_links', JSON.stringify(socialDetails));

    // Attach image files (without imageKey)
    products.forEach((prod, idx) => {
      if (prod.image) {
        formData.append(`products[${idx}][image]`, prod.image);
      }
    });

    banners.forEach((banner, idx) => {
      if (banner.image) {
        formData.append(`banners[${idx}][image]`, banner.image);
      }
    });

    newArrivals.forEach((item, idx) => {
      if (item.image) {
        formData.append(`newArrivals[${idx}][image]`, item.image);
      }
    });

    if (spotlight.image) {
      formData.append('spotlight_image', spotlight.image);
    }

    try {
      const res = await fetch('/api/digital-wall/dashboard/save', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        addToast({
          title: 'Success',
          description: `Digital wall ${walls.id ? 'updated' : 'created'} successfully!`,
          type: 'success',
          color: 'success',
          variant: 'flat',
        });
        setIsWallUpdated(true)
        setIsLoading(false)
      } else {
        alert(data.error || 'Failed to save digital wall');
      }
    } catch (error) {
      console.error('Error saving digital wall:', error);
      alert('Failed to save digital wall');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className='bg-blue-100 p-4 rounded-b-2xl relative z-10'>
        <div className='flex justify-between items-center'>
          <Logo width={120} height={120} />
          <ActionButton isLoading={isLoading} onClick={handleLogout} variant='solid' color='danger' size='md'><ProIcon name='IoMdLogOut' size={18} color='white' /> Logout</ActionButton>
        </div>
        
        <div className='flex items-center justify-between gap-4 mt-6 mb-4 px-4'>
          <div className='flex items-center gap-4'>
            <ProAvatar color='primary' url={companyDetails?.logo || ''} className='object-contain' size='md' />
            <h2 className="text-xl text-left block font-gray-200 text-blue-900 font-italic">{getGreeting()},<br /> <span className='font-bold text-blue-900'>{user?.shop_name}</span></h2>
          </div>
        </div>
      </div>

      {isPageLoading ? <div className='flex items-center justify-center h-screen fixed inset-0 w-full'>
        <Spinner />
      </div> :
        <div className="p-6 md:p-10 w-full md:w-2/3 xl:w-1/2 mx-auto !text-black">
          <Accordion variant="splitted" className='mb-6' >
            <AccordionItem key="1" aria-label="Company Details" title={<div className="text-black flex items-center">
              <ProIcon name={'RiHomeOfficeLine'} size={24} color='#485ddc' /> <span className='font-semibold ml-2'>Company Information</span>
            </div>}>
              <section className="mb-8">
                <div className="mb-2">
                  {companyDetails?.logo ? (
                    <div className='flex items-center justify-center w-1/2 mx-auto'> <ImagePreview image={companyDetails?.logo} onRemove={() => removeImage('logo')} /></div>
                  ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'logo')} refs={refs} placeholder='Select Logo' />}
                </div>
                <Input type='text' label='Company Name' placeholder='Shop Name' value={companyDetails?.name} onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })} className='mb-2'
                  isInvalid={!!errors.companyDetails.name}
                  errorMessage={errors.companyDetails.name}
                />
                <Input
                  type="tel"
                  label='Phone Number'
                  placeholder="Phone Number"
                  value={companyDetails?.phone_number}
                  onChange={(e) => {
                    const phone = e.target.value.replace(/[^0-9]/g, '');
                    setCompanyDetails({ ...companyDetails, phone_number: phone });
                  }}
                  className='mb-2'
                  isRequired
                  required
                  isInvalid={!!errors.companyDetails.phone_number}
                  errorMessage={errors.companyDetails.phone_number}
                />
                <Input
                  type="tel"
                  label='WhatsApp Number'
                  placeholder="WhatsApp Number"
                  value={companyDetails?.whatsapp_number}
                  onChange={(e) => {
                    const whataspp = e.target.value.replace(/[^0-9]/g, '');
                    setCompanyDetails({ ...companyDetails, whatsapp_number: whataspp });
                  }}
                  className='mb-2'
                  isInvalid={!!errors.companyDetails.whatsapp_number}
                  errorMessage={errors.companyDetails.whatsapp_number}
                />
                <ProTextArea
                  type="text"
                  label='Whataspp Message'
                  placeholder="WhatsApp Message"
                  value={companyDetails?.whatsapp_message}
                  onChange={(e) => {
                    setCompanyDetails({ ...companyDetails, whatsapp_message: e.target.value });
                  }}
                  isInvalid={!!errors.companyDetails.whatsapp_message}
                  errorMessage={errors.companyDetails.whatsapp_message}
                />
              </section>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Customization" title={<div className="text-black flex items-center">
              <ProIcon name={'RiColorFilterAiLine'} size={24} color='#485ddc' /> <span className='font-semibold ml-2'>Customization</span>
            </div>}>
              <ThemeSelector colors={colorFromImage} setAllColors={setAllColors} selectedTheme={themeColor} selectedHighlightedColor={selectedHighlightedColor} selectedContentColor={selectedContentColor} selectedThemeColor={selectedThemeColor} handleChooseThemeColor={handleChooseThemeColor} />
            </AccordionItem>
            <AccordionItem key="3" aria-label="Social Media" title={<div className="text-black flex items-center">
              <ProIcon name={'IoIosAt'} size={24} color='#485ddc' /> <span className='font-semibold ml-2'>Social Media Links</span>
            </div>}>
              <Input
                type="text"
                label="Instagram URL"
                placeholder="https://instagram.com/yourpage"
                value={socialDetails.instagram}
                onChange={(e) =>
                  setSocialDetails({ ...socialDetails, instagram: e.target.value })
                }
                className="mb-2"
              />

              <Input
                type="text"
                label="Facebook URL"
                placeholder="https://facebook.com/yourpage"
                value={socialDetails.facebook}
                onChange={(e) =>
                  setSocialDetails({ ...socialDetails, facebook: e.target.value })
                }
                className="mb-2"
              />

              <Input
                type="text"
                label="X (Twitter) URL"
                placeholder="https://x.com/yourhandle"
                value={socialDetails.x}
                onChange={(e) =>
                  setSocialDetails({ ...socialDetails, x: e.target.value })
                }
                className="mb-2"
              />

            </AccordionItem>
          </Accordion>


          {/* Spotlight */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Spotlight Banner</h2>
            <div className="mb-2">
              {spotlight.image ? (
                <div className='w-full mx-auto'><ImagePreview image={spotlight.image} onRemove={() => removeImage('spotlight')} /></div>
              ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'spotlight')} refs={refs} placeholder='Select Image' />}
            </div>
            <Textarea label='Spotlight Content' value={spotlight.text} onChange={(e) => setSpotlight({ ...spotlight, text: e.target.value })} />
          </section>

          {/* Categories */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            {categories.map((cat, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <Input
                  key={idx}
                  className="mb-2"
                  label='Category'
                  value={cat.name}
                  onChange={(e) => {
                    const newCategories = [...categories];
                    newCategories[idx].name = e.target.value;
                    setCategories(newCategories);
                  }}
                  isRequired
                  isInvalid={errors.categories[idx]?.name}
                  errorMessage={errors.categories[idx]?.name}
                />
                {idx > 0 && <ActionButton isIconOnly color='danger' className='' size='md' onPress={() => handleRemoveField(idx, 'category')}>
                  <ProIcon name='CiTrash' size={18} color='white' />
                </ActionButton>}
              </div>
            ))}
            <Button
              color='primary'
              variant='faded'
              onPress={() => setCategories([...categories, { name: '' }])} className="text-blue-500">+ Add Category</Button>
          </section>

          {/* Daily Price */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Daily Price</h2>
            {dailyPrices.map((price, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  value={price.label}
                  label='Text'
                  onChange={(e) => {
                    const updated = [...dailyPrices];
                    updated[index].label = e.target.value;
                    setDailyPrices(updated);
                  }}
                />
                <Input
                  label="Amount"
                  value={price.amount}
                  onChange={(e) => {
                    const updated = [...dailyPrices];
                    updated[index].amount = e.target.value;
                    setDailyPrices(updated);
                  }}
                />
              </div>
            ))}
          </section>


          {/* Products */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
              {products.map((prod, idx) => (
                <div key={idx} className='flex items-center gap-2 relative' >
                  <div className="mb-4 p-2 border rounded w-full">
                    <Input label="Name" value={prod.title} onChange={(e) => {
                      const newProducts = [...products];
                      newProducts[idx].title = e.target.value;
                      setProducts(newProducts);
                    }}
                      className="mb-2"
                      isInvalid={errors.products[idx]?.name}
                      errorMessage={errors.products[idx]?.name}
                      isRequired
                    />
                    <Input label="Price / info" value={prod.weight} onChange={(e) => {
                      const newProducts = [...products];
                      newProducts[idx].weight = e.target.value;
                      setProducts(newProducts);
                    }} className="mb-2" />
                    <div className="mb-2">
                      {prod.image ? (
                        <div><ImagePreview image={prod.image} onRemove={() => removeImage('products', idx)} height={80} /></div>
                      ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'products', idx)} refs={refs} placeholder='Select Image' />}
                    </div>
                    <Select
                      value={prod.category || ""}
                      onChange={(e) => {
                        const selectedValue = e.target.value;
                        const newProducts = [...products];
                        // Set the category directly using the selected value (which is the name)
                        newProducts[idx].category = selectedValue;
                        setProducts(newProducts);

                      }}
                      isRequired
                      isInvalid={errors.products[idx]?.category}
                      errorMessage={errors.products[idx]?.category}
                      className="w-full p-2 mb-2 text-black"
                      label='Choose category'
                    >
                      <SelectItem value="" className='text-black'>Select Category</SelectItem>
                      {categories.map((cat, catIdx) => (
                        <SelectItem key={cat.name} value={cat.name} className='text-black'>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  {idx > 0 && <ActionButton isIconOnly color='danger' className='absolute -top-[20px] -right-[20px] z-10' size='md' onPress={() => handleRemoveField(idx, 'product')}>
                    <ProIcon name='CiTrash' size={18} color='white' />
                  </ActionButton>}
                </div>
              ))}
            </div>
            <Button
              onPress={() => setProducts([...products, { category: 0, title: '', weight: '', image: null, imagePreview: '' }])}
              className="text-blue-500"
              color='primary'
              variant='faded'
            >
              + Add Product
            </Button>
          </section>

          {/* Banners */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Banners</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
              {banners.map((ban, idx) => (
                <div key={idx} className='flex items-center gap-2 relative'>
                  <div className="mb-4 p-2 border rounded w-full ">
                    <div className="mb-2">
                      {ban.image ? (
                        <ImagePreview image={ban.image} onRemove={() => removeImage('banners', idx)} />
                      ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'banners', idx)} refs={refs} placeholder='Select Image' />}
                    </div>
                    <Input label="Banner Text" value={ban.text} onChange={(e) => {
                      const newBanners = [...banners];
                      newBanners[idx].text = e.target.value;
                      setBanners(newBanners);
                    }}
                      isRequired
                      isInvalid={errors.banners.name}
                      errorMessage={errors.banners.name}
                    />
                  </div>
                  {idx > 0 && <ActionButton isIconOnly color='danger' className='absolute -top-[20px] -right-[20px] z-10' size='md' onPress={() => handleRemoveField(idx, 'banner')}>
                    <ProIcon name='CiTrash' size={18} color='white' />
                  </ActionButton>}
                </div>
              ))}
            </div>

            <Button
              color='primary'
              variant='faded'
              onPress={() => setBanners([...banners, { image: null, imagePreview: '', text: '' }])}
              className="text-blue-500"
            >
              + Add Banner
            </Button>
          </section>

          {/* New Arrivals */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">New Arrivals</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2'>
              {newArrivals.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2 relative'>
                  <div className="mb-4 p-2 border rounded w-full">
                    <Input label="Name" value={item.title} onChange={(e) => {
                      const newItems = [...newArrivals];
                      newItems[idx].title = e.target.value;
                      setNewArrivals(newItems);
                    }} className="mb-2" />
                    <Input label="Price / Info" value={item.weight} onChange={(e) => {
                      const newItems = [...newArrivals];
                      newItems[idx].weight = e.target.value;
                      setNewArrivals(newItems);
                    }} className="mb-2" />
                    <div className="mb-2">
                      {item.image ? (
                        <div><ImagePreview image={item.image} onRemove={() => removeImage('newArrivals', idx)} /></div>
                      ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'newArrivals', idx)} refs={refs} placeholder='Select Image' />}
                    </div>
                  </div>
                  {idx > 0 && <ActionButton isIconOnly color='danger' className='absolute -top-[20px] -right-[20px] cursor-pointer' size='md' onPress={() => handleRemoveField(idx, 'newArrival')}>
                    <ProIcon name='CiTrash' size={18} color='white' />
                  </ActionButton>}
                </div>
              ))}
            </div>
            <Button
              color='primary'
              variant='faded'
              onPress={() => setNewArrivals([...newArrivals, { title: '', weight: '', image: null, imagePreview: '' }])}
              className="text-blue-500"
            >
              + Add New Arrival
            </Button>
          </section>

          {/* Offers */}
          <section className="mb-6 pb-14">
            <h2 className="text-xl font-semibold mb-2">Offer Texts</h2>

            <div className='grid lg:grid-cols-2 gap-2'>
              {offers?.map((item, index) => (
                <div key={index} className='relative'>
                  <Input
                    key={index}
                    label={`Offer ${index + 1}`}
                    value={item.offer}
                    onChange={(e) => {
                      const updatedOffers = [...offers];
                      updatedOffers[index].offer = e.target.value;
                      setOffers(updatedOffers);
                    }}
                    className="mb-2"
                  />
                  {index > 0 && <ActionButton isIconOnly color='danger' className='absolute -top-[10px] -right-[10px] z-10 cursor-pointer' size='sm' onPress={() => handleRemoveField(index, 'offer')}>
                    <ProIcon name='CiTrash' size={18} color='white' />
                  </ActionButton>}
                </div>
              ))}
            </div>

            <Button
              type="button"
              color='primary'
              variant='faded'
              onPress={(e) => { setOffers([...offers, { offer: '' }]) }}
              className="text-blue-500"
            >
              + Add Offer
            </Button>
          </section>

          {/* Save Button */}
          <div className="text-center w-full bg-white fixed bottom-0 left-0 right-0 p-4 shadow-t-lg z-10 border border-t border-gray-300 ">
            <ActionButton onClick={handleSave} variant='solid' color='primary' isLoading={isLoading} size='lg' className='md:w-[200px] w-full'>Save All</ActionButton>
          </div>
        </div>}
      <SuccessSheet isSuccess={isWallUpdated} user={user} closeSheet={() => setIsWallUpdated(false)} />
    </div>

  );
}