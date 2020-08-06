import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoviesNavbar } from '../..';
import { fetchMovieCategory } from '../../../actions';

const MoviesGallery = () => {
  const dispatch = useDispatch();
  const movieGenres = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieCategory('popular'));
  }, []);

  console.log(movieGenres);
  return (

    <div>
      <MoviesNavbar />
      <h1>movies gallery</h1>
    </div>
  );
};

export default MoviesGallery;

// use the discover path to grab a hold of the movies
// match up the genre numbers to switch between which genre is currently shown
// figure out how to connect ito the genre drop down
// split up the different genres in the genre drop down, right now it's considerd as one item
