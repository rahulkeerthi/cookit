import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 32,
    fontFamily: '"IM Fell English", serif',
    maxWidth: 700,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider style={{ margin: '24px auto', width: 360 }} />
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align="center" gutterBottom color="textSecondary">
            About
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align="center" gutterBottom color="textSecondary">
            Blog
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align="center" gutterBottom color="textSecondary">
            Terms & Conditions
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align="center" gutterBottom color="textSecondary">
            Contact us
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
