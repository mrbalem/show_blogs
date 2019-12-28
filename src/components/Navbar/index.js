/** @format */

import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import perfilOptions from '../perfilOptions/';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const { state } = useContext(StoreContext);

	const logout = perfilOptions();
	console.log(state);
	const showMenu = () => {
		var menu = document.getElementsByClassName('animated--grow-in')[0];
		var confir = document.getElementsByClassName('show')[0];
		if (confir === undefined) {
			menu.className += ' show';
		} else {
			menu.className = menu.className.replace(/\bshow\b/g, '');
		}
	};

	const enableMenu = () => {
		var menu = document.getElementsByClassName('animated--grow-in')[0];
		if (menu === undefined) return;
		menu.className = menu.className.replace(/\bshow\b/g, '');
	};

	const addEventCLick = () => {
		var id = document.getElementById('blog');
		if (id === null) return;
		id.addEventListener('click', () => {
			enableMenu();
		});
	};

	useEffect(() => {
		addEventCLick();
	}, []);

	return (
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
						{state.login ? (
							<li className='nav-item dropdown no-arrow' role='presentation'>
								<div className='nav-item dropdown no-arrow'>
									<img
										onClick={showMenu}
										className='rounded-circle img-profile'
										src={state.user.photoURL}
										alt={state.user.displayName}
										title={state.user.displayName}
									/>

									<div
										className='dropdown-menu shadow dropdown-menu-right animated--grow-in'
										role='menu'>
										<a className='dropdown-item' role='presentation' href='/#'>
											<i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400'></i>
											&nbsp;Perfil
										</a>
										<Link
											className='dropdown-item'
											role='presentation'
											to='/create-blog'>
											<i className='fas fa-cogs fa-sm fa-fw mr-2 text-gray-400'></i>
											&nbsp;Nueva historia
										</Link>
										<a className='dropdown-item' role='presentation' href='/#'>
											<i className='fas fa-list fa-sm fa-fw mr-2 text-gray-400'></i>
											&nbsp;Configuracion
										</a>
										<div className='dropdown-divider'></div>
										<a
											className='dropdown-item'
											role='presentation'
											href='/#'
											onClick={logout}>
											<i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400'></i>
											&nbsp;Logout
										</a>
									</div>
								</div>
							</li>
						) : (
							<li className='nav-item' role='presentation'>
								<Link to='/login' className='nav-link'>
									iniciar sesion
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
