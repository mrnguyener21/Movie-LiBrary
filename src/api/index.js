import axios from 'axios';

// const movieURL = 'https://api.themoviedb.org/3/discover/movie?api_key=93aa1dd666f534417ae68b3a04332c8d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});
