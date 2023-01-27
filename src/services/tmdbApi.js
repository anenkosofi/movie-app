import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bfcd7a06a5bb09fb5aafe756d2f60f73';

axios.defaults.baseURL = `${BASE_URL}`;

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: { api_key: API_KEY },
    });
    return response.results;
  } catch (error) {
    console.log(error);
  }
};
