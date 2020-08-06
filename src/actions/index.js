/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { FETCH_MOVIE_CATEGORY, FETCH_MOVIE_GENRE, FETCH_INDIVIDUAL_MOVIE_GENRE } from '../constants/actionType';
import API from '../api';

export const fetchMovieCategory = (category) => async (dispatch) => {
  // eslint-disable-next-line prefer-const
  let totalMovies = [];
  for (let page = 1; page < 15; page++) {
    const { data: { results } } = await API.get(`/movie/${category}`, { params: { page } });
    totalMovies.push(...results);
    // console.log(totalMovies);
    dispatch({ type: FETCH_MOVIE_CATEGORY, payload: { category, totalMovies } });
  }
};

export const fetchMovieGenre = () => async (dispatch) => {
  const { data } = await API.get('/genre/movie/list');
  dispatch({ type: FETCH_MOVIE_GENRE, payload: data.genres });
};

export const fetchIndividualMovieGenre = () => async (dispatch) => {
  const { data: { results } } = await API.get('/discover/movie');
  dispatch({ type: FETCH_INDIVIDUAL_MOVIE_GENRE, payload: results });
};
