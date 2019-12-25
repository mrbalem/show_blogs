/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import '../../utils/Libs';
import './style.css';

const ListBlog = props => {
	if (props.data === null) {
		return <Spinner />;
	}

	return (
		<div className='row articles'>
			{props.data.map((data, index) => (
				<div className='col-sm-6 col-md-4 item' key={`${index}`}>
					<Link
						to={{
							pathname: `/blogpost/${data.Titulo.cleanString()}#`,
							state: data
						}}>
						<img className='img-fluid' src={data.portada} alt={data.Titulo} />
					</Link>
					<h3 className='name'>{data.Autor}</h3>
					<p className='description'>{data.Titulo}</p>
					<Link
						to={{
							pathname: `/blogpost/${data.Titulo.cleanString()}#`,
							state: data
						}}>
						<i className='fa fa-arrow-circle-right'></i>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ListBlog;
