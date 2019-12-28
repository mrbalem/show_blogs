/** @format */

import React, { useEffect } from 'react';
import Spaces from '../../components/Spaces';
import CreateBlogPortada from '../../components/CreateBlogPortada/';
import './style.css';

const CreateBlof = () => {
	const enableMenu = () => {
		var menu = document.getElementsByClassName('animated--grow-in')[0];
		if (menu === undefined) return;
		menu.className = menu.className.replace(/\bshow\b/g, '');
	};
	useEffect(() => {
		enableMenu();
	}, []);
	return (
		<div>
			<Spaces />
			<br></br>
			<br></br>
			<CreateBlogPortada />
			<div className='blog'>ddd</div>
		</div>
	);
};

export default CreateBlof;
