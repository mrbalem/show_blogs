/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HeaderBlogPost = props => {
	let screen = window.screen.width;

	return (
		<header
			className='masthead'
			style={{
				backgroundImage: `url('${props.portada}')`
			}}>
			<div className='overlay' id='cabecera'></div>
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
						<div
							className='post-heading'
							style={{ padding: `${screen === 1366 ? '174px 0px' : ''}` }}>
							<h1>{props.titulo}</h1>

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

export default HeaderBlogPost;
