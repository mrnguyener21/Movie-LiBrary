import { MOVIE_RECOMMENDATION } from '../constants/actionType';

export default (state = [], action) => {
  switch (action.type) {
    case MOVIE_RECOMMENDATION: return [...action.payload];

    default: return state;
  }
};
