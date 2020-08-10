import { CHOOSE_MOVIE_GENRE, PAGINATION_MOVIE_GENRE } from '../constants/actionType';

export default (state = { genreId: 0, results: [], page: 0 }, action) => {
  switch (action.type) {
    case CHOOSE_MOVIE_GENRE: return { genreId: action.payload.genreId, data: action.payload.results, page: action.payload.page };

    case PAGINATION_MOVIE_GENRE: return { page: action.payload.page + 1 };

    default: return state;
  }
};
