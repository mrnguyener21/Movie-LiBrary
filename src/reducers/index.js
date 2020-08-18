import { combineReducers } from 'redux';
import movie from './movie';
import movieGenre from './movieGenre';
import movieGenreHomePage from './movieGenreHomePage';
import individualMovie from './IndividualMovie';

const allReducers = combineReducers({ movie, movieGenre, movieGenreHomePage, individualMovie });

export default allReducers;
