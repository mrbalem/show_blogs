/** @format */

import React, { useContext } from 'react';
//import logo from '../logo.svg';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { state } = useContext(StoreContext);
	return (
		//navbar navbar-expand-lg navbar-light bg-light

		<nav
			className='navbar  navbar-dark bg-dark navbar-expand-lg fixed-top'
			id='mainNav'>
			<div className='container'>
				<Link to='/blogs' className='navbar-brand'>
					Mrvalem
				</Link>
				<button
					data-toggle='collapse'
					data-target='#navbarResponsive'
					className='navbar-toggler'
					aria-controls='navbarResponsive'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<i className='fa fa-bars'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarResponsive'>
					<ul className='nav navbar-nav ml-auto'>
						<li className='nav-item' role='presentation'>
							<Link to='/blogs' className='nav-link'>
								Blogs
							</Link>
						</li>
						{/* <li className='nav-item' role='presentation'>
							<Link to='/libros' className='nav-link'>
								Libros
							</Link>
						</li>
						<li className='nav-item' role='presentation'>
							<Link className='nav-link'>Portafolio</Link>
						</li>
						{state.login ? (
							<li className='nav-item' role='presentation'>
								<Link className='nav-link'>Perfil</Link>
							</li>
						) : (
							<li className='nav-item' role='presentation'>
								<Link to='/login' className='nav-link'>
									iniciar
								</Link>
							</li>
						)} */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
