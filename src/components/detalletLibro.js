/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const DetalleLibro = () => {
	return (
		<div>
			<br />
			<br />
			<br />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<div className='card Purple' style={{ width: '85%' }}>
					<div className='card-header '>
						<Link to='/libros'>
							<i className='fas fa-arrow-left' title='retroceder'></i>
						</Link>
					</div>
					<div className='card-body '>
						<div className='row'>
							<div className='col-md-3 p-2' style={{ textAlign: 'center' }}>
								<img
									width='200'
									height='350'
									src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6-6E_SSMyv9J2YzPyu-ebEJM6XEAlxmoB6v5IhGNIxMqzTl-&s'
									alt='...'
								/>

								<div>
									<br />
									<a href='#' className='btn btn-primary'>
										descargar
									</a>
								</div>
							</div>
							<div className='col-md-9 p-2'>
								<div className='row'>
									<div className='col-md-6'>
										<h6>tag</h6> <br />
										<div style={{ paddingBottom: '1em' }}>
											<h4>Java la novela</h4>
											<strong>Nuria Medina</strong>
										</div>
										<div>
											<i class='fab fa-tumblr-square'></i> Editorial: Booket
										</div>
										<div>
											<i class='fab fa-acquisitions-incorporated'></i> Temática:
											Novela contemporánea | General Novela
										</div>
										<div>
											<i class='fas fa-bookmark'></i> Colección: Biblioteca
											María Dueñas
										</div>
										<div>
											<i class='far fa-file'></i> Número de páginas: 624
										</div>
										<br></br>
									</div>
									<div className='col-md-6' style={{ textAlign: 'center' }}>
										<h6>
											Conoce cualquier contraseña con el Buscador de Leaks:
										</h6>
										<img
											width='210'
											height='200'
											src='https://hackwise.mx/wp-content/uploads/2019/02/ezgif-5-9c679ad55311.gif'
											alt='...'
										/>
										<br></br>
										<br></br>
										<a href='#' className='btn btn-primary'>
											IR AL BUSCADOR DE LEAKS
										</a>
									</div>
								</div>

								<h5>Sinopsis (JAVA):</h5>
								<p className='card-text'>
									Nueva York, 1936. La pequeña casa de comidas El Capitán
									arranca su andadura en la calle Catorce, uno de los enclaves
									de la colonia española que por entonces reside en la ciudad.
									La muerte accidental de su dueño, el tarambana Emilio Arenas,
									obliga a sus indomables hijas veinteañeras a tomar las riendas
									del negocio mientras en los tribunales se resuelve el cobro de
									una prometedora indemnización. Abatidas y acosadas por la
									urgente necesidad de sobrevivir.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetalleLibro;
