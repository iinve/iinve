
import AboutInfo from "../AboutInfo/AboutInfo";
import BannerUploader from "../BannerUploader/BannerUploader";
import PortfolioLinksUploader from "../PortfolioLinksUploader/PortfolioLinksUploader";
import SocialLinksForm from "../SocialLinkForm/SocialLinkForm";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import UserAvatarUploader from "../UserAvataruploader/UserAvatarUploader";
import UserImageUploader from "../UserImageUploader/UserImageUploader";
import UserVideoUploader from "../UserVideoUploader/UserVideoUploader";
// import ConnectionDataForm from "../ConnectionDataFrom/ConnectionDataForm";
import CollaboratorForm from "../ConnectionDataFrom/ConnectionDataForm";
import { ProInput } from "ProUI/Form/Form";


export const EDITOR_COMPONENT_LIST = ({
  featureName,
  formData,
  setFormData,
  handleChange,
  handleAddLink,
  handleRemoveLink,
  handleRemoveUploadedImage,
  handleEnableGallery,
  handleRemoveVideoLink,
  handleVideoLink,
  handleEnableVideoLinks,
  videosVisible,
  enableGallery,
  selectedCollaboration,
  handleCollaborationButtonChange,
  themeColors,
  selectedContentColor,
  selectedThemeColor,
  handleChooseThemeColor,
  handleAvatarUpload
}) => {

  const components = {
    AVATAR: <UserAvatarUploader formData={formData} setFormData={setFormData} handleAvatarUpload={handleAvatarUpload} key="avatar" />,
    BANNER: <BannerUploader formData={formData} setFormData={setFormData} key="banner" />,
    THEME_EDITOR: <ThemeSelector
      themeColors={themeColors}
      selectedContentColor={selectedContentColor}
      selectedThemeColor={selectedThemeColor}
      handleChooseThemeColor={handleChooseThemeColor}
      key="theme"
    />,
    NAME: <ProInput className='mb-2' type='text' name="first_name" placeholder='Name' variant="faded" color="default" onChange={handleChange} key="name" value={formData?.first_name} isRequired autoComplete='off' />,
    GREETING: <ProInput className='mb-2' type='text' name="greeting" placeholder='Greeting (eg: Hi, Hello, Hey, Hola etc)' variant="faded" color="default" onChange={handleChange} key="greeting" value={formData?.greeting} />,
    BIO: <ProInput className='mb-2' type='text' name="bio" placeholder='Bio' variant="faded" color="default" onChange={handleChange} key="bio" value={formData?.bio} />,
    ABOUT_INFO: <AboutInfo formData={formData} setFormData={setFormData} key="about_info" />,
    COLLAB_BUTTON: <CollaboratorForm selectedCollaboration={selectedCollaboration} handleCollaborationButtonChange={handleCollaborationButtonChange} formData={formData} setFormData={setFormData} />,
    SOCIAL_LINKS: <SocialLinksForm formData={formData} setFormData={setFormData} key="social_links" />,
    PORTFOLIO_LINKS: <PortfolioLinksUploader
      formData={formData}
      setFormData={setFormData}
      handleAddLink={handleAddLink}
      handleRemoveLink={handleRemoveLink}
      key="portfolio_links"
    />,
    VIDEO_LINKS: <UserVideoUploader
      formData={formData}
      setFormData={setFormData}
      videosVisible={videosVisible}
      handleEnableVideoLinks={handleEnableVideoLinks}
      handleRemoveVideoLink={handleRemoveVideoLink}
      handleVideoLink={handleVideoLink}
      key="video_links"
    />,
    GALLERY: <UserImageUploader
      formData={formData}
      setFormData={setFormData}
      enableGallery={enableGallery}
      handleEnableGallery={handleEnableGallery}
      handleRemoveUploadedImage={handleRemoveUploadedImage}
      key="gallery"
    />,
  };

  // Return all components if fieldName is "ALL", otherwise return a single component
  return featureName === "ALL" ? Object.values(components) : components[featureName] || null;
};
