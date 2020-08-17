/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import { Link } from 'react-scroll';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseMovieCategory } from '../../../actions';
import { MoviesNavbar } from '../..';
import styles from './MoviesCategory.module.scss';

const MoviesCategory = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.movieGenre);
  const { category } = useSelector((state) => state.movieGenre);
  const { data: { results } } = useSelector((state) => state.movieGenre);
  const test = useSelector((state) => state.movieGenre);
  let pageNumber = page;
  let chosenCategory = '';

  switch (category) {
    case 'popular': chosenCategory = 'Popular';
      break;
    case 'upcoming': chosenCategory = 'Upcoming';
      break;
    default: chosenCategory = '';
  }

  // console.log(console.log(test));

  return (
    <div id="top" className={styles.container}>
      <MoviesNavbar className={styles.navbar} />
      <div className={styles.movieList}>
        <h1 className={styles.chosenCategory}>{chosenCategory} Movies</h1>

        {
             results
               ? results.map(({ title, poster_path, vote_average }) => (
                 poster_path
                   ? (
                     <div className={styles.movie}>
                       <img className={styles.poster} alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                       <h4 className={styles.title}>{title}</h4>
                       <Box component="fieldset" mb={3} borderColor="transparent">
                         <Rating className={styles.rating} name="read-only" value={(vote_average / 2)} readOnly />
                       </Box>
                     </div>
                   )
                   : null
               ))
               : null && console.log('no')

        }

        <div className={styles.pagination}>

          <Link activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleLeft} size="2x" onClick={() => dispatch(chooseMovieCategory(category, pageNumber - 1)) && console.log(page)} />
          </Link>
          <h1 className={styles.pageNumber}>{pageNumber}</h1>
          <Link activeClass="active" to="top" spy smooth duration={400}>

            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleRight} size="2x" onClick={() => dispatch(chooseMovieCategory(category, pageNumber + 1)) && console.log(results)} />

          </Link>

        </div>
      </div>
    </div>
  );
};

export default MoviesCategory;

