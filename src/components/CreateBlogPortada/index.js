/** @format */

import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { storage, database } from '../../utils/firebaseAuth';
// import useServices from '../../services/useServices/';
import usePrueba from '../../services/usePrueba';

const CreateBlogPortada = () => {
	const { state } = useContext(StoreContext);
	// const [datas, config, setConfig] = usePrueba(
	// 	'https://us-central1-fir-mrvalem.cloudfunctions.net/portada'
	// );
	const [status, setStatus] = useState('Shoose a file');
	const [porcentage, setPorcentage] = useState(0);
	const [idPortada, setIdPortada] = useState(null);
	const [urlPortada, setUrlPortada] = useState(null);
	const [preview, setPreview] = useState(null);
	const [enableDragDrop, setEnableDragDrop] = useState(true);
	const doNothing = event => event.preventDefault();
	const onDragEnter = event => {
		if (enableDragDrop) {
			setStatus('Portada Detectado');
		}
		event.preventDefault();
		event.stopPropagation();
	};

	// const savePortada = async () => {
	// setConfig({
	// 	type: 'POST',
	// 	urls: 'https://us-central1-fir-mrvalem.cloudfunctions.net/setPortada',
	// 	parameters: {
	// 		url: 'dasdasd',
	// 		dasds: 'dasd'
	// 	},
	// 	isrequest: true
	// });

	const savePortada = async () => {
		const data = {
			url: urlPortada,
			directorio: idPortada
		};
		await database.ref(`/me/user/${state.user.displayName}`).set(data);
	};

	// alert('exito');
	// console.log(datas);
	// };
	const removePortada = async () => {
		try {
			await storage
				.ref()
				.child(`${idPortada}`)
				.delete();
			setPreview(null);
			setStatus('Shoose a file');
		} catch (error) {
			alert(error);
		}
	};

	const onDragLeave = event => {
		if (enableDragDrop) {
			setStatus('Shoose a file');
		}
		event.preventDefault();
	};

	const onDragOver = event => {
		if (enableDragDrop) {
			setStatus('Drop');
		}
		event.preventDefault();
	};
	const onDrop = event => {
		const supportedFilesTypes = ['image/jpeg', 'image/png'];
		const { type } = event.dataTransfer.files[0];
		if (supportedFilesTypes.indexOf(type) > -1 && enableDragDrop) {
			// continue with code
			const reader = new FileReader();
			reader.onload = e => setPreview(e.target.result);
			reader.readAsDataURL(event.dataTransfer.files[0]);

			let id = Math.random() * (40 - 15);
			let name = `${state.user.displayName}/${id}`;
			setIdPortada(name);
			//push firebase
			const storageRef = storage.ref();
			const uploadFile = storageRef
				.child(name)
				.put(event.dataTransfer.files[0]);

			uploadFile.on(
				'state_changed',
				snapshot => {
					let porcentage =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					if (porcentage >= 100) {
						setStatus('Done');
						setTimeout(() => {
							setStatus('');
							setPorcentage(100);
							setEnableDragDrop(true);
						}, 750);
					} else {
						setStatus(`${parseInt(porcentage)}%`);
					}
					setPorcentage(porcentage);
				},
				error => {
					console.log('errror');
				},
				async () => {
					try {
						const url = await uploadFile.snapshot.ref.getDownloadURL();
						setUrlPortada(url);
					} catch (error) {
						console.log(error);
					}
					savePortada();
				}
			);
			setEnableDragDrop(false);
		}
		event.preventDefault();
	};

	// useEffect(() => {
	// 	setConfig({
	// 		type: 'GET',
	// 		urls: `https://us-central1-fir-mrvalem.cloudfunctions.net/portada`,
	// 		parametersGET: { nombre: 'Rony CB' },
	// 		isrequest: true
	// 	});
	// }, [setConfig]);

	return (
		<div
			className='Apps'
			onDragEnter={onDragEnter}
			onDragLeave={onDragLeave}
			onDragOver={doNothing}
			onDrop={onDragLeave}>
			<div className={preview === null ? 'border' : ''}>
				<div
					className={`DropArea ${status === 'Drop' ? 'Over' : ''} ${
						status.indexOf('%') > -1 || status === 'Done' ? 'Uploading' : ''
					}`}
					onDragOver={onDragOver}
					onDrop={onDrop}
					onDragLeave={onDragEnter}>
					<div className={`ImageProgress ${preview ? 'Show' : ''}`}>
						<div
							className='ImageProgressImage'
							style={{ backgroundImage: `url(${preview})` }}></div>
						<div
							className='ImageProgressUploaded'
							style={{
								backgroundImage: `url(${preview})`,
								clipPath: `inset(${100 - porcentage}% 0 0 0)`
							}}></div>
					</div>
					<div
						className={`Status ${
							status.indexOf('%') > -1 || status === 'Done' ? 'Uploading' : ''
						}`}>
						{status}
					</div>
					{preview && (
						<div className='Abort' onClick={removePortada}>
							<span title='cambiar'>&times;</span>
						</div>
					)}
				</div>

				<button onClick={savePortada}>guardar</button>
			</div>
		</div>
	);
};

export default CreateBlogPortada;
