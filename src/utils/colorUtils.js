import chroma from "chroma-js";
import { extractColors } from "extract-colors";

export function generateColorVariants(color, amount = 1){
  return {
    lighter: chroma(color||"#FFF0DF").brighten(amount).hex(),
    darker: chroma(color||"#FF9F31").darken(amount).hex(),  
    highlight:chroma(color || "#FF9F31")
    .brighten(2) 
    .saturate(2) 
    .hex()
  };
};

export async function extractColorFromUserImage(imageUrl){
    try {
      const result = await extractColors(imageUrl);
      return result;
    } catch (error) {
      console.error("Error extracting colors:", error);
    }
}