import { FETCH_DISCOVER_MOVIES, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAY_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UPCOMING_MOVIES, FETCH_MOVIE_GENRE } from '../constants/actionType';
import API from '../api';

// export const testOne = () => ({type:TESTONE});
export const fetchDiscoverMovies = () => async (dispatch) => {
  const { data } = await API.get('/discover/movie');

  dispatch({ type: FETCH_DISCOVER_MOVIES, payload: data.results });
};

export const fetchPopularMovies = () => async (dispatch) => {
  const { data } = await API.get('/movie/popular');
  dispatch({ type: FETCH_POPULAR_MOVIES, payload: data.results });
};

export const fetchNowPlayingMovies = () => async (dispatch) => {
  const { data } = await API.get('/movie/now_playing');
  dispatch({ type: FETCH_NOW_PLAY_MOVIES, payload: data.results });
};

export const fetchTopRatedMovies = () => async (dispatch) => {
  const { data } = await API.get('/movie/top_rated');
  dispatch({ type: FETCH_TOP_RATED_MOVIES, payload: data.results });
};

export const fetchUpComingMovies = () => async (dispatch) => {
  const { data } = await API.get('/movie/upcoming');
  dispatch({ type: FETCH_UPCOMING_MOVIES, payload: data.results });
};

export const fetchMovieGenre = () => async (dispatch) => {
  const { data } = await API.get('/genre/movie/list');
  dispatch({ type: FETCH_MOVIE_GENRE, payload: data.genres });
};
