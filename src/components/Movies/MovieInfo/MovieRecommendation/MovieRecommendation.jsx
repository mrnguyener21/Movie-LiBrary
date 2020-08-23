/* eslint-disable camelcase */
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import styles from './MovieRecommendation.module.scss';

const MovieRecommendation = () => {
  const recommendation = useSelector((state) => state.movieRecommendation);
  console.log(recommendation);
  return (
    <div className={styles.container}>
      {

      recommendation
        ? recommendation.map(({ title, poster_path, vote_average }) => (
          poster_path && title
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
        : null
      }
    </div>
  );
};
export default MovieRecommendation;
