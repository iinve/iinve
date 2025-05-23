export const useWhatsAppMessage = () => {

  const handleSendWhatsAppMessage = (mode) => {
    if (mode === 'invite') {
      window.location.href =
        "https://api.whatsapp.com/send?phone=918075952456&text=Hi%2C%0A%0AI%27m+interested+in+creating+an+e-invitation+for+my+wedding.+Could+you+please+share+details+about+your+services%2C+packages%2C+and+pricing%3F%0A%0AThank+you%21";
    } else if (mode === 'demo') {
      window.location.href =
        "https://api.whatsapp.com/send?phone=918075952456&text=Hi%2C%0A%0AI%27m+interested+in+booking+a+demo+for+your+e-invitation+service.+Could+you+please+let+me+know+the+next+available+slot+and+how+to+proceed%3F%0A%0AThank+you%21";

    } else if (mode === 'wall') {
        window.location.href =
          "https://api.whatsapp.com/send?phone=918075952456&text=Hi%2C%0A%0AI%27m+interested+in+creating+an+e-wall+for+my+shop+to+showcase+offers+and+new+arrivals.+Could+you+please+share+more+details+about+the+process%2C+features%2C+and+pricing%3F%0A%0AThank+you%21";
    } else if (mode === 'contact') {
      window.location.href =
        "https://api.whatsapp.com/send?phone=918075952456&text=Hi%2C%0A%0AI%27d+like+to+know+more+about+your+services.+Please+let+me+know+how+I+can+get+started.%0A%0AThank+you%21";
    }
  };

  return { handleSendWhatsAppMessage }
}