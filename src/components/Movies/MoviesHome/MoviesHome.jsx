/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MoviesNavbar } from '../..';
import { fetchMovieCategory } from '../../../actions';

import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieCategory('upcoming'));
    dispatch(fetchMovieCategory('popular'));
    dispatch(fetchMovieCategory('top_rated'));
    dispatch(fetchMovieCategory('now_playing'));
  }, []);

  const settings = {
    // dots: true,
    // arrow: true,
    infinite: false,
    speed: 500,
    // slidesToShow: 3,
    slidesToShow: 6,
    slidesToScroll: 1,
    className: 'slides',

  };

  const categories = Object.keys(movieCategories);
  const values = Object.values(movieCategories);

  return (
    <div>
      <MoviesNavbar />

      <div className={styles.container}>
        {categories.map((category, i) => (
          <div>
            {category === 'upcoming' ? <h1>Upcoming Movies</h1> : null}
            {category === 'popular' ? <h1>popular Movies</h1> : null}
            {category === 'top_rated' ? <h1>Top Rated Movies</h1> : null}
            {category === 'now_playing' ? <h1>Now Playing Movies</h1> : null}
            <Slider {...settings}>
              {values[i].map(({ poster_path }) => (
                poster_path ? (
                  <div>
                    <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  </div>
                ) : null
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesHome;

