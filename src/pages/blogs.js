/** @format */

import React, { useEffect } from 'react';
import Space from '../components/Space';
import ListBlog from '../components/listblog';

const Blogs = () => {
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
		<div>
			<Space />
			<div class='article-list'></div>
			<div class='article-list'>
				<div class='container'>
					<div class='intro'>
						<h2 class='text-center'>útlimos artículos</h2>
						<p class='text-center'>
							en artichack encontraras los articulos mas recomendamos del ultimo
							encuentro en esta oportunidad vendremos
						</p>
					</div>
					<ListBlog></ListBlog>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
