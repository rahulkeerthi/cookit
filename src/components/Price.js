import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
  },
});

export default function Hook({ price }) {
  const classes = useStyles();
  return <Typography className={classes.root}>£{price}</Typography>;
}

Hook.propTypes = {
  price: PropTypes.number.isRequired,
};
