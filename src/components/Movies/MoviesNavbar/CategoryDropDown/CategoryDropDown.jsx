/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import { StyledMenu, StyledMenuItem } from './CategoryDropDown_Styles';
import { chooseMovieCategory } from '../../../../actions';

const GenreDropDown = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.movieGenre);
  const { category } = useSelector((state) => state.movieGenre);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //   useEffect(() => {
  //     dispatch(fetchMovieGenre());
  //   }, []);

  return (
    <div>
      <Button style={{ color: 'white', textDecoration: 'none' }} onClick={handleClick}>Category</Button>
      <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <Link activeClass="active" to="top" spy smooth duration={400}>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('popular', 1))}>
            <Typography>Popular</Typography>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('upcoming', 1))}>
            <Typography>Upcoming</Typography>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('top_rated', 1))}>
            <Typography>Top Rated</Typography>
          </StyledMenuItem>
          <StyledMenuItem onClick={() => dispatch(chooseMovieCategory('now_playing', 1))}>
            <Typography>Now Playing</Typography>
          </StyledMenuItem>

        </Link>

      </StyledMenu>
    </div>
  );
};
export default GenreDropDown;
