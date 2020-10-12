/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { Link as ReactScroll } from 'react-scroll';

import { StyledMenu, StyledMenuItem } from './GenreDropDown_Styles';
import { fetchMovieGenre, chooseMovieGenre } from '../../../../actions';

const GenreDropDown = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.movie);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(fetchMovieGenre());
  }, []);

  return (
    <div>
      <Button style={{ color: 'white', textDecoration: 'none' }} onClick={handleClick}>Genre</Button>
      <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {genres && genres.map(({ name, id }) => (
          <ReactScroll activeClass="active" to="top" spy smooth duration={400}>
            <StyledMenuItem onClick={() => dispatch(chooseMovieGenre(id, 1))}>
              <Link style={{ color: 'black', textDecoration: 'none' }} to="/movies">{name}</Link>
            </StyledMenuItem>
          </ReactScroll>

        ))}
      </StyledMenu>
    </div>
  );
};
export default GenreDropDown;
