/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { FETCH_DISCOVER_MOVIES, FETCH_MOVIE_CATEGORY, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAY_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UPCOMING_MOVIES, FETCH_MOVIE_GENRE } from '../constants/actionType';
import API from '../api';

export const fetchMovieCategory = (category) => async (dispatch) => {
  // eslint-disable-next-line prefer-const
  let totalMovies = [];
  for (let page = 1; page < 15; page++) {
    const { data: { results } } = await API.get(`/movie/${category}`, { params: { page } });
    totalMovies.push(...results);
    console.log(totalMovies);
    dispatch({ type: FETCH_MOVIE_CATEGORY, payload: { category, totalMovies } });
  }
};

// export const fetchUpComingMovies = () => async (dispatch) => {
//   for (let page = 1; page < 11; page++) {
//     const { data } = await API.get('movie/upcoming', { params: { page } });
//     dispatch({ type: FETCH_UPCOMING_MOVIES, payload: data.results });
//   }
// };

export const fetchMovieGenre = () => async (dispatch) => {
  const { data } = await API.get('/genre/movie/list');
  dispatch({ type: FETCH_MOVIE_GENRE, payload: data.genres });
};
