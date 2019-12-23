/** @format */

import React from 'react';
import Home from '../pages/Home';
import Libros from '../pages/Libros';
import Layout from '../components/layout';
import BlogPost from '../pages/blogpost';
import Blogs from '../pages/blogs';
import Login from '../pages/Login';
import Createblog from '../pages/createBlog';
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
					<Route path='/blogs' component={Blogs} />
					<Route path='/login' component={Login} />
					<Route path='/createblog/:id' component={Createblog} />
					<Route path='/blogpost/:id' component={BlogPost} />
					{/* <Route component={Notfound} /> */}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default Ruote;
