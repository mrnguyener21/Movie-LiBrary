/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesNavbar } from '../..';
import { fetchDiscoverMovies, fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpComingMovies } from '../../../actions';
import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchUpComingMovies());
  }, []);
  return (
    <div>
      <MoviesNavbar />
      {console.log(movies)}
      <div className={styles.movieList}>
        {movies.map(({ title, poster_path }) => (
          poster_path ? <img alt={title} className={styles.image} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} /> : <img alt={title} className={styles.image} src="https://www.fillmurray.com/200/300" />
        ))}
      </div>
    </div>
  );
};

export default MoviesHome;

{ /* <button onClick={() => dispatch(fetchDiscoverMovies())}>discover movies</button>
<button onClick={() => dispatch(fetchPopularMovies())}>popular movies</button>
<button onClick={() => dispatch(fetchNowPlayingMovies())}>now playing movies</button>
<button onClick={() => dispatch(fetchTopRatedMovies())}>top rated movies</button>
<button onClick={() => dispatch(fetchUpComingMovies())}>upcoming movies</button>
<button onClick={() => dispatch(fetchMovieGenre())}>movie genres</button>
<button onClick={() => console.log(test)}>console log</button> */ }
