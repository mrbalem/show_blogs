/** @format */

import React, { useContext } from 'react';
import logo from '../logo.svg';
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { state } = useContext(StoreContext);
	return (
		//navbar navbar-expand-lg navbar-light bg-light
		<nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				<img
					src={logo}
					width='30'
					height='30'
					className='d-inline-block align-top'
					alt='logo'
				/>
				MrValem
			</Link>

			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarText'>
				<ul className='mr-auto'></ul>
				<div style={{ width: '350px' }}>
					<Link to='/videos' className='navbar-brand'>
						Videos
					</Link>
					<Link to='/blogs' className='navbar-brand'>
						Blogs
					</Link>
					<Link to='/libros' className='navbar-brand'>
						Libros
					</Link>
					<Link to='/portafolio' className='navbar-brand'>
						Portafolio
					</Link>
				</div>
				<div style={{ width: '100px' }}>
					{state.login ? (
						<Link to='/profile' className='navbar-brand'>
							profile
						</Link>
					) : (
						<Link to='/iniciar' className='navbar-brand'>
							Iniciar
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
