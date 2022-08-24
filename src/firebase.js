import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBOWO_GDq6idIbIan3lXW48gvUed6Dji1I',
	authDomain: 'chittagongism.firebaseapp.com',
	projectId: 'chittagongism',
	storageBucket: 'chittagongism.appspot.com',
	messagingSenderId: '292810554059',
	appId: '1:292810554059:web:d9d4215d8e15fe08a8b94e',
	measurementId: 'G-28W79MBQD9',
};

const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { app, projectFirestore, projectStorage };
