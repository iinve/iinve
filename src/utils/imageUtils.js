import imageCompression from 'browser-image-compression';

export async function blobUrlToFile(blobUrl, fileName = "image.png") {
  try {
      const response = await fetch(blobUrl); // Fetch the blob
      const blob = await response.blob();    // Convert to Blob
      const file = new File([blob], fileName, { type: blob.type }); // Convert Blob to File
      return file;
  } catch (error) {
      console.error("Error converting Blob URL to File:", error);
      return null;
  }
}


export async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}



export const getImagePreviewUrl = async (inputFileOrUrl) => {
  if (!inputFileOrUrl) return ""; // Return empty if no image is provided
  // If it's already a URL (backend-stored image), return it
  if (typeof inputFileOrUrl === "string" && inputFileOrUrl.startsWith("http")) {
    return inputFileOrUrl;
  }

  // If it's a File object, create a temporary Blob URL for preview
  if (inputFileOrUrl instanceof File ||  inputFileOrUrl instanceof Blob) {
    return await blobToBase64(inputFileOrUrl);
  }

  return inputFileOrUrl; // Return empty if it's neither a File nor a URL
};

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export async function compressImage(imageFile) {
  const options = {
    maxSizeMB: 2,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);

    // Use original file extension
    const extension = imageFile.type.split('/')[1];
    const renamedFile = new File([compressedFile], imageFile.name || `image.${extension}`, {
      type: compressedFile.type,
      lastModified: Date.now(),
    });

    return renamedFile;
  } catch (error) {
    console.error('Image compression failed:', error);
    return null;
  }
}

// Convert Base64 to Blob
function base64ToBlob(base64, mimeType) {
  const byteCharacters = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}


export { base64ToBlob };

