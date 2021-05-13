import axios from 'axios';
import defaultImage from '../images/defaultImage.png';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'ed4770d472da6341d2e53ccb9e288320';
const IMG_URL = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const moviesApi = {
  // get trending movies
  async getTrending() {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return data.results;
  },
  // search movies
  async searchMovies(query) {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`,
    );
    return data.results;
  },
  // get movie details
  async getMovieDetails(movieId) {
    const { data } = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    const {
      poster_path,
      title,
      original_name,
      release_date,
      vote_average,
      overview,
      genres,
    } = data;
    const adaptData = {
      image: poster_path ? `${IMG_URL}${poster_path}` : defaultImage,
      title: title || original_name,
      year: release_date.split('-')[0],
      rating: vote_average * 10,
      overview,
      genres: genres.flatMap(({ name }) => name).join(', '),
    };
    return adaptData;
  },
  // get movie credits
  async getMovieCredits(movieId) {
    const { data } = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return data.cast;
  },
  // get movie reviews
  async getMovieReviews(movieId) {
    const { data } = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    return data.results;
  },
};

export default moviesApi;
