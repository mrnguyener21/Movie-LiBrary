/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovies } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);

  return (
    <div>
      <button onClick={() => dispatch(fetchMovies())}>test</button>
      {console.log(test)}
      {/* <h1> { test }</h1> */}
    </div>
  );
};

export default App;

// change action folder to actions
// change component folder to components
// change constant to constants
// change reducer to reducers
