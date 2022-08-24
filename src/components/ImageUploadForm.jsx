import { useState } from 'react';
import useStorage from '../hooks/useStorage';
import ProgressBar from './ProgressBar';

export default function ImageUploadForm({ folder }) {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	// hooks
	const { progress, handleImageSubmit } = useStorage(folder);

	const handleChange = (e) => {
		const type = ['image/png', 'image/jpeg', 'image/jpg'];
		let selected = e.target.files[0];
		if (selected && type.includes(selected.type)) {
			setFile(selected);
			setError(false);
		} else {
			setFile(null);
			setError(true);
		}
	};

	return (
		<div className='image-upload-form container'>
			<form className='form' onSubmit={handleImageSubmit}>
				<input className='form-control' type='file' onChange={handleChange} />
				<button className='btn btn-dark my-2' type='submit'>
					Upload
				</button>
			</form>

			{file !== null && progress !== 100 && (
				<div className='info'>
					<p>
						You choosed {file.name} file <br />
						Size: {file.size / 1000000} MB <br />
						Type: {file.type}
					</p>
				</div>
			)}

			{error && (
				<span className='text-danger'>
					Please upload an image file (png, jpeg or jpg )
				</span>
			)}

			<ProgressBar progress={progress} />
		</div>
	);
}
