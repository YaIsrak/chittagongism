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
				<h3 className=' font-sans'>Welcome {currentUser.email}!</h3>
				<p className='text-sm font-sans'>
					user id:{' '}
					<span className='badge bg-info font-sans text-dark'>
						{currentUser.uid}
					</span>
				</p>
				<p className=' font-sans'>Edit your data:</p>
				<div className='form'>
					<label className='font-sans'>About</label>
					<textarea
						type='textarea'
						className='form-control font-sans'
						placeholder='About'
						defaultValue={about}
						onChange={(e) => setAbout(e.target.value)}
					/>
					<label className=' font-sans'>Email</label>
					<input
						type='text'
						placeholder='Contact mail'
						className='form-control font-sans'
						defaultValue={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label className=' font-sans'>Profile Photo Link</label>
					<input
						type='text'
						placeholder='Profile Photo Link'
						className='form-control font-sans'
						defaultValue={profilePhoto}
						onChange={(e) => setProfilePhoto(e.target.value)}
					/>
					<label className=' font-sans'>Cover Photo Link</label>
					<input
						type='text'
						placeholder='Cover Photo Link'
						className='form-control font-sans'
						defaultValue={coverPhoto}
						onChange={(e) => setCoverPhoto(e.target.value)}
					/>
					<button
						className='btn btn-primary mt-2 font-sans'
						onClick={updateData}
					>
						Save
					</button>
					<hr />

					<div className='social'>
						<h1 className='font-sans'>Social media link</h1>
						<input
							type='text'
							className='form-control font-sans'
							placeholder='Name'
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type='text'
							className='form-control font-sans'
							placeholder='Url'
							onChange={(e) => setLink(e.target.value)}
						/>
						<button
							className='btn btn-primary mt-2 font-sans'
							onClick={addData}
						>
							Add
						</button>

						{/* Social Link */}
						<h3 className=' font-sans'>List</h3>
						<ul>
							{datas.map((data) => (
								<li key={data.id}>
									<h5 className=' font-sans'>
										{data.name} - {data.link}
									</h5>
									<p className=' font-sans'>id: {data.id}</p>
									<button
										className='btn btn-danger font-sans'
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
