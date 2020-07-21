/* eslint-disable react/button-has-type */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { MoviesHome, TVShowsHome } from './components';

import styles from './App.module.scss';

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
