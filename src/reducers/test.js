import { TESTONE, FETCH_MOVIES } from '../constants/actionType';

export default (state = [], action) => {
  switch (action.type) {
    case TESTONE: return [...state, 'test succesful'];
    case FETCH_MOVIES: return action.payload;
    default: return state;
  }
};

