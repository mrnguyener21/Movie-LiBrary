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
import { fetchUpComingMovies, fetchDiscoverMovies, fetchMovieCategory } from '../../../actions';

import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((state) => state.movie);

  useEffect(() => {
    // dispatch(fetchUpComingMovies());
    // dispatch(fetchDiscoverMovies());
    dispatch(fetchMovieCategory('popular'));
    dispatch(fetchMovieCategory('upcoming'));
    // dispatch(fetchMovieCategory('upcoming'));
  }, []);

  // discover is considered undefined because it runs before the data is finished being fetched so it is "undefined". A while loop seems to not work and just break the app
  const settings = {
    // dots: true,
    // arrow: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 3,
    slidesToShow: 6,
    slidesToScroll: 6,
    className: 'slides',

  };

  const categories = Object.keys(movieCategories);
  const values = Object.values(movieCategories);

  return (
    <div>
      <MoviesNavbar />
      {categories.map((category, i) => (
        <Slider {...settings}>
          {values[i].map(({ backdrop_path }) => (
            backdrop_path ? (
              <div className={styles.posterContainer}>
                <img alt={backdrop_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
              </div>
            ) : null
          ))}
        </Slider>
      ))}

      {/* {movieCategories.upcoming ? movieCategories[category].map((movie) => (

            <div className={styles.posterContainer}>
              <img alt={backdrop_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
            </div>
          ))
            : null}
        </Slider> */}

      {/* {console.log(movieCategories)}

      {movieCategories.popular ? movieCategories.popular.map(({ backdrop_path }) => (
        <div>
          <div className={styles.posterContainer}>
            <img alt={backdrop_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
          </div>
        </div>
      )) : null} */}

      {/*
      {movies.map(({ discover }) => {
        console.log(discover);
        // while (discover) {
        discover.map(({ backdrop_path }) => (
          backdrop_path
            ? (
              <div className={styles.posterContainer}>
                <img alt={backdrop_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
              </div>
            )
            : console.log('discover did not map')
        ));
        // }
      })} */}

      {/* const movieCategories = {
  popular: []
  upcoming: []
} */}
      {/*
      <div className={styles.upcomingMovies}>
        <h1>Upcoming Movies</h1>
        <Slider {...settings}>

          {movieCategories.upcoming ? movieCategories.upcoming.map(({ backdrop_path }) => (

            <div className={styles.posterContainer}>
              <img alt={backdrop_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
            </div>
          ))
            : null}
        </Slider>
      </div>
      <div className={styles.popularMovies}>
        <h1>popular Movies</h1>
        <Slider {...settings}>

          {movieCategories.popular ? movieCategories.popular.map(({ backdrop_path }) => (

            <div>
              <img alt={backdrop_path} className={styles.poster} width="500" src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
            </div>
          ))
            : null}
        </Slider> */}
      {/* </div> */}
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
