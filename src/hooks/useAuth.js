import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

export default function useAuth() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	const handleLogin = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				alert('login Successfull! :D');
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	return { currentUser, setEmail, setPassword, handleLogin };
}
