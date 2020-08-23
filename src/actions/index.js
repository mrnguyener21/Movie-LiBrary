/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */

import { FETCH_MOVIE_CATEGORY, FETCH_MOVIE_GENRE, CHOOSE_MOVIE_CATEGORY, CHOOSE_MOVIE_GENRE, FETCH_MOVIE_GENRE_CATEGORY, INDIVIDUAL_MOVIE, INDIVIDUAL_MOVIE_CAST, MOVIE_RECOMMENDATION } from '../constants/actionType';
import API from '../api';

export const fetchMovieCategory = (category) => async (dispatch) => {
  const totalMovies = [];
  for (let page = 1; page < 3; page++) {
    const { data: { results } } = await API.get(`/movie/${category}`, { params: { page } });
    totalMovies.push(...results);

    dispatch({ type: FETCH_MOVIE_CATEGORY, payload: { category, results: totalMovies } });
  }
};
export const fetchMovieGenreCategory = (genreId) => async (dispatch) => {
  const totalMovies = [];
  for (let page = 1; page < 3; page++) {
    const { data } = await API.get('/discover/movie', { params: { with_genres: genreId, page } });
    totalMovies.push(...data.results);
    dispatch({ type: FETCH_MOVIE_GENRE_CATEGORY, payload: { genreId, results: totalMovies } });
  }
};

export const fetchMovieGenre = () => async (dispatch) => {
  const { data } = await API.get('/genre/movie/list');

  dispatch({ type: FETCH_MOVIE_GENRE, payload: data.genres });
};

export const chooseMovieCategory = (category, page) => async (dispatch) => {
  const { data } = await API.get(`/movie/${category}`, { params: { page } });

  dispatch({ type: CHOOSE_MOVIE_CATEGORY, payload: { category, results: data, page } });
};

export const chooseMovieGenre = (genreId, page) => async (dispatch) => {
  const { data } = await API.get('/discover/movie', { params: { with_genres: genreId, page } });

  dispatch({ type: CHOOSE_MOVIE_GENRE, payload: { genreId, results: data, page } });
};

export const individualMovie = (movie_id) => async (dispatch) => {
  const { data } = await API.get(`/movie/${movie_id}`);
  dispatch({ type: INDIVIDUAL_MOVIE, payload: data });
};
export const individualMovieCast = (movie_id) => async (dispatch) => {
  const { data: { cast } } = await API.get(`/movie/${movie_id}/credits`);
  dispatch({ type: INDIVIDUAL_MOVIE_CAST, payload: cast });
};

export const movieRecommendation = (movie_id) => async (dispatch) => {
  const { data: { results } } = await API.get(`/movie/${movie_id}/recommendations`);
  dispatch({ type: MOVIE_RECOMMENDATION, payload: results });
};
