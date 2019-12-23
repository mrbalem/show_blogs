/** @format */

import { useState, useEffect } from 'react';

//consumiendo una API REST con fech
const useServices = () => {
	const configServiceDefault = {
		type: 'GET',
		urls: '',
		parameters: null,
		isrequest: false
	};

	const [datas, setDatas] = useState(null);
	const [config, setConfig] = useState(configServiceDefault);

	useEffect(() => {
		async function getData() {
			try {
				const response = await fetch(config.urls, {
					method: `${config.type}`,
					body: JSON.stringify(
						config.parameters === null ? null : config.parameters
					),
					headers: {
						'content-type': 'application/json'
					}
				});
				if (response.ok) {
					const data = await response.json();
					if (data) {
						setDatas(data);
					}
				}
			} catch (error) {
				console.error(error);
				setDatas('error en la consulta');
			}
		}

		if (config.isrequest) {
			getData();
		}
	}, [config]);

	return [datas, setConfig];
};

export default useServices;
