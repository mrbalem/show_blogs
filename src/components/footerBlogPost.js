/** @format */
import React, { useEffect } from 'react';
import LIstBLog from '../components/listblog';
import useServices from '../services/useServices';

const FooterBLogPost = () => {
	// modificar esta parte
	const [datas, setconfig] = useServices();

	useEffect(() => {
		if (datas === null) {
			// cambiar el para metro
			// https://us-central1-fir-mrvalem.cloudfunctions.net/getBLogAutor
			// parametro : autor : "..."
			setconfig({
				type: 'GET',
				urls: 'https://us-central1-fir-mrvalem.cloudfunctions.net/getBlogLists',
				isrequest: true
			});
		}
	}, []);

	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-md-10 col-lg-8 mx-auto'>
						<ul className='list-inline text-center'>
							<li className='list-inline-item'>
								<span className='fa-stack fa-lg'>
									<i className='fa fa-circle fa-stack-2x'></i>
									<i className='fa fa-twitter fa-stack-1x fa-inverse'></i>
								</span>
							</li>
							<li className='list-inline-item'>
								<span className='fa-stack fa-lg'>
									<i className='fa fa-circle fa-stack-2x'></i>
									<i className='fa fa-facebook fa-stack-1x fa-inverse'></i>
								</span>
							</li>
							<li className='list-inline-item'>
								<span className='fa-stack fa-lg'>
									<i className='fa fa-circle fa-stack-2x'></i>
									<i className='fa fa-github fa-stack-1x fa-inverse'></i>
								</span>
							</li>
						</ul>
						<p style={{ textAlign: 'center' }} className='text-muted copyright'>
							Copyright&nbsp;©&nbsp;Brand 2018
							<a href='#cabecera'> inicio </a>
						</p>
					</div>
					<div class='article-list'>
						<div class='container'>
							<LIstBLog data={datas !== null ? datas.data : null}></LIstBLog>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterBLogPost;
