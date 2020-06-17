import React, { Component } from 'react';
import { getRestaurants } from './CookitAPI';
import Grid from '@material-ui/core/Grid';
import Restaurant from './Restaurant';

class RestaurantLibrary extends Component {
	state = {
		restaurants: []
	};

	componentDidMount () {
		getRestaurants()
			.then((restaurants) => {
				this.setState({restaurants});
				console.log(this.state);
			});
	};

	render() {
		const { restaurants } = this.state;
		return (
			<div>
				<Grid
					container
					spacing={4}
					alignItems="center"
					justify="space-around"
					width="80%"
				>
					{ restaurants.map( restaurant =>
					<Grid
						item
						key={restaurant.id}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						xl={3}
						zeroMinWidth
					>
						<Restaurant
							key={restaurant.id}
							restaurant={restaurant}
$						/>
					</Grid> )}
				</Grid>
			</div>
		)
	};
};

export default RestaurantLibrary;