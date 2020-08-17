import { FETCH_MOVIE_GENRE_CATEGORY } from '../constants/actionType';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE_GENRE_CATEGORY:
      return { ...state, [action.payload.genreId]: action.payload.results };

    default: return state;
  }
};

