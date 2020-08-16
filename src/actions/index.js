/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import { FETCH_MOVIE_CATEGORY, FETCH_MOVIE_GENRE, CHOOSE_MOVIE_GENRE, PAGINATION_MOVIE_GENRE } from '../constants/actionType';
import API from '../api';

export const fetchMovieCategory = (category) => async (dispatch) => {
  const totalMovies = [];
  for (let page = 1; page < 6; page++) {
    const { data: { results } } = await API.get(`/movie/${category}`, { params: { page } });
    totalMovies.push(...results);

    dispatch({ type: FETCH_MOVIE_CATEGORY, payload: { category, results: totalMovies } });
  }
};

export const fetchMovieGenre = () => async (dispatch) => {
  const { data } = await API.get('/genre/movie/list');

  dispatch({ type: FETCH_MOVIE_GENRE, payload: data.genres });
};

export const chooseMovieGenre = (genreId, page) => async (dispatch) => {
  const { data } = await API.get('/discover/movie', { params: { with_genres: genreId, page } });

  dispatch({ type: CHOOSE_MOVIE_GENRE, payload: { genreId, results: data, page } });
};

// export const paginationMovieGenre = (page) => async (dispatch) => {
//   const { data } = await API.get('/discover/movie', { params: { page } });
//   dispatch({ type: PAGINATION_MOVIE_GENRE, payload: page, results: data });
// };
