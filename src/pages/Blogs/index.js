/** @format */

import React, { useEffect } from 'react';
import Spaces from '../../components/Spaces';
import useServices from '../../services/useServices';
import ListBlog from '../../components/listblog';

const Blogs = () => {
	const [datas, setconfig] = useServices();

	useEffect(() => {
		if (datas === null) {
			setconfig({
				type: 'GET',
				urls: 'https://us-central1-fir-mrvalem.cloudfunctions.net/getBlogLists',
				isrequest: true
			});
		}
	}, [datas, setconfig]);

	const removeClass = () => {
		let elemento = document.getElementsByClassName('bg-dark')[0];
		if (elemento !== undefined) {
			elemento.className = elemento.className.replace(/\bocult\b/g, '');
		}
	};

	useEffect(() => {
		removeClass();
	}, []);

	return (
		<div id='blog'>
			<Spaces />
			<div className='article-list'></div>
			<div className='article-list'>
				<div className='container'>
					<div className='intro'>
						<h2 className='text-center'>útlimos artículos</h2>
						<p className='text-center'>
							en artichack encontraras los articulos mas recomendamos del ultimo
							encuentro en esta oportunidad Tendremos
						</p>
					</div>
					<br></br>
					<ListBlog data={datas !== null ? datas.data : null}></ListBlog>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
