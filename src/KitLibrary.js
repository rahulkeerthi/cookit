import React, { Component } from 'react';
import { getKits } from './CookitAPI';
import Grid from '@material-ui/core/Grid';
import Kit from './Kit';

class KitLibrary extends Component {
	state = {
		kits: []
	};

	componentDidMount () {
		getKits()
			.then((kits) => {
				this.setState({kits});
				console.log(this.state);
			});
	};

	render() {
		const { kits } = this.state;
		return (
			<div>
				<Grid
					container
					spacing={4}
					alignItems="center"
					justify="space-around"
					width="80%"
					margin="auto"
				>
					{ kits.map( kit =>
					<Grid
						item
						key={kit.id}
						xs={12}
						sm={6}
						md={4}
						lg={3}
						xl={3}
						zeroMinWidth
					>
						<Kit
							key={kit.id}
							kit={kit}
$						/>
					</Grid> )}
				</Grid>
			</div>
		)
	};
};

export default KitLibrary;