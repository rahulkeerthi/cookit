import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { getRestaurants } from '../api/CookitAPI';
import Restaurant from '../components/Restaurant';

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
        <Grid container spacing={4} alignItems="center" justify="space-around" width="80%">
          {restaurants.map((restaurant) => (
            <Grid item key={restaurant.id} xs={12} sm={6} md={4} lg={3} xl={3} zeroMinWidth>
              <Restaurant key={restaurant.id} restaurant={restaurant} $ />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}

export default RestaurantLibrary;
