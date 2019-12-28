/** @format */

import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import {
	auth,
	provider,
	providerGoogle,
	providerGithub
} from '../../utils/firebaseAuth';
import './style.css';

const Login = props => {
	const { state, actions } = useContext(StoreContext);

	const loginFacebook = () => {
		auth()
			.signInWithPopup(provider)
			.then(({ user }) => {
				actions.setUser(user);
				actions.setLogin(true);
				props.history.push('/');
			});
	};

	console.log(state);

	return (
		<div style={{ textAlign: 'center' }}>
			<h1> ingresar</h1>
			<div>
				<button onClick={() => loginFacebook()}> facebbok </button>
			</div>
			<div>
				<button> google </button>
			</div>
			<div>
				<button> github </button>
			</div>
		</div>
	);
};

export default Login;
