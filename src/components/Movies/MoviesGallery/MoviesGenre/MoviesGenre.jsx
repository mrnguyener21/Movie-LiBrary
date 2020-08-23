/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './MoviesGenre.module.scss';
import { MoviesNavbar } from '../../..';
import { chooseMovieGenre, individualMovie } from '../../../../actions';

const MoviesGenre = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.movieGenre);
  const { genreId } = useSelector((state) => state.movieGenre);
  const { data: { results } } = useSelector((state) => state.movieGenre);
  let pageNumber = page;
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

  // console.log(console.log(results));

  return (
    <div id="top" className={styles.container}>
      <MoviesNavbar className={styles.navbar} />
      <div className={styles.movieList}>
        <h1 className={styles.genre}>{genre} Movies</h1>
        {
             results
               ? results.map(({ title, poster_path, vote_average, id }) => (
                 poster_path
                   ? (
                     <div className={styles.movie} onClick={() => dispatch(individualMovie(id))}>
                       <Link className={styles.link} to="/individualMovie">
                         <img className={styles.poster} alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                         <h4 className={styles.title}>{title}</h4>
                         <Box component="fieldset" mb={3} borderColor="transparent">
                           <Rating className={styles.rating} name="read-only" value={(vote_average / 2)} readOnly />
                         </Box>
                       </Link>

                     </div>
                   )

                   : null
               ))
               : null && console.log('no')
        }

        <div className={styles.pagination}>
          <ReactScroll activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleLeft} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber - 1)) && console.log(page)} />
          </ReactScroll>
          <h1 className={styles.pageNumber}>{pageNumber}</h1>
          <ReactScroll activeClass="active" to="top" spy smooth duration={400}>
            <FontAwesomeIcon className={styles.arrow} icon={faAngleDoubleRight} size="2x" onClick={() => dispatch(chooseMovieGenre(genreId, pageNumber + 1)) && console.log(results)} />
          </ReactScroll>

        </div>
      </div>
    </div>
  );
};

export default MoviesGenre;
