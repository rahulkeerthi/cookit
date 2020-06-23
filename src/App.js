import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import KitLibrary from './libraries/KitLibrary';
import RestaurantLibrary from './libraries/RestaurantLibrary';
import './scss/main.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="LibraryContainer">
        <h2>Our kits</h2>
        <KitLibrary pb={2} />
        <h2>Our restaurants</h2>
        <RestaurantLibrary pb={2} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
