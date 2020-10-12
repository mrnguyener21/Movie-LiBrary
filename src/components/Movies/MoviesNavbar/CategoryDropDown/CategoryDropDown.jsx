/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link as ReactScroll } from 'react-scroll';
import { StyledMenu, StyledMenuItem } from './CategoryDropDown_Styles';
import { chooseMovieCategory } from '../../../../actions';

const GenreDropDown = () => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button style={{ color: 'white', textDecoration: 'none' }} onClick={handleClick}>Category</Button>
      <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <ReactScroll activeClass="active" to="top" spy smooth duration={400}>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('popular', 1))}>
            <Link style={{ color: 'black', textDecoration: 'none' }} to="/movies">Popular</Link>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('upcoming', 1))}>
            <Link style={{ color: 'black', textDecoration: 'none' }} to="/movies">Upcoming</Link>

          </StyledMenuItem>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('top_rated', 1))}>
            <Link style={{ color: 'black', textDecoration: 'none' }} to="/movies">Top Rated</Link>

          </StyledMenuItem>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('now_playing', 1))}>
            <Link style={{ color: 'black', textDecoration: 'none' }} to="/movies">Now Playing</Link>

          </StyledMenuItem>

        </ReactScroll>

      </StyledMenu>
    </div>
  );
};
export default GenreDropDown;
