import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyAijnqgoeQIQJu_lKQ6fgNC7a0fIEuND2c',
	authDomain: 'graphiql-app-47127.firebaseapp.com',
	projectId: 'graphiql-app-47127',
	storageBucket: 'graphiql-app-47127.appspot.com',
	messagingSenderId: '1033759243197',
	appId: '1:1033759243197:web:3757214e041ae1ab0bf0d4',
};

const initFirebaseApp = () => initializeApp(firebaseConfig);

export default initFirebaseApp;
