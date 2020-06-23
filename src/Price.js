import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        fontWeight: 600
    },
});

export default function Hook(props) {
    const classes = useStyles();
    return <Typography className={classes.root}>£{props.price}</Typography>;
  }