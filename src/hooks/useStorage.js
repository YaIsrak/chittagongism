import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { projectStorage, projectFirestore } from '../firebase';

export default function useStorage(folder) {
	// states
	const [url, setUrl] = useState(null);
	const [progress, setprogress] = useState(0);

	const handleImageSubmit = (e) => {
		// basic configation
		e.preventDefault();
		const file = e.target[0]?.files[0];
		if (!file) return;

		// reference
		const storageRef = ref(projectStorage, `${folder}/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);
		const collectionRef = collection(projectFirestore, folder);

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
			async () => {
				await addDoc(collectionRef, {
					url,
					createdAt: serverTimestamp(),
				});
				await getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
					setUrl(downloadUrl);
					alert('Photo uploaded');
				});
			}
		);
	};

	console.log(url);

	return { handleImageSubmit, url, progress };
}
