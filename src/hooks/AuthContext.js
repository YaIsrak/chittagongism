import {
	// getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currentUser, setCurrentUser] = useState('');

	useEffect(() => {
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

	const signout = () => {
		return signOut(auth);
	};

	const value = {
		currentUser,
		setEmail,
		setPassword,
		handleLogin,
		signout,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
