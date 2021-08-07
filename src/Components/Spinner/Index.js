import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import loader from '../../assets/images/loader/Loader.svg';
const useStyles = makeStyles((theme) => ({
  loader: {
    position: 'absolute',
    left: '42%',
    top: '40%',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <img src={loader} alt='loader' />
    </div>
  );
};

export default Loader;
