import { TESTONE, FETCH_MOVIES } from '../constants/actionType';
import API from '../api';

// export const testOne = () => ({type:TESTONE});
export const fetchMovies = () => async (dispatch) => {
  const { data } = await API.get('/discover/movie');

  dispatch({ type: FETCH_MOVIES, payload: data.results });
};

