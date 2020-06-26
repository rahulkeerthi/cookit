import React from 'react';
import { Box, Typography, Container, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Social from '../components/Social';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#292932',
    color: '#FFFFFF',
    padding: '15px 5%',
    textAlign: 'left',
    marginBottom: '4px',
  },
  bannerTitle: {
    marginBottom: '8px',
  },
  infos: {
    width: 'auto',
    minWidth: '40vw',
  },
  chip: {
    color: '#FFFFFF',
    border: '1px solid #FFFFFF',
    margin: '2px 8px 8px 0',
  },
  description: {
    lineHeight: '1.2rem',
    fontSize: '.9rem',
    display: '-webkit-box',
    lineClamp: 6,
    boxOrient: 'vertical',
    overflow: 'hidden',
  },
});

function Banner({ restaurant }) {
  const classes = useStyles();
  const { id, name, tags, city, description } = restaurant;

  return (
    <Box className={classes.root} display="flex" alignItems="center" position="static" key={id}>
      <Container className={classes.infos}>
        <Typography variant="h2" className={classes.bannerTitle}>
          {name}
        </Typography>
        <Box>
          {tags.map((tag) => (
            <Chip className={classes.chip} color="primary" variant="outlined" label={tag.name} />
          ))}
        </Box>
        <Box display="flex" alignItems="center" marginTop="8px">
          <Typography variant="h5">{city}</Typography>
          <Social restaurant={restaurant} />
        </Box>
      </Container>
      <Container>
        <Typography className={classes.description} variant="subtitle1">
          {description}
        </Typography>
      </Container>
    </Box>
  );
}

export default Banner;
