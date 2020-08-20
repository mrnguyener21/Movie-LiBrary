import { INDIVIDUAL_MOVIE, INDIVIDUAL_MOVIE_CAST } from '../constants/actionType';

export default (state = {}, action) => {
  switch (action.type) {
    case INDIVIDUAL_MOVIE: return { ...state, ...action.payload };
    case INDIVIDUAL_MOVIE_CAST: return { ...state, cast: action.payload };

    default: return state;
  }
};

