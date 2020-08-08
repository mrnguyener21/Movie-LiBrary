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

// match up the genre numbers to switch between which genre is currently shown
// figure out how to connect ito the genre drop down
// split up the different genres in the genre drop down, right now it's considerd as one item
// maybe create a switch statement in the genre drop down so then based on what you click a the title will be sent to the home page. based on that we will know which genre to show? write this out on paper later. ACTUALLY creating a state would be better since i can create one in the actions file and then just import it into the appropriate files.
