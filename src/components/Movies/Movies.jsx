/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable prefer-const */
import React from 'react';
import { useSelector } from 'react-redux';
import MoviesHome from './MoviesHome/MoviesHome';
import MoviesGenre from './MoviesGenre/MoviesGenre';

// const dispatch = useDispatch();

const Movies = () => {
  let { genreId } = useSelector((state) => state.movieGenre);

  return (
    <>
      {
      genreId === 0
        ? <MoviesHome />
        : <MoviesGenre />
    }

    </>
  // <MoviesGenre />
  );
};

export default Movies;
