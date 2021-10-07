import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import BackIcon from '../images/backarrow_brown.png';
import { useHistory } from 'react-router-dom';

const useBtnStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
    marginLeft: 40,
    marginBottom: 0,
  }, 
}));

function Icon(props){
  return <img src={props.name} width="auto" height="auto"/>; 
}

const BackBtn = () => {
  const classes = useBtnStyles();
  const history = useHistory();

  return (
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={() => history.goBack()}>
        <Icon name={BackIcon}/>
      </IconButton>
  )
}

export default BackBtn