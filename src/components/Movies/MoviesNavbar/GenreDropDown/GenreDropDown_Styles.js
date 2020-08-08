/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Menu, MenuItem, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

// export default withStyles((theme) => {

// })

export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}

  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: 'lightgrey',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },

}))(MenuItem);

