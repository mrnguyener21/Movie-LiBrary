/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesNavbar } from '../..';
import { fetchDiscoverMovies, fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpComingMovies } from '../../../actions';

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
      {movies.map(({ title }) => (
        <div>{title}</div>
      ))}
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
