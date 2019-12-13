/** @format */

import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import logo from '../logo.svg';
import '../App.css';

function App() {
	const { state, actions } = useContext(StoreContext);
	console.log(state.login);
	return (
		<div className='App'>
			<header>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn hola mundo aea
				</a>
				<button type='button' onClick={() => actions.setLogin(true)}>
					holamundosd
				</button>
				<button type='button' onClick={() => actions.setLogin(false)}>
					SALIR
				</button>
			</header>
		</div>
	);
}

export default App;
