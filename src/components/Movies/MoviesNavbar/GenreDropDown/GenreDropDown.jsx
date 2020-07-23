/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { StyledMenu, StyledMenuItem } from './GenreDropDown_Styles';
import { fetchMovieGenre } from '../../../../actions';

const GenreDropDown = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.movie);
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
          {
            genres.map(({ id, name }) => (
              <Typography>{name}</Typography>))
          }
        </StyledMenuItem>
      </StyledMenu>
      { console.log(genres)} {/* returns the proper array */}
      { console.log(genres.name)} {/* returns undefined */}
    </div>
  );
};
export default GenreDropDown;
