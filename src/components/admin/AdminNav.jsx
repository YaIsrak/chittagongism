import { Link } from 'react-router-dom';

export default function AdminNav() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container'>
				<Link className='navbar-brand ' to='/admin'>
					Admin Pannel
				</Link>
				<Link to='/'>
					<button className='btn btn-sm btn-outline-success me-2 '>
						Main website
					</button>
				</Link>
				<button className='btn btn-sm btn-outline-danger'>Logout</button>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='mx-auto'></div>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<Link className=' nav-link active' to='/admin'>
								Info
							</Link>
						</li>
						<li className='nav-item'>
							<Link className=' nav-link' to='/admin/gallery'>
								Gallery
							</Link>
						</li>
						<li className='nav-item'>
							<Link className=' nav-link' to='/admin/feature'>
								Feature
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
