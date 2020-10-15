import { INDIVIDUAL_MOVIE, INDIVIDUAL_MOVIE_CAST, INDIVIDUAL_MOVIE_TRAILER } from '../constants/actionType';

export default (state = {}, action) => {
  switch (action.type) {
    case INDIVIDUAL_MOVIE: return { ...state, ...action.payload };
    case INDIVIDUAL_MOVIE_CAST: return { ...state, cast: action.payload };
    case INDIVIDUAL_MOVIE_TRAILER: return { ...state, video: action.payload };

    default: return state;
  }
};

