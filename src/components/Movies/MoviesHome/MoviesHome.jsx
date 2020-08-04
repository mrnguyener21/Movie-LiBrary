/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import { MoviesNavbar } from '../..';
import { fetchDiscoverMovies, fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies, fetchUpComingMovies } from '../../../actions';

import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchUpComingMovies());
  }, []);

  const settings = {
    // dots: true,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    className: 'slides',

  };
  return (
    <div>
      <MoviesNavbar />
      {console.log(movies)}

      <div className={styles.movieList}>
        <Slider {...settings}>
          {movies.map(({ poster_path }) => (
            poster_path
              ? (
                <div className={styles.imageContainer}>
                  <img alt={poster_path} className={styles.image} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                </div>
              )
              : null
          ))}
        </Slider>
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
