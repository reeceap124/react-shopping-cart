import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts
import {ProductContext} from './contexts/ProductContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (i) => {
		setCart([...cart, i])
	};

	

	return (
		<div className="App">
			<ProductContext.Provider>
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
