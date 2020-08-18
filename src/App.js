/* eslint-disable react/button-has-type */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Movies, IndividualMovie, TVShowsHome } from './components';

import styles from './App.module.scss';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route component={Movies} path="/movies" />
        <Route component={IndividualMovie} path="/individualmovie" />
        <Route component={TVShowsHome} path="/tvshows" />
        <Route to="/">
          <Redirect to="/movie" />
        </Route>

      </Switch>
    </Router>
  </div>
);

export default App;
