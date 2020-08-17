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
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyLoad from 'react-lazyload';
import { MoviesNavbar } from '../..';
import { fetchMovieCategory, fetchMovieGenreCategory } from '../../../actions';

import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieCategory('upcoming'));
    dispatch(fetchMovieCategory('popular'));
    dispatch(fetchMovieCategory('top_rated'));
    dispatch(fetchMovieCategory('now_playing'));

    dispatch(fetchMovieGenreCategory('28'));
    dispatch(fetchMovieGenreCategory('12'));
    dispatch(fetchMovieGenreCategory('16'));
    dispatch(fetchMovieGenreCategory('35'));
    dispatch(fetchMovieGenreCategory('80'));
    dispatch(fetchMovieGenreCategory('99'));
    dispatch(fetchMovieGenreCategory('18'));
    dispatch(fetchMovieGenreCategory('10751'));
    dispatch(fetchMovieGenreCategory('14'));
    dispatch(fetchMovieGenreCategory('36'));
    dispatch(fetchMovieGenreCategory('27'));
    dispatch(fetchMovieGenreCategory('10402'));
    dispatch(fetchMovieGenreCategory('9648'));
    dispatch(fetchMovieGenreCategory('10749'));
    dispatch(fetchMovieGenreCategory('878'));
    dispatch(fetchMovieGenreCategory('10770'));
    dispatch(fetchMovieGenreCategory('53'));
    dispatch(fetchMovieGenreCategory('10752'));
    dispatch(fetchMovieGenreCategory('37'));
  }, []);
  console.log(movieCategories);
  const settings = {
    infinite: true,
    speed: 500,
    // lazyLoad: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    className: 'slider',

  };
  const categories = Object.keys(movieCategories);
  const values = Object.values(movieCategories);
  return (
    <div>
      <MoviesNavbar />

      <div className={styles.container} id="top">
        {categories.map((category, i) => (
          <div className={styles.movieContainer}>
            {category === 'upcoming' ? <h2 className={styles.category}>Upcoming Movies</h2> : null}
            {category === 'popular' ? <h2 className={styles.category}>popular Movies</h2> : null}
            {category === 'top_rated' ? <h2 className={styles.category}>Top Rated Movies</h2> : null}
            {category === 'now_playing' ? <h2 className={styles.category}>Now Playing Movies</h2> : null}

            {category === '28' ? <h2 className={styles.category}>Action Movies</h2> : null}
            {category === '12' ? <h2 className={styles.category}>Adventure Movies</h2> : null}
            {category === '16' ? <h2 className={styles.category}>Animation Movies</h2> : null}
            {category === '35' ? <h2 className={styles.category}>Comedy Movies</h2> : null}
            {category === '80' ? <h2 className={styles.category}>Crime Movies</h2> : null}
            {category === '99' ? <h2 className={styles.category}>Documentary Movies</h2> : null}
            {category === '18' ? <h2 className={styles.category}>Drama Movies</h2> : null}
            {category === '10751' ? <h2 className={styles.category}>Family Movies</h2> : null}
            {category === '14' ? <h2 className={styles.category}>Fantasy Movies</h2> : null}
            {category === '36' ? <h2 className={styles.category}>History Movies</h2> : null}
            {category === '27' ? <h2 className={styles.category}>Horror Movies</h2> : null}
            {category === '10402' ? <h2 className={styles.category}>Music Movies</h2> : null}
            {category === '9648' ? <h2 className={styles.category}>Mystery Movies</h2> : null}
            {category === '10749' ? <h2 className={styles.category}>Romance Movies</h2> : null}
            {category === '878' ? <h2 className={styles.category}>Science Fiction Movies</h2> : null}
            {category === '10770' ? <h2 className={styles.category}>TV Movies</h2> : null}
            {category === '53' ? <h2 className={styles.category}>Thriller Movies</h2> : null}
            {category === '10752' ? <h2 className={styles.category}>War Movies</h2> : null}
            {category === '37' ? <h2 className={styles.category}>Western Movies</h2> : null}

            <LazyLoad>
              <Slider className={styles.slide} {...settings}>
                {
                 values[i].map(({ poster_path }) => (
                   poster_path ? (
                     <div className={styles.sliderAffectedContainer}>

                       <div className={styles.posterContainer}>
                         <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />

                       </div>
                     </div>
                   ) : null
                 ))
}
              </Slider>
            </LazyLoad>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MoviesHome;
