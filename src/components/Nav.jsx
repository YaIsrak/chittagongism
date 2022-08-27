import '../dist/nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<nav className='navbar navbar-dark fixed-top'>
			<div className='container'>
				<Link className='navbar-brand fw-bold' to='/'>
					Chiitagongism
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<div className='line1 line'></div>
					<div className='line2 line'></div>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link className='nav-link active' to='/'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/gallery'>
								Gallery
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='mailto:itschittagongism@gmail.com'>
								Contact
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/admin'>
								Admin
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
