import { CHOOSE_MOVIE_GENRE } from '../constants/actionType';

export default (state = { genreId: 0, results: [] }, action) => {
  switch (action.type) {
    case CHOOSE_MOVIE_GENRE: return { page: action.payload.action, genreId: action.payload.genreId, data: action.payload.results };
    default: return state;
  }
};
