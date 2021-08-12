import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import Home from './components/Home';
import Products from './components/pages/Products';
import TopMenu from './components/TopMenuComponent';
import './App.css';

function App() {
	return (
		<Router>
			<div>
				<TopMenu />
				<Route path="/products" exact component={Products}>
					<Products />
				</Route>
				<Route path="/" exact component={Home}>
					<Home />
				</Route>
			</div>
		</Router>
	);
}

export default App;
