'use client';
import { Accordion, AccordionItem, addToast, Input, Select, SelectItem, Spinner, Textarea } from '@heroui/react';
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
  const { colorFromImage, setColorFromImage } = useWallDashboard(companyDetails?.logo)
  const [selectedThemeColor, setSelectedThemeColor] = useState()
  const [selectedContentColor, setSelectedContentColor] = useState()
  const [selectedHighlightedColor, setSelectedHighlightedColor] = useState()
  const [allColors, setAllColors] = useState()
  const [themeColor, setThemeColor] = useState({
    theme_color: "#fff",
    content_color: "#000",
    highlight_color: "#eebc1d"
  })
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
        setColorFromImage([
          ...(Array.isArray(colorFromImage) ? colorFromImage : []),
          { hex: currentWall.theme?.content_color },
          { hex: currentWall.theme?.theme_color },
          { hex: currentWall.theme?.highlight_color },
        ]);
        
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
  const handleImageUpload = (e, section, index = null) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imagePreview = event.target.result;

      if (section === 'spotlight') {
        setSpotlight({ ...spotlight, imagePreview: imagePreview });
      } else if (section === 'products') {
        const newProducts = [...products];
        newProducts[index].image = file;
        newProducts[index].imagePreview = imagePreview;
        setProducts(newProducts);
      } else if (section === 'banners') {
        const newBanners = [...banners];
        newBanners[index].image = file;
        newBanners[index].imagePreview = imagePreview;
        setBanners(newBanners);
      } else if (section === 'newArrivals') {
        const newItems = [...newArrivals];
        newItems[index].image = file;
        newItems[index].imagePreview = imagePreview;
        setNewArrivals(newItems);
      } else if (section === 'logo') {
        setCompanyDetails({ ...companyDetails, logo: imagePreview })
      }
    };
    reader.readAsDataURL(file);
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

  const handleSave = async () => {
    setIsLoading(true)
    const formData = new FormData();

    // Only include digitalWallId if you're updating
    if (walls.id) {
      formData.append('digitalWallId', walls.id);
    }

    // Append structured data as JSON
    formData.append('categories', JSON.stringify(categories));
    formData.append('offers', JSON.stringify(offers));
    // formData.append('products', JSON.stringify(products));
    const cleanProducts = products.map((prod, idx) => ({
      ...prod,
      imageKey: `product_image_${idx}` // for mapping in backend
    }));

    formData.append('products', JSON.stringify(cleanProducts));

    // Then, add each image file separately
    products.forEach((prod, idx) => {
      if (prod.image) {
        formData.append(`product_image_${idx}`, prod.image);
      }
    });
    formData.append('spotlight', JSON.stringify(spotlight));
    formData.append('banners', JSON.stringify(banners));
    formData.append('newArrivals', JSON.stringify(newArrivals));

    formData.append('spotlight_text', spotlight.text);
    formData.append('spotlight_image', spotlight.imagePreview);
    formData.append('wall_slug', user?.wall_slug);
    formData.append('shop_name', user?.shop_name);
    formData.append('daily_prices', JSON.stringify(dailyPrices));
    formData.append('template', user?.template || 'hero_wall');
    formData.append('company_details', JSON.stringify(companyDetails));
    formData.append('theme', JSON.stringify(themeColor));

    try {
      const res = await fetch('/api/digital-wall/dashboard/save', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        addToast({
          title: 'Success',
          description: `Digital wall ${digitalWallId ? 'updated' : 'created'} successfully!`,
          type: 'success',
          color: 'success',
          variant: 'flat',
        });
        setIsWallUpdated(true)
        setIsLoading(false)
      } else {
        alert(data.error || 'Failed to save digital wall');
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading
      console.error('Error saving digital wall:', error);
      alert('Failed to save digital wall');
    }
  };


  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className='bg-blue-100 p-4 rounded-b-2xl relative z-10'>
        <div className='flex justify-center items-center'>
          <Logo width={120} height={120} />
        </div>
        <div className='flex items-center justify-between gap-4 mt-6 mb-4 px-4'>
          <div className='flex items-center gap-4'>
            <ProAvatar color='primary' />
            <h2 className="text-xl text-left block font-gray-200 text-blue-900 font-italic">{getGreeting()},<br /> <span className='font-bold text-blue-900'>{user?.shop_name}</span></h2>
          </div>
          <ActionButton isLoading={isLoading} isIconOnly onClick={handleLogout} variant='solid' color='danger' size='md'><ProIcon name='IoMdLogOut' size={18} color='white' /></ActionButton>
        </div>
      </div>

      {isPageLoading ? <div className='flex items-center justify-center h-screen fixed inset-0 w-full'>
        <Spinner />
      </div> :
        <div className="p-6 md:p-10 w-full md:w-1/2 mx-auto !text-black">
          <Accordion variant="splitted" className='mb-6' >
            <AccordionItem key="1" aria-label="Company Details" title={<div className="text-black flex items-center">
              <ProIcon name={'RiHomeOfficeLine'} size={24} color='#485ddc' /> <span className='font-semibold ml-2'>Company Information</span>
            </div>}>
              <section className="mb-8">
                <div className="mb-2">
                  {companyDetails?.logo ? (
                    <div className='flex items-center justify-center'> <ImagePreview image={companyDetails?.logo} onRemove={() => removeImage('logo')} /></div>
                  ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'logo')} refs={refs} placeholder='Select Logo' />}
                </div>
                <Input type='text' label='Company Name' placeholder='Shop Name' value={companyDetails?.name} onChange={(e) => setCompanyDetails({ ...companyDetails, name: e.target.value })} className='mb-2' />
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
                />
                <ProTextArea
                  type="text"
                  label='Whataspp Message'
                  placeholder="WhatsApp Message"
                  value={companyDetails?.whatsapp_message}
                  onChange={(e) => {
                    setCompanyDetails({ ...companyDetails, whatsapp_message: e.target.value });
                  }}
                />
              </section>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Customization" title={<div className="text-black flex items-center">
              <ProIcon name={'RiColorFilterAiLine'} size={24} color='#485ddc' /> <span className='font-semibold ml-2'>Customization</span>
            </div>}>
              <ThemeSelector colors={colorFromImage} setAllColors={setAllColors} selectedTheme={themeColor} selectedHighlightedColor={selectedHighlightedColor} selectedContentColor={selectedContentColor} selectedThemeColor={selectedThemeColor} handleChooseThemeColor={handleChooseThemeColor} />
            </AccordionItem>
          </Accordion>


          {/* Spotlight */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Spotlight Banner</h2>
            <div className="mb-2">
              {spotlight.imagePreview ? (
                <ImagePreview image={spotlight.imagePreview} onRemove={() => removeImage('spotlight')} />
              ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'spotlight')} refs={refs} placeholder='Select Image' />}
            </div>
            <Textarea placeholder="Spotlight Text" value={spotlight.text} onChange={(e) => setSpotlight({ ...spotlight, text: e.target.value })} />
          </section>

          {/* Categories */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Categories</h2>
            {categories.map((cat, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <Input
                  key={idx}
                  placeholder="Category Name"
                  className="mb-2"
                  value={cat.name}
                  onChange={(e) => {
                    const newCategories = [...categories];
                    newCategories[idx].name = e.target.value;
                    setCategories(newCategories);
                  }}
                />
                {idx > 0 && <ActionButton isIconOnly color='danger' className='' size='md' onPress={() => handleRemoveField(idx, 'category')}>
                  <ProIcon name='CiTrash' size={18} color='white' />
                </ActionButton>}
              </div>
            ))}
            <button onClick={() => setCategories([...categories, { name: '' }])} className="text-blue-500">+ Add Category</button>
          </section>

          {/* Daily Price */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Daily Price</h2>
            {dailyPrices.map((price, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <Input
                  placeholder="Label"
                  value={price.label}
                  onChange={(e) => {
                    const updated = [...dailyPrices];
                    updated[index].label = e.target.value;
                    setDailyPrices(updated);
                  }}
                />
                <Input
                  placeholder="Amount"
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
            {products.map((prod, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <div className="mb-4 p-2 border rounded w-full">
                  <Input placeholder="Product Title" value={prod.title} onChange={(e) => {
                    const newProducts = [...products];
                    newProducts[idx].title = e.target.value;
                    setProducts(newProducts);
                  }} className="mb-2" />
                  <Input placeholder="Weight (g)" value={prod.weight} onChange={(e) => {
                    const newProducts = [...products];
                    newProducts[idx].weight = e.target.value;
                    setProducts(newProducts);
                  }} className="mb-2" />
                  <div className="mb-2">
                    {prod.imagePreview ? (
                      <ImagePreview image={prod.imagePreview} onRemove={() => removeImage('products', idx)} />
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
                {idx > 0 && <ActionButton isIconOnly color='danger' className='' size='md' onPress={() => handleRemoveField(idx, 'product')}>
                  <ProIcon name='CiTrash' size={18} color='white' />
                </ActionButton>}
              </div>
            ))}
            <button
              onClick={() => setProducts([...products, { category: 0, title: '', weight: '', image: null, imagePreview: '' }])}
              className="text-blue-500"
            >
              + Add Product
            </button>
          </section>

          {/* Banners */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Banners</h2>
            {banners.map((ban, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <div className="mb-4 p-2 border rounded w-full">
                  <div className="mb-2">
                    {ban.imagePreview ? (
                      <ImagePreview image={ban.imagePreview} onRemove={() => removeImage('banners', idx)} />
                    ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'banners', idx)} refs={refs} placeholder='Select Image' />}
                  </div>
                  <Input placeholder="Banner Text" value={ban.text} onChange={(e) => {
                    const newBanners = [...banners];
                    newBanners[idx].text = e.target.value;
                    setBanners(newBanners);
                  }} />
                </div>
                {idx > 0 && <ActionButton isIconOnly color='danger' className='' size='md' onPress={() => handleRemoveField(idx, 'banner')}>
                  <ProIcon name='CiTrash' size={18} color='white' />
                </ActionButton>}
              </div>
            ))}

            <button
              onClick={() => setBanners([...banners, { image: null, imagePreview: '', text: '' }])}
              className="text-blue-500"
            >
              + Add Banner
            </button>
          </section>

          {/* New Arrivals */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">New Arrivals</h2>
            {newArrivals.map((item, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <div className="mb-4 p-2 border rounded w-full">
                  <Input placeholder="New Arrival Title" value={item.title} onChange={(e) => {
                    const newItems = [...newArrivals];
                    newItems[idx].title = e.target.value;
                    setNewArrivals(newItems);
                  }} className="mb-2" />
                  <Input placeholder="Weight (g)" value={item.weight} onChange={(e) => {
                    const newItems = [...newArrivals];
                    newItems[idx].weight = e.target.value;
                    setNewArrivals(newItems);
                  }} className="mb-2" />
                  <div className="mb-2">
                    {item.imagePreview ? (
                      <ImagePreview image={item.imagePreview} onRemove={() => removeImage('newArrivals', idx)} />
                    ) : <FileUploader onUpload={(e) => handleImageUpload(e, 'newArrivals', idx)} refs={refs} placeholder='Select Image' />}
                  </div>
                </div>
                {idx > 0 && <ActionButton isIconOnly color='danger' className='' size='md' onPress={() => handleRemoveField(idx, 'newArrival')}>
                  <ProIcon name='CiTrash' size={18} color='white' />
                </ActionButton>}
              </div>
            ))}
            <button
              onClick={() => setNewArrivals([...newArrivals, { title: '', weight: '', image: null, imagePreview: '' }])}
              className="text-blue-500"
            >
              + Add New Arrival
            </button>
          </section>

          {/* Offers */}
          <section className="mb-6 pb-14">
            <h2 className="text-xl font-semibold mb-2">Offer Texts</h2>

            {offers?.map((item, index) => (
              <Input
                key={index}
                placeholder={`Offer ${index + 1}`}
                value={item.offer}
                onChange={(e) => {
                  const updatedOffers = [...offers];
                  updatedOffers[index].offer = e.target.value;
                  setOffers(updatedOffers);
                }}
                className="mb-2"
              />
            ))}

            <button
              type="button"
              onClick={(e) => { e.preventDefault(); setOffers([...offers, { offer: '' }]) }}
              className="text-blue-500"
            >
              + Add Offer
            </button>
          </section>

          {/* Save Button */}
          <div className="text-center w-full bg-white fixed bottom-0 left-0 right-0 p-4 shadow-lg">
            <ActionButton onClick={handleSave} variant='solid' color='primary' isLoading={isLoading} size='lg' className='md:w-[200px] w-full'>Save All</ActionButton>
          </div>
        </div>}
        <SuccessSheet isSuccess={isWallUpdated} user={user} closeSheet={()=> setIsWallUpdated(false)} />
    </div>

  );
}