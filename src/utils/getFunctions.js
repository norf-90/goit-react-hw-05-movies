import axios from 'axios';
const KEY = '63240915768e2fa639cf91287e69284e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getTrends = abortController =>
  axios.get(`${BASE_URL}trending/movie/week?api_key=${KEY}`, {
    signal: abortController.signal,
  });

const getMovieDetails = (movieId, abortController) =>
  axios.get(`${BASE_URL}movie/${movieId}?api_key=${KEY}`, {
    signal: abortController.signal,
  });

const getGenres = async () => {
  const responce = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${KEY}`
  );
  localStorage.setItem('genres', JSON.stringify(responce.data.genres));
  return responce.data.genres;
};

const getCast = (id, abortController) =>
  axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`, {
    signal: abortController.signal,
  });

const getReviews = (id, abortController) =>
  axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`, {
    signal: abortController.signal,
  });

const getMovie = (searchName, abortController) => {
  return axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${searchName}&page=1&include_adult=false`,
    {
      signal: abortController.signal,
    }
  );
};

export { getTrends, getMovieDetails, getGenres, getCast, getReviews, getMovie };
