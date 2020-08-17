/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import GenreDropDown from './GenreDropDown/GenreDropDown';
import CategoryDropDown from './CategoryDropDown/CategoryDropDown';
import { chooseMovieGenre } from '../../../actions';

import makeStyles from './styles';

const MoviesNavbar = () => {
  const classes = makeStyles();
  const test = useSelector((state) => state.chooseMovieGenre);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            // color="red"
            aria-label="open drawer"
          >
            <MenuIcon />

          </IconButton>
          <div className={classes.title}>
            <Typography className={classes.linkContainer}>
              <Link className={classes.link} onClick={() => dispatch(chooseMovieGenre(0))} to="/movies">MOVIES</Link>
              <Link className={classes.link} to="/tv">TV</Link>
              <CategoryDropDown />
              <GenreDropDown />
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MoviesNavbar;

