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
  let genreID = useSelector((state) => state.movieGenre);
  return (
    <>
      <div>genreID is {genreID}</div>
      {
        genreID = 0
          ? <p>works, genreID is {genreID}</p>
          : (
            <div>
              <h1> doesnt work, genreID is {genreID}</h1>
              <button onClick={() => console.log(genreID)}>check GENREid</button>
            </div>
          )
      }

    </>
  );
};

export default Movies;
