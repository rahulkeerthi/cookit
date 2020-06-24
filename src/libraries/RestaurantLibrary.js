import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RestaurantItem from '../components/RestaurantItem';

function RestaurantLibrary ({restaurants}) {

  return (
    <Box>
      <Grid container spacing={4} alignItems="center" justify="space-around">
        {restaurants.map((restaurant) => (
          <Grid item key={restaurant.id} xs={12} sm={6} md={4} lg={3} xl={3} zeroMinWidth>
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RestaurantLibrary;
