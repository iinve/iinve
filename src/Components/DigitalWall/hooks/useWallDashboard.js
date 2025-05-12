import { useEffect, useState } from "react";
import { extractColorFromUserImage } from "utils/colorUtils";

export const useWallDashboard = (image) => {
  const [colorFromImage, setColorFromImage] = useState()
  useEffect(() => {
    const imageUrl = image;
    if (imageUrl) {
      const fetchColors = async () => {
        const extractedColors = await extractColorFromUserImage(imageUrl);
        console.log(extractedColors, 'extractedColors')
        const notIncludeWhite = !extractedColors.some(color => color.hex === "#ffffff");
        const notIncludeBlack = !extractedColors.some(color => color.hex === "#000000");
        if (notIncludeWhite && notIncludeBlack) {
          setColorFromImage([...extractedColors, { hex: "#ffffff" }, { hex: "#000000" }]);
        } else if (notIncludeWhite) {
          setColorFromImage([...extractedColors, { hex: "#ffffff" }]);
        } else if (notIncludeBlack) {
          setColorFromImage([...extractedColors, { hex: "#000000" }]);
        } else {
          setColorFromImage(extractedColors);
        }

        if (!extractedColors || extractedColors.length < 2) {
          console.error("Not enough colors extracted.");
          return;
        }
        // const sortedColors = extractedColors?.sort((a, b) => b.score - a.score);
        // const selectedColors = sortedColors?.slice(0, 2).map(color => color.hex);
        // setColorFromImage({ ...colorScheme, theme_color: selectedColors[0], content_color: selectedColors[1] })
      };
      fetchColors();
    }
  }, [image]);


  return { colorFromImage, setColorFromImage }
}