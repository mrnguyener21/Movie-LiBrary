import { FETCH_MOVIE_CATEGORY, FETCH_MOVIE_GENRE, FETCH_INDIVIDUAL_MOVIE_GENRE } from '../constants/actionType';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload.totalMovies };

    case FETCH_MOVIE_GENRE: return { ...state, genres: action.payload };

      // case FETCH_INDIVIDUAL_MOVIE_GENRE: return { ...state, discover: action.payload };

    default: return state;
  }
};

