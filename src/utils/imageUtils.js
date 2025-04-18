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



export const getImagePreviewUrl = (inputFileOrUrl) => {
  if (!inputFileOrUrl) return ""; // Return empty if no image is provided

  // If it's already a URL (backend-stored image), return it
  if (typeof inputFileOrUrl === "string" && inputFileOrUrl.startsWith("http")) {
    return inputFileOrUrl;
  }

  // If it's a File object, create a temporary Blob URL for preview
  if (inputFileOrUrl instanceof File) {
    return URL.createObjectURL(inputFileOrUrl);
  }

  return ""; // Return empty if it's neither a File nor a URL
};


import imageCompression from 'browser-image-compression';

async function handleImageCompression(base64String) {
  const mimeType = base64String.match(/data:(.*?);base64,/)[1]; // Extract MIME type
  const imageBlob = base64ToBlob(base64String, mimeType);
  const imageFile = new File([imageBlob], "image.jpg", { type: mimeType });

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, options);

    const compressedBase64 = await fileToBase64(compressedFile);
    return compressedBase64; // Return compressed Base64 string
  } catch (error) {
    console.error(error);
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


export { base64ToBlob, handleImageCompression };

