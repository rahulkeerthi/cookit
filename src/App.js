import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getKits, getRestaurants } from './api/CookitAPI';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import KitLibrary from './libraries/KitLibrary';
import RestaurantLibrary from './libraries/RestaurantLibrary';
import Kit from './pages/Kit';

import './scss/main.scss';
import './App.scss';

class App extends Component {
    state = {
      kits: null,
	  restaurants: null
    };

	async componentDidMount() {
		const kits = await getKits();
		const restaurants = await getRestaurants();
		this.setState({ kits, restaurants });
  	};

  render() {
    const { kits, restaurants } = this.state;
	console.log('Kits render ', kits);
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (kits && (
						<div className="LibraryContainer">
						<h2>Our kits</h2>
						<KitLibrary pb={2} kits={kits} />
						<h2>Our restaurants</h2>
						<RestaurantLibrary pb={2} restaurants={restaurants} />
						</div>
				  	)
			  	)
              }
            />
            <Route exact path="/kit/:id" render={({match: {params}}) => <Kit kit={kits[params.id]} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
