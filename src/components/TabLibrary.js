import React from 'react';
import { Grid, Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    margin: '0',
    textAlign: 'center',
  },
  grid: {
    alignItems: 'center',
  },
});

function TabLibrary({ elements, item }) {
  const Item = item;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={4} className={classes.grid}>
        {elements.map((element) => (
          <Grid item key={element.id} zeroMinWidth>
            <Item key={element.id} element={element} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

TabLibrary.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.array.isRequired,
  item: PropTypes.func.isRequired,
};
export default TabLibrary;
