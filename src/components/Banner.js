import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    flexGrow: 1,
    spacing: 8,
    backgroundColor: '#292932',
    color: '#FFFFFF',
  },
});

function Banner({ restaurant }) {
  const classes = useStyles();
  const { id, name, tags, city, description } = restaurant;
  console.log('Restaurant: ', restaurant);

  return (
    <Box className={classes.root} position="static" key={id}>
      <div>
        <h1>{name}</h1>
        <h3>{tags.map((tag) => tag.name + ' ')}</h3>
        <h3>{city}</h3>
      </div>
      <p>{description}</p>
    </Box>
  );
}

export default Banner;
