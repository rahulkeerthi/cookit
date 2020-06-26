import React from 'react';
import { Grid, Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    margin: 0,
    textAlign: 'center',
  },
  grid: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    margin: '16px auto',
  },
});

function Library({ title, elements, Item }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {title && (
        <Typography variant="h3" className={classes.title}>
          {title}
        </Typography>
      )}
      <Grid container spacing={4} className={classes.grid}>
        {elements.map((element) => (
          <Grid item key={element.id} xs={12} sm={6} md={4} lg={3} xl={3} zeroMinWidth>
            <Item key={element.id} element={element} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Library.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.array.isRequired,
  Item: PropTypes.func.isRequired,
};
export default Library;
