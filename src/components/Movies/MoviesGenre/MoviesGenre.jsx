/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

// import { Link } from 'react-scroll';
// import LazyLoad, { lazyload } from 'react-lazyload';
// import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { chooseMovieGenre } from '../../../actions';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviesNavbar } from '../..';
import styles from './MoviesGenre.module.scss';

const MoviesGenre = () => {
  const dispatch = useDispatch();

  // const { page } = useSelector((state) => state.movieGenre);
  // const test = useSelector((state) => state.movieGenre);
  // const [pageNumber, setPageNumber] = useState(20);
  const { genreId } = useSelector((state) => state.movieGenre);
  const { data } = useSelector((state) => state.movieGenre);

  let genre = '';

  switch (genreId) {
    case 28: genre = 'Action';
      break;
    case 12: genre = 'Adventure';
      break;
    case 16: genre = 'Animation';
      break;
    case 35: genre = 'Comedy';
      break;
    case 80: genre = 'Crime';
      break;
    case 99: genre = 'Documentary';
      break;
    case 18: genre = 'Drama';
      break;
    case 10751: genre = 'Family';
      break;
    case 14: genre = 'Fantasy';
      break;
    case 36: genre = 'History';
      break;
    case 27: genre = 'Horror';
      break;
    case 10402: genre = 'Music';
      break;
    case 9648: genre = 'Mystery';
      break;
    case 10749: genre = 'Romance';
      break;
    case 878: genre = 'Science Fiction';
      break;
    case 10770: genre = 'TV Movie';
      break;
    case 53: genre = 'Thriller';
      break;
    case 10752: genre = 'War';
      break;
    case 37: genre = 'Western';
      break;

    default: genre = '';
      break;
  }

  console.log(data.length);
  return (
    <div id="top" className={styles.container}>
      <MoviesNavbar className={styles.navbar} />
      <div className={styles.movieList}>
        <h1 className={styles.genre}>{genre} Movies</h1>
        {
             data.length
               ? data.map(({ title, poster_path }) => (
                 poster_path
                   ? (
                     <div className={styles.movie}>
                       <img className={styles.poster} alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                       <h3 className={styles.title}>{title}</h3>
                     </div>
                   )

                   : <div><h1>loading</h1></div>
               ))
               : null && console.log('no')
        }

        <div className={styles.pagination} />
      </div>
    </div>
  );
};

export default MoviesGenre;

