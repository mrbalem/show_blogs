/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

const ListBlog = () => {
	const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div class='row articles'>
			{arra.map((data, indi) => (
				<div class='col-sm-6 col-md-4 item'>
					<Link to={`/blogpost/${indi}`}>
						<img
							class='img-fluid'
							src='https://www.secureweek.com/wp-content/uploads/2019/11/La-IA-herramienta-poderosa-para-los-profesionales-de-la-salud.jpg'
						/>
					</Link>
					<h3 class='name'>Article Title</h3>
					<p class='description'>
						Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
						Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
						interdum justo suscipit id.
					</p>
					<a class='action' href='#'>
						<i class='fa fa-arrow-circle-right'></i>
					</a>
				</div>
			))}
		</div>
	);
};

export default ListBlog;
