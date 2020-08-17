import { CHOOSE_MOVIE_GENRE, CHOOSE_MOVIE_CATEGORY } from '../constants/actionType';

export default (state = { category: 'home', genreId: 0, results: [], page: 0 }, action) => {
  switch (action.type) {
    case CHOOSE_MOVIE_GENRE: return { genreId: action.payload.genreId, data: action.payload.results, page: action.payload.page };

    case CHOOSE_MOVIE_CATEGORY: return { category: action.payload.category, data: action.payload.results, page: action.payload.page };

    default: return state;
  }
};
