import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getKits, getRestaurants } from './api/CookitAPI';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Library from './libraries/Library';
import RestaurantItem from './components/RestaurantItem';
import KitItem from './components/KitItem';
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
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (kits && restaurants && (
						<div className="LibraryContainer">
							<Library pb={2} elements={kits} Item={KitItem} title="Our kits" />
							<Library pb={2} elements={restaurants} Item={RestaurantItem} title="Our restaurants" />
						</div>
				  	)
			  	)
              }
            />
            <Route exact path="/kit/:id" render={({match: {params}}) => <Kit kit={kits.find(kit => kit.id === params.id)} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
