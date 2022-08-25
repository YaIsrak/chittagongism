import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { projectStorage, projectFirestore } from '../firebase';

export default function useStorage(folder) {
	// states
	const [url, setUrl] = useState(null);
	const [progress, setprogress] = useState(0);
	const collectionRef = collection(projectFirestore, folder);
	const handleImageSubmit = (e) => {
		// basic configation
		e.preventDefault();
		const file = e.target[0]?.files[0];
		if (!file) return;

		// reference
		const storageRef = ref(projectStorage, `${folder}/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		// upload function
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setprogress(progress);
			},
			(err) => {
				alert(err);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
					alert('Photo uploaded');

					setUrl(downloadUrl);
					createDoc();
				});
			}
		);
	};
	async function createDoc() {
		await addDoc(collectionRef, {
			url,
			createdAt: serverTimestamp(),
		});
	}

	console.log(url);

	return { handleImageSubmit, url, progress };
}

// import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
// import { useEffect, useState } from 'react';
// import { projectStorage, projectFirestore } from '../firebase';

// export default function useStorage(file) {
// 	// states
// 	const [url, setUrl] = useState(null);
// 	const [progress, setprogress] = useState(0);
// 	// const collectionRef = collection(projectFirestore, folder);
// 	const collectionRef = collection(projectFirestore, 'gallery');

// 	useEffect(() => {
// 		// reference
// 		// const storageRef = ref(projectStorage, `${folder}/${file.name}`);
// 		const storageRef = ref(projectStorage, `gallery/${file.name}`);
// 		const uploadTask = uploadBytesResumable(storageRef, file);

// 		// upload function
// 		uploadTask.on(
// 			'state_changed',
// 			(snapshot) => {
// 				const progress = Math.round(
// 					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
// 				);
// 				setprogress(progress);
// 			},
// 			(err) => {
// 				alert(err);
// 			},
// 			() => {
// 				getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
// 					alert('Photo uploaded');
// 					setUrl(downloadUrl);
// 					addDoc(collectionRef, {
// 						url: downloadUrl,
// 						createdAt: serverTimestamp(),
// 					});
// 				});
// 			}
// 		);
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [file]);

// 	return { url, progress };
// }
