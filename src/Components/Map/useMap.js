import { useState } from "react";

export const useMap = (data) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOpenGoogleMaps = () => {
    const locationUrl = data?.map_link;

    if (!locationUrl || !locationUrl.startsWith("https://maps.app.goo.gl")) {
      console.warn("Invalid or missing Google Maps short link.");
      return;
    }

    window.open(locationUrl, "_blank");
  };

  const mapOnLoad = () => {
    setIsLoaded(true);
  };

  return { handleOpenGoogleMaps, mapOnLoad, isLoaded };
};
