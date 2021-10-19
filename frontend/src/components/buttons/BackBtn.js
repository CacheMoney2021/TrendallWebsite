import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import { Icon } from '@iconify/react';
import arrowBack from '@iconify/icons-eva/arrow-back-fill';

//-------------------------------------------------------------

const useBtnStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
    marginLeft: 40,
    marginBottom: 0,
  }, 
}));

//-------------------------------------------------------------

const BackBtn = () => {
  const classes = useBtnStyles();
  const history = useHistory();

  return (
      <IconButton type="submit" className={classes.iconButton} onClick={() => history.goBack()}>
        <Icon icon={arrowBack} width="40px" height="40px" style={{ color: "#3F342C" }} />
      </IconButton>
  )
}

export default BackBtn