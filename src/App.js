import React from "react";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import KitLibrary from "./KitLibrary";
import RestaurantLibrary from "./RestaurantLibrary";
import "./scss/main.scss";
import "./App.scss";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<header className='App-header'>
				<h1>Cookit</h1>
			</header>
			<div className='LibraryContainer'>
				<h2>Our kits</h2>
				<KitLibrary pb={2} />
				<h2>Our restaurants</h2>
				<RestaurantLibrary pb={2} />
			</div>
		</div>
	);
}

export default App;
