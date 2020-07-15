import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MoviesNavbar.scss';

const MoviesNavbar = () => (
  <div className={styles.container}>
    <h3>
      logo
    </h3>
    <Link to="/movies">movies link</Link>
    <Link to="/tv">tv link</Link>
    <h3>
      genre drop down menu
    </h3>
  </div>
);

export default MoviesNavbar;
