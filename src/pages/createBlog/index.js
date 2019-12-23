/** @format */

import React, { useEffect } from 'react';
import CreateBlogHeader from '../../components/createBlogHeader';

const CreateBlog = () => {
	const UpdateNavcolor = () => {
		let elemento = document.getElementsByClassName('bg-dark')[0];
		elemento.className += '  ocult';
	};

	useEffect(() => {
		UpdateNavcolor();
	}, []);

	return (
		<div>
			<CreateBlogHeader></CreateBlogHeader>
		</div>
	);
};

export default CreateBlog;
