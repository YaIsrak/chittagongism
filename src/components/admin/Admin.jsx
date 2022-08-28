import AdminNav from './AdminNav';
import { useAuth } from '../../hooks/AuthContext';
import useData from '../../hooks/useData';

export default function Admin() {
	const { currentUser } = useAuth();
	const { setName, setLink, addData, datas, handleDelete } =
		useData('socialLinks');
	const {
		updateData,
		about,
		email,
		profilePhoto,
		coverPhoto,
		setAbout,
		setEmail,
		setProfilePhoto,
		setCoverPhoto,
	} = useData('info');

	return (
		<>
			<AdminNav />
			<section className='container'>
				<h3>Welcome {currentUser.email}!</h3>
				<p className='text-sm'>user id: {currentUser.uid}</p>
				<p>Edit your data:</p>
				<div className='form'>
					<label>About</label>
					<textarea
						type='textarea'
						className='form-control'
						placeholder='About'
						defaultValue={about}
						onChange={(e) => setAbout(e.target.value)}
					/>
					<label>Email</label>
					<input
						type='text'
						placeholder='Contact mail'
						className='form-control'
						defaultValue={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label>Profile Photo Link</label>
					<input
						type='text'
						placeholder='Profile Photo Link'
						className='form-control'
						defaultValue={profilePhoto}
						onChange={(e) => setProfilePhoto(e.target.value)}
					/>
					<label>Cover Photo Link</label>
					<input
						type='text'
						placeholder='Cover Photo Link'
						className='form-control'
						defaultValue={coverPhoto}
						onChange={(e) => setCoverPhoto(e.target.value)}
					/>
					<button className='btn btn-primary mt-2' onClick={updateData}>
						Save
					</button>
					<hr />

					<div className='social'>
						<h1>Social media link</h1>
						<input
							type='text'
							className='form-control'
							placeholder='Name'
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='text'
							className='form-control'
							placeholder='Url'
							onChange={(e) => setLink(e.target.value)}
						/>
						<button className='btn btn-primary mt-2' onClick={addData}>
							Add
						</button>

						{/* Social Link */}
						<h3>List</h3>
						<ul>
							{datas.map((data) => (
								<li key={data.id}>
									<h5>
										{data.name} - {data.link}
									</h5>
									<p>id: {data.id}</p>
									<button
										className='btn btn-danger'
										onClick={() => handleDelete(data.id)}
									>
										Delete
									</button>
								</li>
							))}
						</ul>
					</div>
					{/*  */}
				</div>
			</section>
		</>
	);
}
