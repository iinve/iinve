export const fetchInstagramData = async (userName) => {
  const url = `https://instagram-scraper-api2.p.rapidapi.com/v1.2/posts?username_or_id_or_url=${userName}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'cc47f5567bmsh4a2cd9240e24e98p1ef90bjsnf88ec7e75e71',
      'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);  
    const result = await response.json();  
    
    return result;  
  } catch (error) {
    console.error('Error fetching data:', error);  // Handle any errors here
  }
  
}