/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../services/useServices';
import '../../utils/Libs';
import './style.css';

const ListBlog = props => {
	const [datas, setConfig] = useServices();

	useEffect(() => {
		if (datas === null) {
			setConfig({
				type: 'get',
				urls: 'https://us-central1-fir-mrvalem.cloudfunctions.net/getBlogLists',
				isrequest: true
			});
		}
	}, []);

	console.log(datas);
	if (datas === null) {
		return <div>cargando...</div>;
	}

	return (
		<div class='row articles'>
			{datas.data.map((data, index) => (
				<div class='col-sm-6 col-md-4 item' key={`${index}`}>
					<Link
						to={{
							pathname: `/blogpost/${data.Titulo.cleanString()}`,
							state: data
						}}>
						<img class='img-fluid' src={data.portada} />
					</Link>
					<h3 class='name'>{data.Autor}</h3>
					<p class='description'>{data.Titulo}</p>
					<a class='action' href='#'>
						<i class='fa fa-arrow-circle-right'></i>
					</a>
				</div>
			))}
		</div>
	);
};

export default ListBlog;
