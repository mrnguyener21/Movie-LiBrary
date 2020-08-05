import { FETCH_DISCOVER_MOVIES, FETCH_MOVIE_CATEGORY, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAY_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UPCOMING_MOVIES, FETCH_MOVIE_GENRE } from '../constants/actionType';

// const movieCategories = {
//   discover: [{ movie, id }, { movie, id }],
//   top_rated: [{ movie, id }, { movie, id }],
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload.results };

    // case FETCH_DISCOVER_MOVIES: return [...state, { discover: [...action.payload] }];
    // case FETCH_POPULAR_MOVIES: return [...state, ...action.payload];
    // case FETCH_NOW_PLAY_MOVIES: return [...state, ...action.payload];
    // case FETCH_TOP_RATED_MOVIES: return [...state, ...action.payload];
    // case FETCH_UPCOMING_MOVIES: return [...state, ...action.payload];
    case FETCH_MOVIE_GENRE: return { ...state, genres: action.payload };
    default: return state;
  }
};

