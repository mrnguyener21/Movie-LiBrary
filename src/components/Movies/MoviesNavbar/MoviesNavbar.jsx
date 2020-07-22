/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import GenreDropDown from './GenreDropDown/GenreDropDown';

import makeStyles from './styles';

const MoviesNavbar = () => {
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

