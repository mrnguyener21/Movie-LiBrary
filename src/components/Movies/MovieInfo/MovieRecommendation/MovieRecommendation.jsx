/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactScroll } from 'react-scroll';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import { individualMovie, individualMovieCast, movieRecommendation } from '../../../../actions';
import styles from './MovieRecommendation.module.scss';

const MovieRecommendation = () => {
  const dispatch = useDispatch();
  const recommendation = useSelector((state) => state.movieRecommendation);

  const pickMovie = (id) => {
    dispatch(individualMovie(id));
    dispatch(individualMovieCast(id));
    dispatch(movieRecommendation(id));
  };
  return (
    <div className={styles.container}>
      {

        recommendation
          ? recommendation.map(({ title, poster_path, vote_average, id }) => (
            poster_path && title
              ? (
                <div className={styles.movie}>
                  <ReactScroll activeClass="active" to="individualMovie" spy smooth duration={400}>
                    <div onClick={() => pickMovie(id)}>

                      <Link className={styles.link} to="/individualMovie">
                        <img className={styles.poster} alt={poster_path} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                        <h4 className={styles.title}>{title}</h4>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                          <Rating className={styles.rating} name="read-only" value={(vote_average / 2)} readOnly />
                        </Box>
                      </Link>
                    </div>

                  </ReactScroll>
                </div>

              )

              : null
          ))
          : null
      }
    </div>
  );
};
export default MovieRecommendation;
