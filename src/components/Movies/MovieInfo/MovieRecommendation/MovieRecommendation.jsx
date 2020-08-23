import React from 'react';
import { useSelector } from 'react-redux';

const MovieRecommendation = () => {
  const recommendation = useSelector((state) => state.movieRecommendation);
  console.log(recommendation);
  return (
    <div>
      <h1>movie recommendations</h1>
    </div>
  );
};
export default MovieRecommendation;
