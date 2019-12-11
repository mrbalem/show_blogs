/** @format */

import React from 'react';
import Navbar from './navbar';

// import Home from '../pages/Home';
// import Contac from '../pages/Contac';
// import Service from '../pages/Services';

const Layout = props => (
	<div className='App-header'>
		<Navbar />
		{props.children}
	</div>
);

export default Layout;
