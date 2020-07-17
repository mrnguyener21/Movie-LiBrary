/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { MoviesHome, TVShowsHome } from './components';
import { fetchMovies } from './actions';

const App = () => (
  <div>
    <Router>
      {/* <button onClick={() => dispatch(fetchMovies())}>test</button> */}
      {/* {console.log(test)} */}

      <Switch>
        <Route component={MoviesHome} path="/movie" />
        <Route component={TVShowsHome} path="/tv" />
        <Route to="/">
          <Redirect to="/movie" />
        </Route>
        {/* <Link to="/movie">movie</Link> */}
        {/* <Link to="tv">tv</Link> */}
      </Switch>
    </Router>
  </div>
);
// const dispatch = useDispatch();
// const test = useSelector((state) => state.test);

export default App;
