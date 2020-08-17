/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
/* eslint-disable prefer-const */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoviesHome from './MoviesHome/MoviesHome';
import MoviesCategory from './MoviesCategory/MoviesCategory';
import MoviesGenre from './MoviesGenre/MoviesGenre';

// const dispatch = useDispatch();

const Movies = () => {
  const { category } = useSelector((state) => state.movieGenre);
  const { genreId } = useSelector((state) => state.movieGenre);
  const test = useSelector((state) => state.movieGenre);
  console.log(test);
  return (
    <>

      {(() => {
        if (genreId > 0) {
          return (
            <MoviesGenre />
          );
        } if (category === 'popular' || category === 'upcoming' || category === 'top_rated' || category === 'now_playing') {
          return (
            <MoviesCategory />
          );
        }
        if (genreId === 0) { console.log(test); }
        return (
          <MoviesHome />
        );
      })()}
      {/* {
      genreId === 0
        ? <MoviesHome />
        : <MoviesGenre />
    } */}
      {/* {
        category === ''
          ? <MoviesHome />
          : <MoviesCategory />
      } */}

    </>
  // <MoviesGenre />
  );
};

export default Movies;
