import { combineReducers } from 'redux';
import movie from './movie';
import movieGenre from './movieGenre';

const allReducers = combineReducers({ movie, movieGenre });

export default allReducers;
