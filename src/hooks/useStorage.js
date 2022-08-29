import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	serverTimestamp,
} from 'firebase/firestore';
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytesResumable,
} from 'firebase/storage';
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
					alert('Photo uploaded, Please Refresh!');
					setUrl(downloadUrl);
					async function addImage() {
						await addDoc(collectionRef, {
							url: downloadUrl,
							createdAt: serverTimestamp(),
						});
					}
					addImage();
				});
			}
		);
	};

	// delect function
	const delectImage = (id, url) => {
		const pictureRef = ref(projectStorage, url);

		// delect task
		deleteObject(pictureRef)
			.then(() => {
				alert('Picure is delected succesfully');
				async function handleDelete() {
					await deleteDoc(doc(projectFirestore, folder, id));
					alert('doc delected');
				}
				handleDelete();
			})
			.catch((err) => {
				alert('something is wrong', err);
			});
	};

	return { handleImageSubmit, url, progress, delectImage };
}
