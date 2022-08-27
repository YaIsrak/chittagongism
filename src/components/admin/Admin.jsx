import AdminNav from './AdminNav';
import { useAuth } from '../../hooks/AuthContext';

export default function Admin() {
	const { currentUser } = useAuth();

	return (
		<>
			<AdminNav />
			<section className='container'>
				<h3>Welcome {currentUser.email}!</h3>
				<p className='text-sm'>user id: {currentUser.uid}</p>
				<p>Edit your data:</p>
				<div>
					<label>About</label>
					<textarea
						type='textarea'
						className='form-control'
						placeholder='About'
					/>
					<input
						type='text'
						placeholder='Contact mail'
						className='form-control'
					/>
					<hr />
					<div className='social'>
						<h1>Social media link</h1>
						<input type='text' className='form-control' placeholder='Name' />
						<input type='text' className='form-control' placeholder='Url' />
						<button className='btn btn-primary'>Add</button>
						<h3>List</h3>
						<ul>
							<li>
								Facebook - link <br />
								<button className='btn btn-danger'>Delect</button>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
