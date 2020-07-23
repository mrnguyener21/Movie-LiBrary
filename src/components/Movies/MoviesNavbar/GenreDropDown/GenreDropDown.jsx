/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { StyledMenu, StyledMenuItem } from './GenreDropDown_Styles';
import { fetchMovieGenre } from '../../../../actions';

const GenreDropDown = () => {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
        // color="grey"
        onClick={handleClick}
      >Genre
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <p>test</p>
        </StyledMenuItem>
        <StyledMenuItem>
          <p>test 2</p>

        </StyledMenuItem>

      </StyledMenu>
      <button onClick={() => dispatch(fetchMovieGenre())}>movie genre</button>
      <button onClick={() => console.log(movie)}>console log</button>
    </div>
  );
};
export default GenreDropDown;
