import { useEffect, useState } from "react";
import { extractColorFromUserImage } from "utils/colorUtils";
import { getImagePreviewUrl } from "utils/imageUtils";

export const useWallDashboard = (image) => {
  const [colorFromImage, setColorFromImage] = useState();
  useEffect(() => {
    const processImage = async () => {
      const imageUrl = await getImagePreviewUrl(image);
      console.log("imageUrl", imageUrl);

      if (imageUrl) {
        const extractedColors = await extractColorFromUserImage(imageUrl);

        const notIncludeWhite = !extractedColors?.some(
          (color) => color.hex === "#ffffff"
        );
        const notIncludeBlack = !extractedColors?.some(
          (color) => color.hex === "#000000"
        );

        if (notIncludeWhite && notIncludeBlack) {
          setColorFromImage([
            ...(Array.isArray(extractedColors) ? extractedColors : []),
            { hex: "#ffffff" },
            { hex: "#000000" },
          ]);
        } else if (notIncludeWhite) {
          setColorFromImage([...extractedColors, { hex: "#ffffff" }]);
        } else if (notIncludeBlack) {
          setColorFromImage([...extractedColors, { hex: "#000000" }]);
        } else {
          setColorFromImage(extractedColors);
        }

        if (!extractedColors || extractedColors.length < 2) {
          console.error("Not enough colors extracted.");
        }
      }
    };

    if (image) {
      processImage();
    }
  }, [image]);

  return { colorFromImage, setColorFromImage };
};
