import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import movie from './movie';
import movieGenre from './movieGenre';
import movieGenreHomePage from './movieGenreHomePage';
import individualMovie from './IndividualMovie';

const allReducers = combineReducers({ movie, movieGenre, movieGenreHomePage, individualMovie });
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['movie', 'movieGenre', 'movieGenreHomePage', 'individualMovie'],
};

export default persistReducer(persistConfig, allReducers);
