import { useState } from "react";

export const useMap = (data) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOpenGoogleMaps = (locationUrl) => {
    // const locationUrl = data?.map_link;

    const isValidMapsLink =
      locationUrl?.startsWith("https://maps.app.goo.gl") ||
      locationUrl?.startsWith("https://goo.gl/maps") ||
      locationUrl?.startsWith("https://www.google.com/maps");

    if (!isValidMapsLink) {
      console.warn("Invalid or missing Google Maps link.");
      return;
    }

    window.open(locationUrl, "_blank");
  };

  const mapOnLoad = () => {
    setIsLoaded(true);
  };

  return { handleOpenGoogleMaps, mapOnLoad, isLoaded };
};
