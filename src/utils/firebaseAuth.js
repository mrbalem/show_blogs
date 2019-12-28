/** @format */

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBfpcgjQ22EcoC35C47CVWzgT3Yi3jhGwk',
	authDomain: 'fir-mrvalem.firebaseapp.com',
	databaseURL: 'https://fir-mrvalem.firebaseio.com',
	projectId: 'fir-mrvalem',
	storageBucket: 'gs://fir-mrvalem.appspot.com/',
	messagingSenderId: '891351506157',
	appId: '1:891351506157:web:ccf9b852eefd39a3'
};

firebase.initializeApp(firebaseConfig);

export const { auth } = firebase;
export const provider = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerGithub = new firebase.auth.GithubAuthProvider();
export const storage = firebase.storage();
export const database = firebase.database();
