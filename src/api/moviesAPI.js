import axios from 'axios'

const movieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=93aa1dd666f534417ae68b3a04332c8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const TVURL = 'https://api.themoviedb.org/3/discover/tv?api_key=93aa1dd666f534417ae68b3a04332c8d&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false';