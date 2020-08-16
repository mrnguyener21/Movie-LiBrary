import { FETCH_MOVIE_CATEGORY, FETCH_MOVIE_GENRE } from '../constants/actionType';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload.results };

    case FETCH_MOVIE_GENRE: return { ...state, genres: action.payload };

    default: return state;
  }
};

