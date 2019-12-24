/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

const CreateBlogHeader = props => {
	// let screen = window.screen.width;
	function disableScroll() {
		var x = window.scrollX;
		var y = window.scrollY;
		window.onscroll = function() {
			window.scrollTo(x, y);
		};
	}

	useEffect(() => {
		disableScroll();
	}, []);
	// alert(screen);

	return (
		<header
			className='masthead'
			style={{
				backgroundImage: `url('http://tusimagenesde.com/wp-content/uploads/2017/12/fotos-para-portada-22.jpg')`
				// height: `768px`
			}}>
			<div
				style={{
					color: '#ffffff',
					fontSize: '30px',
					top: '1%',
					left: '95%',
					position: 'absolute'
				}}>
				<i title='cambiar' className='fas fa-images'></i>
			</div>
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

						<div className='post-heading' style={{ padding: '140px 0px' }}>
							<div contentEditable='true'>
								<h1>
									Una nueva vulnerabilidad de Bluetooth permite a los
									ciberdelincuentes espiar conexiones cifradasd
								</h1>
							</div>

							<span className='meta'>
								Escrito por&nbsp;<a href='#'>{props.autor}</a>&nbsp;on August
								24, 2018
							</span>
							<div
								style={{
									fontSize: '30px',
									top: '85%',
									left: '95%',
									position: 'absolute'
								}}>
								<i title='siguiente' className='fas fa-arrow-circle-right'></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default CreateBlogHeader;
