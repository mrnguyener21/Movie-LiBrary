/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoviesNavbar } from '../..';
import { fetchMovieCategory } from '../../../actions';

const MoviesGenre = () => {
  const dispatch = useDispatch();
  // const movieGenres = useSelector((state) => state.movie);
  const { data: { results } } = useSelector((state) => state.movieGenre);
  useEffect(() => {
    dispatch(fetchMovieCategory('popular'));
  }, []);

  console.log({ results });

  return (
    <div>
      <MoviesNavbar />
      <h1>movies </h1>
      {
          results.length
            ? results.map(({ genre_ids, poster_path }) => (
              <div>
                <img alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
              </div>
            ))
            : console.log('no')
        }
    </div>
  );
};

export default MoviesGenre;

