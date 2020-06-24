import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { getRestaurants } from '../api/CookitAPI';
import RestaurantItem from '../components/RestaurantItem';

class RestaurantLibrary extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    getRestaurants().then((restaurants) => {
      this.setState({ restaurants });
    });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <Box>
        <Grid container spacing={2} alignItems="center" justify="space-around">
          {restaurants.map((restaurant) => (
            <Grid item key={restaurant.id} xs={12} sm={6} md={4} lg={3} xl={3} zeroMinWidth>
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default RestaurantLibrary;
