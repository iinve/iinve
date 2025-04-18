const shortenUrl = async (url) => {
  const apiUrl = `https://api.tinyurl.com/create?url=${encodeURIComponent(url)}`;
  const response = await fetch(apiUrl);
  if (response.ok) {
      const data = await response.json();
      return data.tiny_url; 
  }
  throw new Error("Failed to shorten URL");
};
const URLUtils = { shortenUrl };
export default URLUtils;