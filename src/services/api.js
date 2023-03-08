import axios from "axios";

const API_KEY ='32812344-7b97d09a2c2134941397ef385';

axios.defaults.baseURL = 'https://pixabay.com/api/';

 const getImages = async(searchQuery, page = 1)=> {
    const searchParams = new URLSearchParams({
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
    });
  
    try {
      const response = await axios.get(
        `?key=${API_KEY}&q=${searchQuery}&${searchParams}`
      );
      const images = response.data;
      return images;
    } catch (error) {
      throw new Error(error);
    }
  }

  export default getImages;
