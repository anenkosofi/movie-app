import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'bfcd7a06a5bb09fb5aafe756d2f60f73';

axios.defaults.baseURL = `${BASE_URL}`;

const getTrendingMovies = async () => {
  try {
    const response = await axios.get('/trending/movie/day', {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMovieByQuery = async (query, page) => {
  try {
    const response = await axios.get('/search/movie', {
      params: { api_key: API_KEY, query, page },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMovieById = async id => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMovieCast = async id => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTrendingTVSeries = async () => {
  try {
    const response = await axios.get('/trending/tv/day', {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTVSeriesByQuery = async (query, page) => {
  try {
    const response = await axios.get('/search/tv', {
      params: { api_key: API_KEY, query, page },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTVSeriesById = async id => {
  try {
    const response = await axios.get(`/tv/${id}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getTrendingMovies,
  getMovieByQuery,
  getMovieById,
  getMovieCast,
  getTrendingTVSeries,
  getTVSeriesByQuery,
  getTVSeriesById,
};
