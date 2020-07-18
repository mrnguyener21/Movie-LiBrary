import { FETCH_DISCOVER_MOVIES, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAY_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UPCOMING_MOVIES, FETCH_MOVIE_GENRE } from '../constants/actionType';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DISCOVER_MOVIES: return [...state, action.payload];
    case FETCH_POPULAR_MOVIES: return [...state, action.payload];
    case FETCH_NOW_PLAY_MOVIES: return [...state, action.payload];
    case FETCH_TOP_RATED_MOVIES: return [...state, action.payload];
    case FETCH_UPCOMING_MOVIES: return [...state, action.payload];
    case FETCH_MOVIE_GENRE: return [...state, action.payload];
    default: return state;
  }
};

