import { editorData } from "@/atoms/editorDataAtom";
import { savedUserData } from "@/atoms/savedUserDataAtom";
import { sheetVisibility } from "@/atoms/sheetAtom";
import { userTemplateData } from "@/atoms/templateDataAtom";
import { templateData } from "@/data/templateData";
import { useLoading } from "@/hooks/useLoading";
import { generateOGImage, uploadImageToCloudinary } from "@/services/ogImageService";
import { addToast } from "@heroui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { extractColorFromUserImage } from "utils/colorUtils";
import { SHEETS, useToggleVisibility } from "utils/sheetUtils";

export const useEditor = () => {
  const [userBanner, setUserBanner] = useState(null)
  const [avatar, setAvatar] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useRecoilState(userTemplateData);
  const [sheetsVisibility] = useRecoilState(sheetVisibility);
  const { toggleSheetVisibility } = useToggleVisibility();
  // const [setIsSuccess] = useState(false);
  const [selectedCollaboration, setSelectedCollaboration] = useState("show");
  const [formData, setFormData] = useRecoilState(editorData);
  const [savedLastUserData, setSavedLastUserData] = useRecoilState(savedUserData);
  const [themeColors, setThemeColors] = useState([]);
  const [selectedThemeColor, setSelectedThemeColor] = useState(null)
  const [selectedContentColor, setSelectedContentColor] = useState(null)
  const [videosVisible, setVideosVisible] = useState(false)
  const [enableGallery, setEnableGallery] = useState(false);
  const { data: userSession, status: sessionStatus } = useSession();
  const { loading, setLoadingState } = useLoading();
  const [welcomeMessage, setWelcomeMessage] = useState();
  const [isPaymentFailed, setIsPaymentFailed] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (sessionStatus === "authenticated") {
          const userName = localStorage.getItem("custom_username") || userSession?.user?.custom_username || formData?.custom_username;
          if (!userName) return; // Prevent fetching if username is null

          const res = await fetch(`/api/user/${userName}`);
          if (!res.ok) throw new Error("Failed to fetch user");

          const data = await res.json();
          setFormData((prev) => ({
            ...prev,
            ...data?.user, 
          }));
          


          // handling expiry and welcome card
          await handleExpiryAndWelcomeCard(data?.user?.createdAt);

          if (templateData?.length) {
            const userSelectedTemplate = templateData.find(
              (item) => item?.template_name === data?.user?.template
            );
            setSelectedTemplate(userSelectedTemplate || null);
          }
          if (data?.user.gallery?.length) {
            setEnableGallery(true);
          }
          if (data?.user.video_links?.length) {
            setVideosVisible(true);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();


  }, [sessionStatus, templateData]);


  useEffect(() => {
    const imageUrl = formData?.spotlight_image;
    if (imageUrl) {
      const fetchColors = async () => {
        const extractedColors = await extractColorFromUserImage(imageUrl);
        const notIncludeWhite = !extractedColors.some(color => color.hex === "#ffffff");
        const notIncludeBlack = !extractedColors.some(color => color.hex === "#000000");
        if (notIncludeWhite && notIncludeBlack) {
          setThemeColors([...extractedColors, { hex: "#ffffff" }, { hex: "#000000" }]);
        } else if (notIncludeWhite) {
          setThemeColors([...extractedColors, { hex: "#ffffff" }]);
        } else if (notIncludeBlack) {
          setThemeColors([...extractedColors, { hex: "#000000" }]);
        } else {
          setThemeColors(extractedColors);
        }

        if (!extractedColors || extractedColors.length < 2) {
          console.error("Not enough colors extracted.");
          return;
        }
        const sortedColors = extractedColors?.sort((a, b) => b.score - a.score);
        const selectedColors = sortedColors?.slice(0, 2).map(color => color.hex);
        setFormData({ ...formData, template_theme_color: selectedColors[0], template_content_color: selectedColors[1] })
      };
      fetchColors();
    }
  }, [formData?.spotlight_image]);


  const handleExpiryAndWelcomeCard = async (createdDate) => {
    const created = new Date(createdDate);
    const today = new Date();
    const createdAtISO = created.toISOString().split("T")[0];
    const nowISO = today.toISOString().split("T")[0];


    const expirationDate = new Date(created);
    expirationDate.setMonth(expirationDate.getMonth() + 1);

    const createdByToday = createdAtISO === nowISO;
    const diffExpiry = (expirationDate - today) / (1000 * 60 * 60 * 24); // Days remaining
    if (createdByToday) {
      setWelcomeMessage({
        type: "success",
        title: "Welcome to viiew.me!",
        description: "You've just unlocked a sleek and powerful way to do it. Let’s create something amazing! 🎉",
      });
    } else if (diffExpiry <= 5 && diffExpiry > 0) {
      setWelcomeMessage({
        type: "warning",
        title: "Viiew is expiring soon!",
        description: `Your subscription is expiring soon. Please upgrade your plan to continue using Viiew.`,
      });
    }
  }

  const handleAvatarUpload = async (file) => {
    setAvatar(file)
    const formData = new FormData();
    formData.append("file", file);

  }



  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddLink = () => {
    if (formData?.links?.length >= 10) {
      addToast({
        title: "Opps!",
        description: "Can't add more than 10 links!",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
      return;
    }
    setFormData((prev) => ({
      ...prev,
      links: [...(prev?.links ?? []), { id: (prev?.links?.length ?? 0) + 1, title: '', link: '', preview: '' }],
    }));
    
  };

  const handleRemoveLink = (id) => {
    if (formData.links.length === 1) {
      addToast({
        title: "Opps!",
        description: "Please add at least one link!",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
      return;
    }
    setFormData((prev) => ({
      ...prev,
      links: prev.links.filter((link) => link.id !== id),
    }));
  };

  const handleChooseThemeColor = (color, mode) => {
    if (mode === 'theme') {
      // Set the selected color for theme
      setSelectedThemeColor(color);
      setFormData({ ...formData, template_theme_color: color?.hex });

      // Ensure that the selected theme color is hidden from the content section
      if (color?.hex === selectedContentColor?.hex) {
        setSelectedContentColor(null); // Clear content color if it's the same as theme color
      }
    } else {
      // Set the selected color for content
      setSelectedContentColor(color);
      setFormData({ ...formData, template_content_color: color?.hex });

      // Ensure that the selected content color is hidden from the theme section
      if (color?.hex === selectedThemeColor?.hex) {
        setSelectedThemeColor(null); // Clear theme color if it's the same as content color
      }
    }
  }

  const handleCollaborationButtonChange = (value) => {
    setSelectedCollaboration(value);
    setFormData({ ...formData, show_collaboration: value === "show" ? true : false })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleVideoLink = () => {
    setFormData((prev) => {
      const videoLinks = prev?.video_links ?? [];

      if (videoLinks.length >= 2) {
        addToast({
          title: "Opps!",
          description: "Can't add more than 2 Videos!",
          variant: 'flat',
          color: "warning",
          size: "md"
        })
        return prev; // Prevent state update
      }

      return {
        ...prev,
        video_links: [...videoLinks, { id: videoLinks.length + 1, url: "" }],
      };
    });
  };

  const handleRemoveVideoLink = (videoId) => {
    if (formData.video_links.length === 1) {
      addToast({
        title: "Opps!",
        description: "Please add at least a video!",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
      return;
    }
    setFormData((prev) => ({
      ...prev,
      video_links: prev.video_links.filter((link) => link.id !== videoId),
    }));
  }

  const handleEnableVideoLinks = () => {
    setVideosVisible(!videosVisible)
    setFormData((prev) => {
      if (!videosVisible) {
        return { ...prev, video_links: [{ id: 1, url: "" }] };
      } else {
        const { ...rest } = prev;
        return rest;
      }
    });
  }
  const handleEnableGallery = () => {
    setEnableGallery(!enableGallery)
    setFormData((prev) => {
      if (!enableGallery) {
        return { ...prev, gallery: [] };
      } else {
        const { ...rest } = prev;
        return rest;
      }
    });
  }

  const handleRemoveUploadedImage = (file) => {
    if (formData?.gallery?.length === 1) {
      addToast({
        title: "Opps!",
        description: "Please add at least a image!",
        variant: 'flat',
        color: "warning",
        size: "md"
      })
      return;
    }
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((image) => image.url !== file?.url),
    }));
  }
  async function safeUpload(image) {
    try {
      // If the image URL already starts with "https", return it as is
      if (typeof image === "string" && image.startsWith("https")) {
        return image;
      }
      // Otherwise, upload to Cloudinary
      return image ? await uploadImageToCloudinary(image) : null;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  }

  async function uploadAllImages(userData) {
    // Upload single images with checks
    const profileImageUrl = await safeUpload(userData.profile_image);
    const coverPhotoUrl = await safeUpload(userData.cover_photo);
    const spotlightImageUrl = await safeUpload(userData.spotlight_image);
  
    // Upload gallery images with checks
    const updatedGallery = userData.gallery
      ? await Promise.all(
          userData.gallery.map(async (item) => ({
            ...item,
            url: await safeUpload(item.url),
          }))
        )
      : [];
  
    return {
      ...userData,
      profile_image: profileImageUrl,
      cover_photo: coverPhotoUrl,
      spotlight_image: spotlightImageUrl,
      gallery: updatedGallery,
    };
  }


  // generate viiew ( Core Function )
  const generateViiew = async () => {
    try {
      setLoadingState("saveChanges", true, 10);
      const updatedUserData = await uploadAllImages(formData);
      setLoadingState("saveChanges", true, 55);
        let data = {
          name: formData?.first_name,
          avatar: formData?.spotlight_image,
          username: localStorage.getItem("custom_username") || userSession.user?.custom_username,
        };

        const og_image = await generateOGImage(data);
        // updated progress
        setLoadingState("saveChanges", true, 80);
        const og_image_url = await uploadImageToCloudinary(og_image);
        setLoadingState("saveChanges", true, 99);
        
        const response = await fetch("/api/update/template", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...updatedUserData, og_image: og_image_url }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          addToast({
            title: "Opps!",
            description: errorData.error || "Something went wrong!",
            variant: 'flat',
            color: "warning",
            size: "md",
          })
          setLoadingState("saveChanges", false, 0);
          throw new Error(errorData.error || "Failed to update user details");
        } else {
          toggleSheetVisibility(SHEETS.PAYMENT_SUCCESS, true);
        }
        const updatedUser = await response.json();

        // Update the user state with OG image
        setSavedLastUserData({ ...updatedUser.user, og_image });
        setLoadingState("saveChanges", false, 100);
    }catch (error) {
      console.error("Error updating user:", error.message);
    }
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      if (!selectedTemplate?.price) {
        console.error("Payment amount is missing!");
        setIsProcessing(false);
        return;
      }
  
      // Send amount in the request body
      const response = await fetch('/api/make-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: selectedTemplate.price }),
      });
  
      const data = await response.json();
  
      if (!data.order_id) {
        console.error("Order ID not received:", data);
        setIsProcessing(false);
        return;
      }
  
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: selectedTemplate.price * 100, // Convert to paise
        currency: 'INR',
        name: "viiew.me",
        description: '',
        order_id: data.order_id,
        handler: async function (response) {
          if (response.razorpay_payment_id) {
            try {
              // Call API to update payment status
              await fetch('/api/update/payment-success', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: userSession?.user?.email,
                  order_id: data.order_id,
                  payment_id: response.razorpay_payment_id,
                  amount: selectedTemplate.price,
                  template: formData.template,
                  currency: 'INR',
                  status: "completed",
                }),
              });

              setFormData((prev) => ({ ...prev }));
              await generateViiew();
            } catch (err) {
              console.error("Error updating payment status:", err);
            }
          } else {
            setIsPaymentFailed(true);
            await toggleSheetVisibility(SHEETS.PAYMENT_SUCCESS, true);
          }
        },
        modal: {
          ondismiss: async function () {
            setIsPaymentFailed(true);
            await toggleSheetVisibility(SHEETS.PAYMENT_SUCCESS, true);
          }
        },
        prefill: {
          name: userSession?.user?.username,
          email: userSession?.user?.email,
        },
        theme: {
          color: '#485ddc'
        }
      };
  
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment error", error);
    } finally {
      setIsProcessing(false);
    }
  };
  
  const handleSaveChanges = async () => {
    if (!selectedTemplate) {
      console.error("No template selected");
      return;
    }

    // Fetch purchased templates for the user
    const response = await fetch(`/api/purchased-templates/${userSession?.user?.id}`);
    const data = await response.json();

    if (!response.ok) {
      console.error("Error fetching purchased templates:", data.error);
      return;
    }
      if(!formData?.first_name){ 
        addToast({
          title: "Opps!",
          description: "Please fill all the required fields!",
          variant: 'flat',
          color: "warning",
          size: "lg",
        })
        return
      }
      if(!formData?.spotlight_image || !formData?.profile_image){
        addToast({
          title: "Opps!",
          description: "Please upload avatar to continue!",
          variant: 'flat',
          color: "warning",
          size: "lg",
        })
        return
      }
      const purchasedTemplates = data.templates || [];
      if (selectedTemplate.isPro && !purchasedTemplates.includes(selectedTemplate.template_name)) {
        await handlePayment();
      } else {
        await generateViiew();
      }
  };





  return {
    avatar,
    loading,
    formData,
    userBanner,
    themeColors,
    isProcessing,
    videosVisible,
    enableGallery,
    sessionStatus,
    isPaymentFailed,
    welcomeMessage,
    sheetsVisibility,
    selectedTemplate,
    savedLastUserData,
    selectedThemeColor,
    selectedContentColor,
    selectedCollaboration,
    setAvatar,
    setFormData,
    handleChange,
    setIsPaymentFailed,
    handlePayment,
    setUserBanner,
    handleSubmit,
    handleAddLink,
    setThemeColors,
    handleVideoLink,
    handleRemoveLink,
    handleSaveChanges,
    setWelcomeMessage,
    handleAvatarUpload,
    handleEnableGallery,
    toggleSheetVisibility,
    handleRemoveVideoLink,
    handleEnableVideoLinks,
    handleChooseThemeColor,
    handleRemoveUploadedImage,
    handleCollaborationButtonChange,


  }
}