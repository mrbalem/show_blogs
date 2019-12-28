/** @format */

import React from 'react';
import Navbar from '../Navbar';
import '../../App.css';

const Layout = props => {
	return (
		<div className='App-header'>
			<Navbar />
			{props.children}
		</div>
	);
};

export default Layout;
