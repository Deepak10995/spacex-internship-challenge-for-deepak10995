import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadToasterData } from '../../Actions/baseActions';
const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Toaster = (props) => {
  const classes = useStyles();
  const [state] = useState({
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal } = state;
  const { toaster } = useSelector((state) => ({
    toaster: state.toaster,
  }));
  const dispatch = useDispatch();
  const handleClose = () => {
    toaster.open = false;
    dispatch(loadToasterData(toaster));
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={toaster.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}>
        <Alert onClose={handleClose} severity={toaster.severity}>
          {toaster.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Toaster;
