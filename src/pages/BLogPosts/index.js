/** @format */

import React, { useEffect } from 'react';
import HeaderBlogPost from '../../components/headerblogpost';
import ArticleBlogPost from '../../components/articleblogpost';
import FooterBlogPost from '../../components/FooterBlogPost';
import Spinner from '../../components/spinner';
import useServices from '../../services/useServices';

const BLogPost = props => {
	const [datas, setConfig] = useServices();
	const UpdateNavcolor = () => {
		let elemento = document.getElementsByClassName('bg-dark')[0];
		//elemento.className = elemento.className.replace(/\bbg-dark\b/g, '');
		elemento.className += '  ocult';
	};

	useEffect(() => {
		UpdateNavcolor();
		if (props.location.state === undefined) {
			setConfig({
				type: 'POST',
				urls: 'https://us-central1-fir-mrvalem.cloudfunctions.net/getBlog',
				parameters: {
					url:
						'Nuevas vulnerabilidades de implementación de HTTP-2 exponen sitios web a ataques DoS'
				},
				isrequest: true
			});
		}
	}, [props.location.state, setConfig]);

	if (props.location.state === undefined) {
		if (datas === null) {
			return <Spinner />;
		}
	}

	return (
		<div>
			{props.location.state ? (
				<div>
					<HeaderBlogPost
						portada={props.location.state.portada}
						autor={props.location.state.Autor}
						titulo={props.location.state.Titulo}
					/>
					<ArticleBlogPost contenido={props.location.state.contenido} />
					<FooterBlogPost />
				</div>
			) : (
				<div>
					<HeaderBlogPost
						portada={datas.data[0].portada}
						autor={datas.data[0].Autor}
						titulo={datas.data[0].Titulo}
					/>
					<ArticleBlogPost contenido={datas.data[0].contenido} />
					<FooterBlogPost />
				</div>
			)}
		</div>
	);
};

export default BLogPost;
