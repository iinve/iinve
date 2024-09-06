import { useState } from "react";

export const useMap = (data) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleOpenGoogleMaps = () => {
    const location = data?.map_name;
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

    window.open(googleMapsUrl, "_blank");
  };

  const mapOnLoad = () => {
    setIsLoaded(true);
  };
  return { handleOpenGoogleMaps, mapOnLoad, isLoaded };
};
