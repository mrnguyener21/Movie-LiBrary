/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MoviesNavbar } from '../..';
import { fetchMovies } from '../../../actions';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);

  return (
    <div>
      <MoviesNavbar />
      <button onClick={() => dispatch(fetchMovies())}>test</button>
      {console.log(test)}
    </div>
  );
};

export default MoviesHome;
