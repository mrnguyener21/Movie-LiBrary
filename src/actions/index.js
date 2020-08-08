/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { FETCH_MOVIE_CATEGORY, FETCH_MOVIE_GENRE, CHOOSE_MOVIE_GENRE } from '../constants/actionType';
import API from '../api';

export const fetchMovieCategory = (category) => async (dispatch) => {
  // eslint-disable-next-line prefer-const
  let totalMovies = [];
  const { data: { total_pages } } = await API.get(`/movie/${category}`);

  for (let page = 1; page < 2; page++) {
    const { data: { results } } = await API.get(`/movie/${category}`, { params: { page } });
    totalMovies.push(...results);

    dispatch({ type: FETCH_MOVIE_CATEGORY, payload: { category, totalMovies } });
  }
};

export const fetchMovieGenre = () => async (dispatch) => {
  const { data } = await API.get('/genre/movie/list');
  dispatch({ type: FETCH_MOVIE_GENRE, payload: data.genres });
};

export const chooseMovieGenre = (number) => ({ type: CHOOSE_MOVIE_GENRE, payload: number });

