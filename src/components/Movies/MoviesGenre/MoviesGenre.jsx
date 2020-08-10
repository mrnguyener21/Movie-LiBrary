/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { MoviesNavbar } from '../..';
import { chooseMovieGenre } from '../../../actions';
import styles from './MoviesGenre.module.scss';

const MoviesGenre = () => {
  const dispatch = useDispatch();
  const { data: { results } } = useSelector((state) => state.movieGenre);
  // const { data: { page } } = useSelector((state) => state.movieGenre);
  const { genreId } = useSelector((state) => state.movieGenre);
  const { page } = useSelector((state) => state.movieGenre);

  console.log(page);
  console.log(genreId);
  let pageNumber = page;
  let genre = '';
  if (genreId === 28) {
    genre = 'Action';
  }
  return (
    <div className={styles.container}>
      <MoviesNavbar className={styles.navbar} />
      {/* <h2 className={styles.genre}>{genre}</h2> */}
      <div className={styles.movieList}>
        <h1 className={styles.genre}>{genre} Movies</h1>
        {
          results.length
            ? results.map(({ title, poster_path }) => (
              <div className={styles.movie}>
                <img className={styles.poster} alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                <h3 className={styles.title}>{title}</h3>
              </div>
            ))
            : console.log('no')
        }
        <div className={styles.pagination}>
          <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleLeft} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber - 1)) && console.log(page)} />
          <h1 className={styles.pageNumber}>1</h1>
          <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleRight} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber + 1)) && console.log(page)} />

        </div>
      </div>
    </div>
  );
};

export default MoviesGenre;

// create a state where as you click on the button, it will either increase the state by one or decrease by one. that will then be use as the pararms for page in order to display what want properly
// if anything add to the chooseMovieGenre Reducer?
// MAYBE LOOK INTO LAZY LOADING AND THEN PULL ALL THE PAGES AT ONCE
