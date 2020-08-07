import { CHOOSE_MOVIE_GENRE } from '../constants/actionType';

export default (state = 0, action) => {
  switch (action.type) {
    case CHOOSE_MOVIE_GENRE: return state - state + action.payload;

    default: return state;
  }
};

