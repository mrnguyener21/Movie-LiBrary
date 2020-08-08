/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { MoviesNavbar } from '../..';
import { fetchMovieCategory } from '../../../actions';

import styles from './MoviesHome.module.scss';

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   console.log('next');
//   console.log(onClick);
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   console.log('prev');
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     />
//   );
// }

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieCategory('upcoming'));
    dispatch(fetchMovieCategory('popular'));
    dispatch(fetchMovieCategory('top_rated'));
    dispatch(fetchMovieCategory('now_playing'));
  }, []);

  function Arrow(props) {
    const { className, style, onClick } = props;
    console.log(props);
    return (
      <div
        className={className}
        style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'darkslategrey', borderRadius: '10px', height: '16.75px', width: '18px' }}
        onClick={onClick}
      />
    );
  }
  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          color="#000"
          size="2x"
        />
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    // variableWidth: true,
    // centerPadding: '50px',
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    className: 'slider',
    useCSS: true,
    // variableWidth: true,

  };

  const categories = Object.keys(movieCategories);
  const values = Object.values(movieCategories);

  return (
    <div>
      <MoviesNavbar />

      <div className={styles.container}>
        {categories.map((category, i) => (
          <div className={styles.movieContainer}>
            {category === 'upcoming' ? <h1>Upcoming Movies</h1> : null}
            {category === 'popular' ? <h1>popular Movies</h1> : null}
            {category === 'top_rated' ? <h1>Top Rated Movies</h1> : null}
            {category === 'now_playing' ? <h1>Now Playing Movies</h1> : null}
            <Slider className={styles.slide} {...settings}>
              {values[i].map(({ poster_path, title }) => (
                poster_path ? (
                  <div className={styles.posterContainer}>
                    <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                    <h2 className={styles.title}>{title}</h2>
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

