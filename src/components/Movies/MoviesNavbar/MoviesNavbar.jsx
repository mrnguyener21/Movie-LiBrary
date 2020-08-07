/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import GenreDropDown from './GenreDropDown/GenreDropDown';

import makeStyles from './styles';

const MoviesNavbar = ({ chosenGenre }) => {
  const classes = makeStyles();

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
              <Link className={classes.link} to="/movies">movies</Link>
              <Link className={classes.link} to="/tv">tv</Link>
              <GenreDropDown chosenGenre={chosenGenre} />
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

