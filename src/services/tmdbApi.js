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

const getTVSeriesCast = async id => {
  try {
    const response = await axios.get(`/tv/${id}/credits`, {
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

const getPopularMovies = async () => {
  try {
    const response = await axios.get('/movie/popular', {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMovies = async () => {
  try {
    const response = await axios.get('/movie/top_rated', {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getPopularTVSeries = async () => {
  try {
    const response = await axios.get('/tv/popular', {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedTVSeries = async () => {
  try {
    const response = await axios.get('/tv/top_rated', {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getSimilarMovies = async id => {
  try {
    const response = await axios.get(`/movie/${id}/similar`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getSimilarTVSeries = async id => {
  try {
    const response = await axios.get(`/tv/${id}/similar`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getMovieVideos = async id => {
  try {
    const response = await axios.get(`/movie/${id}/videos`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getTVSeriesVideos = async id => {
  try {
    const response = await axios.get(`/tv/${id}/videos`, {
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
  getTVSeriesCast,
  getTrendingTVSeries,
  getTVSeriesByQuery,
  getTVSeriesById,
  getPopularMovies,
  getTopRatedMovies,
  getPopularTVSeries,
  getTopRatedTVSeries,
  getSimilarMovies,
  getSimilarTVSeries,
  getMovieVideos,
  getTVSeriesVideos,
};
