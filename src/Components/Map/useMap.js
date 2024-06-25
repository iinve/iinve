import { useState } from "react";

export const useMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleOpenGoogleMaps = () => {
    const location = "Aalankrita Resort And Convention";
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

    window.open(googleMapsUrl, "_blank");
  };

  const mapOnLoad = () => {
    setIsLoaded(true);
  };
  return { handleOpenGoogleMaps, mapOnLoad, isLoaded };
};
