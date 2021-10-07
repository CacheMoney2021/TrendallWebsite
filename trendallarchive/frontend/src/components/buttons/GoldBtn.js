import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#FFFFFF',
      height: 'auto',
      width: '100%',
      backgroundColor: '#DAA844',
      '&:hover': {
        backgroundColor: '#C89A3E',
      },
      borderRadius: 10,
    },
  }))(Button);

//Render the Homepage Header Component
const GoldBtn = (props) => {
  return (
    <ColorButton component={Link} to={props.link} variant="contained" disableElevation>
      {props.name}
    </ColorButton>
  )
}

export default GoldBtn