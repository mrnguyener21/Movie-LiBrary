/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ReactScroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loader from 'react-loader-spinner';
import LazyLoad from 'react-lazyload';
import { MoviesNavbar } from '../..';
import { fetchMovieCategory, fetchMovieGenreCategory, individualMovie, individualMovieCast, movieRecommendation } from '../../../actions';

import styles from './MoviesHome.module.scss';

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((state) => state.movie);
  const MovieGenreCategories = useSelector((state) => state.movieGenreHomePage);
  const movieCategorySelection = ['upcoming', 'popular', 'top_rated', 'now_playing'];

  const movieGenreId = ['28', '12', '16', '35', '80', '99', '18', '10751', '14', '36', '27', '10402', '9648', '10749', '878', '10770', '53', '10752', '37'];

  const categories = Object.keys(movieCategories);
  const values = Object.values(movieCategories);
  const genreCategories = Object.keys(MovieGenreCategories);
  const genreValues = Object.values(MovieGenreCategories);
  // console.log(categories);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    className: 'slider',

  };
  useEffect(() => {
    movieCategorySelection.map((category) => {
      dispatch(fetchMovieCategory(category));
    });
    movieGenreId.map((genreId) => {
      dispatch(fetchMovieGenreCategory(genreId));
    });
  }, []);

  const pickMovie = (id) => {
    dispatch(individualMovie(id));
    dispatch(individualMovieCast(id));
    dispatch(movieRecommendation(id));
  };

  return (
    <div>

      <MoviesNavbar />
      <div className={styles.container} id="top">
        {categories.map((category, i) => (
          <div className={styles.movieContainer}>
            {/* maybe change into a swtich statement */}
            {category === 'upcoming' ? <h1 className={styles.category}>Upcoming Movies</h1> : null}
            {category === 'popular' ? <h1 className={styles.category}>popular Movies</h1> : null}
            {category === 'top_rated' ? <h1 className={styles.category}>Top Rated Movies</h1> : null}
            {category === 'now_playing' ? <h1 className={styles.category}>Now Playing Movies</h1> : null}

            <Slider className={styles.slide} {...settings}>
              {

                    values[i].map(({ poster_path, id, title }) => (
                      <ReactScroll activeClass="active" to="top" spy smooth duration={10}>

                        <div className={styles.sliderAffectedContainer}>
                          <div className={styles.posterContainer} onClick={() => pickMovie(id)}>
                            {categories.length === 5 ? (
                              <Link className={styles.link} to={`/individualmovie/${id}`}>
                                <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                              </Link>
                            ) : (
                              // <Loader
                              //   type="Grid"
                              //   color="#00BFFF"
                              //   height={100}
                              //   width={100}
                              //   timeout={1000}
                              // />
                              null
                            )}

                          </div>
                        </div>
                      </ReactScroll>
                    ))

                }
            </Slider>

          </div>
        ))}

        {genreCategories.map((category, i) => (
          <div className={styles.movieContainer}>
            {/* maybe change into a swtich statement */}
            {category === '28' ? <h1 className={styles.category}>Action Movies</h1> : null}
            {category === '12' ? <h1 className={styles.category}>Adventure Movies</h1> : null}
            {category === '16' ? <h1 className={styles.category}>Animation Movies</h1> : null}
            {category === '35' ? <h1 className={styles.category}>Comedy Movies</h1> : null}
            {category === '80' ? <h1 className={styles.category}>Crime Movies</h1> : null}
            {category === '99' ? <h1 className={styles.category}>Documentary Movies</h1> : null}
            {category === '18' ? <h1 className={styles.category}>Drama Movies</h1> : null}
            {category === '10751' ? <h1 className={styles.category}>Family Movies</h1> : null}
            {category === '14' ? <h1 className={styles.category}>Fantasy Movies</h1> : null}
            {category === '36' ? <h1 className={styles.category}>History Movies</h1> : null}
            {category === '27' ? <h1 className={styles.category}>Horror Movies</h1> : null}
            {category === '10402' ? <h1 className={styles.category}>Music Movies</h1> : null}
            {category === '9648' ? <h1 className={styles.category}>Mystery Movies</h1> : null}
            {category === '10749' ? <h1 className={styles.category}>Romance Movies</h1> : null}
            {category === '878' ? <h1 className={styles.category}>Science Fiction Movies</h1> : null}
            {category === '10770' ? <h1 className={styles.category}>TV Movies</h1> : null}
            {category === '53' ? <h1 className={styles.category}>Thriller Movies</h1> : null}
            {category === '10752' ? <h1 className={styles.category}>War Movies</h1> : null}
            {category === '37' ? <h1 className={styles.category}>Western Movies</h1> : null}

            <LazyLoad>
              <Slider className={styles.slide} {...settings}>
                {
                 genreValues[i].map(({ poster_path, id }) => (
                   <ReactScroll activeClass="active" to="top" spy smooth duration={10}>
                     <div className={styles.sliderAffectedContainer}>
                       <div className={styles.posterContainer} onClick={() => pickMovie(id)}>
                         {categories.length === 5 ? (
                           <Link className={styles.link} to="/individualMovie">
                             <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                           </Link>

                         ) : (
                         //  <Loader
                         //    type="Grid"
                         //    color="#00BFFF"
                         //    height={100}
                         //    width={100}
                         //    timeout={1000}
                         //  />
                           null
                         )}
                       </div>
                     </div>
                   </ReactScroll>

                 ))
                }
              </Slider>
            </LazyLoad>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MoviesHome;
