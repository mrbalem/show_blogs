/** @format */

import React from 'react';
import Layout from '../components/Layout';
import BLogPost from '../pages/BLogPosts';
import BLogs from '../pages/Blogs';
import Login from '../pages/Login/';
import CreateBlog from '../pages/CreateBlog/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Ruote = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path='/' component={BLogs} />
					<Route path='/blogs' component={BLogs} />
					<Route path='/login' component={Login} />
					<Route path='/create-blog' component={CreateBlog} />
					<Route path='/blogpost/:id' component={BLogPost} />
					{/* <Route component={Notfound} /> */}
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default Ruote;
