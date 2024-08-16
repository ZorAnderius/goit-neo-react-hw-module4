import axios from 'axios';
import filterData from './filterData';

const API_ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY_UNSPLASH;
axios.defaults.baseURL = 'https://api.unsplash.com/';

const fetchPhotos = async ({ query, page = 1, per_page = 20 }) => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page,
      orientation: 'landscape',
      },
      headers: {
        Authorization: `Client-ID ${API_ACCESS_KEY}`
    },
  });
  return filterData(data);
};

export default fetchPhotos;
