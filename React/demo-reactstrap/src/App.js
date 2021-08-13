import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import Home from './components/Home';
import Products from './pages/Products';
import TopMenu from './components/TopMenuComponent';
import { CartProvider } from './context/Cart';
import './App.css';

function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<TopMenu />
					<Route path="/products" exact component={Products}>
						<Products />
					</Route>
					<Route path="/" exact component={Home}>
						<Home />
					</Route>
				</div>
			</Router>
		</CartProvider>
	);
}

export default App;
