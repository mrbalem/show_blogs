/** @format */

import { useContext } from 'react';
import { auth } from '../../utils/firebaseAuth';
import { StoreContext } from '../../context/StoreContext';

const PerfilOptions = () => {
	const { actions } = useContext(StoreContext);

	const LogoutFacebook = () => {
		auth()
			.signOut()
			.then(() => {
				actions.setLogin(false);
				actions.setUser({});
				window.location.href = '/';
			});
	};

	return LogoutFacebook;
};

export default PerfilOptions;
