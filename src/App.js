import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Kit from './pages/Kit';

import './scss/main.scss';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kit/:id" render={({ match }) => <Kit id={match.params.id} />} />
          {/* <Route
              exact
              path="/restaurant/:id"
              render={({ match }) => <Restaurant restaurant={selectRestaurant(match.params.id)} />}
            /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
  // }
};

export default App;
