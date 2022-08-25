import { storage, db } from '../firebase-config';
import { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { format } from 'date-fns';
const CreatePost = () => {
	const [caption, setCaption] = useState('');
	const [progress, setProgress] = useState(0);
	const [image, setImage] = useState('');

	const postsCollectionRef = collection(db, 'Posts');

	const formHandler = (e) => {
		e.preventDefault();
		const file = e.target[0].files[0];
		uploadFiles(file);
		createPost();
	};

	const uploadFiles = (file) => {
		if (!file) return;
		const storageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(prog);
			},
			(error) => console.log(error),

			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImage(downloadURL);
				});
			}
		);
	};

	const createPost = async () => {
		const datetime = format(new Date(), 'MMMM dd, yyyy');
		const post = await addDoc(postsCollectionRef, {
			caption: caption,
			imageurl: image,
			date: datetime,
		});
		setCaption('');
	};

	return (
		<div>
			<form onSubmit={formHandler}>
				<input type='file' className='input' />
				<button type='submit'>Upload</button>
				<input
					value={caption}
					type='text'
					placeholder='caption'
					onChange={(e) => setCaption(e.target.value)}
				/>
			</form>
			<hr />
			<h2>Uploading done {progress}%</h2>
			<p>{image}</p>
		</div>
	);
};
export default CreatePost;
