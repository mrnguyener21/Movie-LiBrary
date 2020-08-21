/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
/* eslint-disable prefer-const */

import Rating from '@material-ui/lab/Rating';

import Box from '@material-ui/core/Box';
import { DialogTitle } from '@material-ui/core';
import { MoviesNavbar } from '../..';
import styles from './individualMovie.module.scss';

const SelectedMovie = () => {
  const test = useSelector((state) => state.individualMovie);
  const { title } = useSelector((state) => state.individualMovie);
  const { tagline } = useSelector((state) => state.individualMovie);
  const { poster_path } = useSelector((state) => state.individualMovie);
  const { vote_average } = useSelector((state) => state.individualMovie);
  const { genres } = useSelector((state) => state.individualMovie);
  const { overview } = useSelector((state) => state.individualMovie);
  const { runtime } = useSelector((state) => state.individualMovie);
  const { release_date } = useSelector((state) => state.individualMovie);
  const { cast } = useSelector((state) => state.individualMovie);

  console.log(cast);
  return (

    <div className={styles.container}>
      <MoviesNavbar />
      <div className={styles.movieContainer}>
        <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h2>{tagline}</h2>
          {
            vote_average === 0
              ? (
                <div className={styles.ratingContainer}>
                  <h3 className={styles.description}>RATING:</h3>
                  <h3>N/A</h3>
                </div>
              )
              : (
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Rating className={styles.rating} name="read-only" value={(vote_average / 2)} readOnly />
                </Box>
              )

          }
          <div className={styles.releaseDateContainer}>
            <h3 className={styles.description}>RELEASE DATE: </h3>
            <h3>{release_date}</h3>
          </div>
          <div className={styles.runTimeContainer}>
            <h3 className={styles.description}>RUN TIME: </h3>
            <h3>{runtime === 0 ? 'N/A' : `${runtime} min.`}  </h3>
          </div>
          <div className={styles.genreContainer}>
            <h3 className={styles.description}>GENRES:</h3>
            {
            genres
              ? genres.map((genre) => <h3 className={styles.genre}>{genre.name} </h3>)
              : console.log('no genre')
            }
          </div>
          <div className={styles.castContainer}>
            <h3 className={styles.description}>CAST:</h3>
            {
            cast
              ? cast.map(({ name, profile_path }) => (
                <div>

                  {/* <img className={styles.castImage} src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} /> */}
                  <h3 className={styles.genre}>{name} </h3>
                </div>
              ))

              : console.log('no genre')
            }
          </div>
          <h2 className={styles.description}>SYNOPSIS:</h2>
          <h3 className={styles.synopsis}>{overview}</h3>
          <h2 className={styles.description}>CAST:</h2>

        </div>
      </div>
      <div className={styles.recommendedMoviesContainer}>
        <h1>recommended movies</h1>
      </div>
    </div>
  );
};

export default SelectedMovie;
// cast is from GET CREDIT
// trailer is from get videos(im assuming)
// recommendations from get recommendations
// probably do something similar with the home page with how i set a category for each and then properly pulled from it based on thecateogry
