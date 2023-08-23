import axios from "axios";
axios.defaults.baseURL = `https://pixabay.com/api/`;
 const API_KEY = '38015405-7546e421a34b4b2277fcb8cdc';

 export const fetchImage = async (query,page) => {
  try {
    const response = await axios.get('/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 12,
      },
    });
    console.log(query,page);
    return response.data.hits;
  } catch (error) {
    console.log('error')
    // throw error;
    
}}