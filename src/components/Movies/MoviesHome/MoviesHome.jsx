/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesNavbar } from '../..';
import { fetchDiscoverMovies, fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpComingMovies, fetchMovieGenre } from '../../../actions';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);

  return (
    <div>
      <MoviesNavbar />
      <button onClick={() => dispatch(fetchDiscoverMovies())}>discover movies</button>
      <button onClick={() => dispatch(fetchPopularMovies())}>popular movies</button>
      <button onClick={() => dispatch(fetchNowPlayingMovies())}>now playing movies</button>
      <button onClick={() => dispatch(fetchTopRatedMovies())}>top rated movies</button>
      <button onClick={() => dispatch(fetchUpComingMovies())}>upcoming movies</button>
      <button onClick={() => dispatch(fetchMovieGenre())}>movie genres</button>
      <button onClick={() => console.log(test)}>console log</button>
    </div>
  );
};

export default MoviesHome;
