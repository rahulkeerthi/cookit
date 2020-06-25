import React from 'react';
import { Box, Typography, Container, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Social from "../components/Social";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#292932',
    color: '#FFFFFF',
    padding: '15px 5%',
    textAlign: 'left',
  },
  bannerTitle: {
    marginBottom: '10px',
  },
  infos: {
    width: 'auto',
    minWidth: '40vw',
  },
  chip: {
      color: '#FFFFFF',
      border: "1px solid #FFFFFF",
      margin: "2px 2px 8px 0",
  }
});

function Banner({ restaurant }) {
  const classes = useStyles();
  const { id, name, tags, city, description } = restaurant;
  console.log('Restaurant: ', restaurant);

  return (
    <Box className={classes.root} display="flex" alignItems="center" position="static" key={id}>
      <Container className={classes.infos}>
        <Typography variant="h3" className={classes.bannerTitle}>
          {name}
        </Typography>
        <Box>
            {tags.map((tag) => <Chip className={classes.chip} size="small" color="primary" variant="outlined" label={tag.name} />)}
        </Box>
        <Typography variant="p" marginTop="10px">{city}</Typography>
        <Social restaurant={restaurant} />
      </Container>
      <Container>
        <p>{description}</p>
      </Container>
    </Box>
  );
}

export default Banner;
