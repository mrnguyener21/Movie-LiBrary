import { FETCH_DISCOVER_MOVIES, FETCH_MOVIE_CATEGORY, FETCH_POPULAR_MOVIES, FETCH_NOW_PLAY_MOVIES, FETCH_TOP_RATED_MOVIES, FETCH_UPCOMING_MOVIES, FETCH_MOVIE_GENRE } from '../constants/actionType';

// const movieCategories = {
//   discover: [{ movie, id }, { movie, id }],
//   top_rated: [{ movie, id }, { movie, id }],
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload.totalMovies };

    case FETCH_MOVIE_GENRE: return { ...state, genres: action.payload };
    default: return state;
  }
};

