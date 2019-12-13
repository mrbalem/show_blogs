/** @format */

import React from 'react';
import Home from '../pages/Home';
import Libros from '../pages/Libros';
import Layout from '../components/layout';
import DetalleLibro from '../components/detalletLibro';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Ruote = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/libros' component={Libros} />
					<Route path='/libro/:id' component={DetalleLibro} />
					{/* <Route component={Notfound} /> */}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default Ruote;
