import ProIcon from "ProUI/Icons/icons";

const shareContent = async ({ title, text, url }) => {
  if (!navigator.canShare) {
    console.warn("Web Share API not supported.");
    return false;
  }
  try {
    await navigator.share({
      title: title,
      text: text || "",
      url: url || window.location.href,
    });

    return true;
  } catch (error) {
    addToast({
      title: "Opps!",
      description: "Something went wrong. Please try again.",
      variant: 'flat',
      color: "warning",
      size: "md"
    })
    console.error("Error sharing:", error);
    return false;
  }
};

// Export as an object
const shareUtils = { shareContent };
export default shareUtils;


export const getRatingStars = (rating) => {
  const totalStars = 5;
  return (
    <span className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <ProIcon
          key={index}
          name={index < rating ? 'IoMdStar' : 'IoIosStarOutline'}
          color={'#FFD700'} 
          size={16}
        />
      ))}
    </span>
  );
};