/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

const CreateBlogHeader = props => {
	// let screen = window.screen.width;

	return (
		<header
			className='masthead'
			style={{
				backgroundImage: `url('http://tusimagenesde.com/wp-content/uploads/2017/12/fotos-para-portada-22.jpg')`
			}}>
			<div className='overlay'></div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-10 col-lg-8 mx-auto'>
						<div
							style={{
								fontSize: '30px',
								top: '10%',
								position: 'absolute'
							}}>
							<Link to='/blogs' style={{ color: '#ffffff' }}>
								<i className='fas fa-arrow-circle-left' title='atras'></i>
							</Link>
						</div>
						<div className='post-heading'>
							<h1>
								Una nueva vulnerabilidad de Bluetooth permite a los
								ciberdelincuentes espiar conexiones cifradas{' '}
							</h1>

							<span className='meta'>
								Escrito por&nbsp;<a href='#'>{props.autor}</a>&nbsp;on August
								24, 2018
							</span>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default CreateBlogHeader;
