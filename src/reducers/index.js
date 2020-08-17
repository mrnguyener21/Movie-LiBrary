import { combineReducers } from 'redux';
import movie from './movie';
import movieGenre from './movieGenre';
import movieGenreHomePage from './movieGenreHomePage';

const allReducers = combineReducers({ movie, movieGenre, movieGenreHomePage });

export default allReducers;
