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
  // console.log(movieCategories);
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

            <Slider className={styles.slide} {...settings}>
              {values[i].map(({ poster_path, title, vote_average }) => (
                poster_path ? (
                  <div className={styles.sliderAffectedContainer}>

                    <div className={styles.posterContainer}>
                      <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                      <h3 className={styles.title}>{title}</h3>
                      <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating className={styles.rating} name="read-only" value={(vote_average / 2)} readOnly />
                      </Box>
                    </div>
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

