import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import KitLibrary from './libraries/KitLibrary';
import RestaurantLibrary from './libraries/RestaurantLibrary';
import Kit from './pages/Kit';

import './scss/main.scss';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      kit: null,
    };
  }

  render() {
    const { kit } = this.state;
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div className="LibraryContainer">
                  <h2>Our kits</h2>
                  <KitLibrary pb={2} />
                  <h2>Our restaurants</h2>
                  <RestaurantLibrary pb={2} />
                </div>
              )}
            />
            <Route exact path="/kit/:id" render={() => <Kit kit={kit} />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
