import { CHOOSE_MOVIE_GENRE, PAGINATION_MOVIE_GENRE } from '../constants/actionType';

export default (state = { genreId: 0, data: [] }, action) => {
  switch (action.type) {
    case CHOOSE_MOVIE_GENRE: return { genreId: action.payload.genreId, data: action.payload.totalMovies };

      // case PAGINATION_MOVIE_GENRE: return { page: action.payload.page + 1 };

    default: return state;
  }
};
