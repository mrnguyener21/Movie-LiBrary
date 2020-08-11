/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll';
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
  const test = useSelector((state) => state.movieGenre);
  let pageNumber = page;
  let genre = '';
  if (genreId === 28) {
    genre = 'Action';
  }

  console.log(test);
  return (
    <div id="top" className={styles.container}>
      <MoviesNavbar className={styles.navbar} />
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
          <Link activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleLeft} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber - 1)) && console.log(page)} />
          </Link>
          <h1 className={styles.pageNumber}>{pageNumber}</h1>
          <Link activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleRight} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber + 1)) && console.log(page)} />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default MoviesGenre;

