/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Libros = () => {
	const ff = [1, 7, 8, 5, 4, 3, 4, 3, 2];
	const removeClass = () => {
		let elemento = document.getElementsByClassName('bg-dark')[0];
		if (elemento !== undefined) {
			elemento.className = elemento.className.replace(/\bocult\b/g, '');
		}
		//elemento.className += 'ocult';
	};

	useEffect(() => {
		removeClass();
	}, []);

	return (
		<div className='p-4'>
			<br />
			<br />
			<nav className='navbar navbar-dark bg-dark'>
				<a
					className='navbar-brand'
					style={{
						width: '130px',
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center'
					}}>
					<span className='navbar-toggler-icon'></span> Tematica
				</a>

				<form className='form-inline'>
					<input
						className='form-control mr-sm-2'
						type='search'
						placeholder='Search'
						aria-label='Search'
					/>
					<button class='btn btn-light' type='submit'>
						Search
					</button>
				</form>
			</nav>
			<br />
			<div className='row '>
				{ff.map(element => (
					<div className='col-md-2 p-2 '>
						<div className='card'>
							<Link to='/libro/detallelibro'>
								<img
									height='250'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6-6E_SSMyv9J2YzPyu-ebEJM6XEAlxmoB6v5IhGNIxMqzTl-&s'
									className='card-img-top'
									alt='...'
								/>
							</Link>
							<div className='card-body Clestial'>
								<h6 className='card-title'>Fecha</h6>
								<h6 className='card-title'>Autor</h6>
								<a href='#' className='btn btn-primary'>
									Descargar
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Libros;
