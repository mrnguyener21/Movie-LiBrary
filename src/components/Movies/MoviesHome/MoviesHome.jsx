/* eslint-disable array-callback-return */
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
import { fetchUpComingMovies, fetchDiscoverMovies } from '../../../actions';

import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  useEffect(() => {
    // dispatch(fetchUpComingMovies());
    dispatch(fetchDiscoverMovies());
  }, []);

  const settings = {
    // dots: true,
    // arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    className: 'slides',

  };
  // discover is considered undefined because it runs before the data is finished being fetched so it is "undefined". A while loop seems to not work and just break the app
  return (
    <div>
      <MoviesNavbar />
      {/* {console.log(movies)} */}
      {movies.map(({ discover }) => {
        console.log(discover);
        // while (discover) {
        discover.map(({ poster_path }) => (
          poster_path
            ? (
              <div className={styles.posterContainer}>
                <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
              </div>
            )
            : console.log('discover did not map')
        ));
        // }
      })}
      {/* <div className={styles.movieList}>
        <h1>Upcoming Movies</h1>
        <Slider {...settings}>

          {movies.map(({ poster_path, type }) => (
            poster_path
              ? (
                <div className={styles.posterContainer}>
                  <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  <p>{type}</p>
                </div>
              )
              : null
          ))}
        </Slider>
      </div> */}
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
