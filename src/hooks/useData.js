import { useEffect, useState } from 'react';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	// onSnapshot,
	// orderBy,
	// query,
	setDoc,
} from 'firebase/firestore';
import { projectFirestore } from '../firebase';

export default function useData(folder) {
	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(true);
	const collectionRef = collection(projectFirestore, folder);

	useEffect(() => {
		async function getData() {
			// onSnapshot(
			// 	query(collectionRef, orderBy('createdAt', 'desc')),
			// 	(snapshot) => {
			// 		setDatas(
			// 			snapshot.docs.map((doc) => ({
			// 				...doc.data(),
			// 				id: doc.id,
			// 			}))
			// 		);
			// 	}
			// );
			const data = await getDocs(collectionRef);
			setDatas(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
			setLoading(false);
		}
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// add Data
	const [name, setName] = useState('');
	const [link, setLink] = useState('');
	async function addData() {
		try {
			const docRef = await addDoc(collectionRef, {
				name,
				link,
				createdAt: new Date(),
			});
			alert(`succesfully added ${docRef.id}`);
		} catch (e) {
			alert(e);
		}
	}

	// Delete Doc
	async function handleDelete(id) {
		await deleteDoc(doc(projectFirestore, 'socialLinks', id));
		alert('succesfully delected', id);
	}

	// Update Doc
	const [about, setAbout] = useState('');
	const [email, setEmail] = useState('');
	const [profilePhoto, setProfilePhoto] = useState('');
	const [coverPhoto, setCoverPhoto] = useState('');

	async function updateData() {
		const docRef = doc(projectFirestore, folder, 'info1');
		await setDoc(docRef, {
			about,
			email,
			profilePhoto,
			coverPhoto,
		});
		alert('Succesfull');
	}

	useEffect(() => {
		async function getUpdatedData() {
			const collectionRef = collection(projectFirestore, folder);
			const data = await getDocs(collectionRef);
			setAbout(data.docs[0].data().about);
			setEmail(data.docs[0].data().email);
			setProfilePhoto(data.docs[0].data().profilePhoto);
			setCoverPhoto(data.docs[0].data().coverPhoto);
		}
		getUpdatedData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		datas,
		loading,
		setName,
		setLink,
		addData,
		handleDelete,
		updateData,
		about,
		email,
		profilePhoto,
		coverPhoto,
		setAbout,
		setEmail,
		setProfilePhoto,
		setCoverPhoto,
	};
}
