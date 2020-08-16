/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import { Link } from 'react-scroll';
import LazyLoad, { lazyload } from 'react-lazyload';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMovieGenre } from '../../../actions';
import { MoviesNavbar } from '../..';
import styles from './MoviesGenre.module.scss';

const MoviesGenre = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.movieGenre);
  // const test = useSelector((state) => state.movieGenre);
  // const [pageNumber, setPageNumber] = useState(20);
  const { genreId } = useSelector((state) => state.movieGenre);
  const { data } = useSelector((state) => state.movieGenre);
  let pageNumber = page;
  let genre = '';
  let totalMovies = [...data.results];

  // totalMovies.push(...data.results);

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

  console.log(console.log(totalMovies));
  return (
    <div id="top" className={styles.container}>
      <MoviesNavbar className={styles.navbar} />
      <div className={styles.movieList}>
        <h1 className={styles.genre}>{genre} Movies</h1>
        {
             totalMovies
               ? totalMovies.map(({ title, poster_path }) => (
                 poster_path
                   ? (
                     <div className={styles.movie}>
                       <img className={styles.poster} alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                       <h3 className={styles.title}>{title}</h3>
                     </div>
                   )

                   : null
               ))
               : null && console.log('no')
        }

        {/* <div className={styles.pagination} />
         */}
        <div className={styles.pagination}>
          <Link activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleLeft} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber - 1)) && console.log(page)} />
          </Link>
          <h1 className={styles.pageNumber}>{pageNumber}</h1>
          <Link activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleRight} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber + 1))} />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default MoviesGenre;

// go back to the button approach and back to where we showed one page at a time, but this time we push that current page into an array. everytime we click the button load more we go to the next page, that page is pushed through the array and it is mapped through.
