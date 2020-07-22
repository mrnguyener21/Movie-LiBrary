/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { styledMenu, StyledMenuItem } from './GenreDropDown_Styles';
import { fetchMovieGenre } from '../../../../actions';

const GenreDropDown = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test);
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
        variant="contained"
        color="primary"
        onClick={handleClick}
      >Genre
      </Button>
      <button onClick={() => dispatch(fetchMovieGenre())}>movie genre</button>
      <button onClick={() => console.log(test)}>console log</button>
    </div>
  );
};
export default GenreDropDown;
