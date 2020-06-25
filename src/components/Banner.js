import React from 'react';
import Box from '@material-ui/core/Box';

function Banner({ restaurant }) {
  const { id, name, tags, city, description } = restaurant;

  return (
    <Box key={id}>
      <h1>{name}</h1>
      <h3>{tags.map((tag) => tag.name + ' ')}</h3>
      <h3>{city}</h3>
      <p>{description}</p>
    </Box>
  );
}

export default Banner;
