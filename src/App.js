/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import { MoviesHome, TVShowsHome } from './components';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route component={MoviesHome} path="/movie" />
        <Route component={TVShowsHome} path="/tv" />
        <Route to="/">
          <Redirect to="/movie" />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
