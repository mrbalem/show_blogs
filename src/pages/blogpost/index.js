/** @format */

import React, { useEffect } from 'react';
import HeaderBlogPost from '../components/headerBlogpost';
import ArticleBlogPost from '../components/ArticleBlogPost';
import FooterBlogPost from '../components/footerBlogPost';
const BLogPost = () => {
	const UpdateNavcolor = () => {
		let elemento = document.getElementsByClassName('bg-dark')[0];
		//elemento.className = elemento.className.replace(/\bbg-dark\b/g, '');
		elemento.className += '  ocult';
	};

	useEffect(() => {
		UpdateNavcolor();
	}, []);

	return (
		<div>
			<HeaderBlogPost />
			<ArticleBlogPost />
			<FooterBlogPost />
		</div>
	);
};

export default BLogPost;
