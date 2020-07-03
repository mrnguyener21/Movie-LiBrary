import React from 'react'
import styles from './SideBar.module.scss'

import {Link} from 'react-router-dom'

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.discover}>
                <h3 className={styles.title}>Discover</h3>
                <Link className={styles.link} to='/discover/popular'>Popular</Link>
                <Link className={styles.link} to='/discover/topRated'>TopRated</Link>
                <Link className={styles.link} to='/discover/upcoming'>Upcoming</Link>
            </div>

            <div className={styles.genre}>
                <h3 className={styles.title}>Genre</h3>
                    <Link className={styles.link} to='/genre/action'>Action</Link>
                    <Link className={styles.link} to='/genre/adventure'>Adventure</Link>
                    <Link className={styles.link} to='/genre/animation'>Animation</Link>
                    <Link className={styles.link} to='/genre/comedy'>Comedy</Link>
                    <Link className={styles.link} to='/genre/crime'>Crime</Link>
                    <Link className={styles.link} to='/genre/documentary'>Documentary</Link>
                    <Link className={styles.link} to='/genre/drama'>Drama</Link>
                    <Link className={styles.link} to='/genre/family'>Family</Link>
                    <Link className={styles.link} to='/genre/fantasy'>Fantasy</Link>
                    <Link className={styles.link} to='/genre/history'>History</Link>
                    <Link className={styles.link} to='/genre/horror'>Horro</Link>
                    <Link className={styles.link} to='/genre/music'>Music</Link>
                    <Link className={styles.link} to='/genre/mystery'>Mystery</Link>
                    <Link className={styles.link} to='/genre/romance'>Romance</Link>
                    <Link className={styles.link} to='/genre/sciencefiction'>Science Fiction</Link>
                    <Link className={styles.link} to='/genre/thriller'>Thriller</Link>
                    <Link className={styles.link} to='/genre/tvmovie'>TV Movie</Link>
                    <Link className={styles.link} to='/genre/war'>War</Link>
                    <Link className={styles.link} to='/genre/western'>Western</Link>
            </div>
        </div>
    )
}

export default SideBar;
