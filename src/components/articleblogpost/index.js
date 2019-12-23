/** @format */

import React from 'react';
import './style.css';

const ArticleBlogPost = props => {
	const createMarkup = () => {
		return { __html: `${props.contenido}` };
	};

	return (
		<article>
			<div className='container'>
				<div className='row'>
					<div
						dangerouslySetInnerHTML={createMarkup()}
						className='col-md-10 col-lg-8 mx-auto parrafo'></div>
				</div>
			</div>
		</article>
	);
};

export default ArticleBlogPost;
