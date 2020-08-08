/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MoviesNavbar } from '../..';
import { fetchMovieCategory } from '../../../actions';

import styles from './MoviesHome.module.scss';

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   console.log('next');
//   console.log(onClick);
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   console.log('prev');
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     />
//   );
// }

const MoviesHome = () => {
  const dispatch = useDispatch();
  const movieCategories = useSelector((state) => state.movie);
  const slider = useRef(null);

  useEffect(() => {
    dispatch(fetchMovieCategory('upcoming'));
    dispatch(fetchMovieCategory('popular'));
    dispatch(fetchMovieCategory('top_rated'));
    dispatch(fetchMovieCategory('now_playing'));
  }, []);

  //     const sliderRef = useRef(null);

  //     const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
  // const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  // const [maxNumberOfCardsToShow, setMaxNumberOfCardsToShow] = useState<number>(0);

  // const handleChangeSlide = (currentSlide: number) => {
  //   const leftArrowVisible = currentSlide !== 0;
  //   const rightArrowVisible = currentSlide <= data.length - maxNumberOfCardsToShow;
  // setShowLeftArrow(leftArrowVisible);
  //   setShowRightArrow(rightArrowVisible);
  // };

  //   return (
  //        <SliderWrapper>
  //          <SliderArrow type="prev" onClick={() => sliderRef.current.slickPrev()} />
  //          <SliderArrow type="next" onClick={() => sliderRef.current.slickNext()} />
  //        </SliderWrapper>
  //   );

  //   {showLeftArrow && ( <SliderArrow type="prev" onClick={() => sliderRef.current.slickPrev()} />)}
  // ........
  // {showRightArrow && ( <SliderArrow type="next" onClick={() => sliderRef.current.slickNext()} />)}

  const settings = {
    // dots: true,
    // arrow: true,
    infinite: true,
    speed: 500,
    // afterChange: (currentSlide) => handleChangeSlide(currentSlide),
    lazyLoad: true,

    // slidesToShow: 3,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    slidesToShow: 5,
    slidesToScroll: 5,
    className: 'slides',
  };

  // 20 => 3

  const categories = Object.keys(movieCategories);
  const values = Object.values(movieCategories);

  return (
    <div>
      <MoviesNavbar />

      <div className={styles.container}>
        {categories.map((category, i) => (
          <div>
            {category === 'upcoming' ? <h1>Upcoming Movies</h1> : null}
            {category === 'popular' ? <h1>popular Movies</h1> : null}
            {category === 'top_rated' ? <h1>Top Rated Movies</h1> : null}
            {category === 'now_playing' ? <h1>Now Playing Movies</h1> : null}
            <Slider {...settings}>
              {values[i].map(({ poster_path }) => (
                poster_path ? (
                  <div>
                    <img alt={poster_path} className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  </div>
                ) : null
              ))}
            </Slider>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesHome;

