/** @format */

import { useEffect, useState } from 'react';

const usePrueba = urls => {
	const configServiceDefault = {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		},
		cache: 'default'
	};

	const [data, setData] = useState(null);
	const [config] = useState(configServiceDefault);

	const crudData = async () => {
		try {
			const data = await fetch(urls, config);
			setData(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		crudData();
		console.log(config);
	}, [config]);

	return [data, config];
};

export default usePrueba;
