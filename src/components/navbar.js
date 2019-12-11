/** @format */

import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				<img
					src={logo}
					width='30'
					height='30'
					className='d-inline-block align-top'
					alt='logo'
				/>
				Notas
			</Link>

			<div className='collapse navbar-collapse' id='navbarText'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/jdjskd'>
							Agregar Notas
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/algo'>
							ver
						</Link>
					</li>
				</ul>
				<Link to='/dsdjkf' className='navbar-brand'>
					Ingresar
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
