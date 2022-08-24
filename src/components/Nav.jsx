import '../dist/nav.css';

export default function Nav() {
	return (
		<nav className='navbar navbar-dark fixed-top bg-zinc-900/20 '>
			<div className='container'>
				<a className='navbar-brand fw-bold' href='/'>
					Chiitagongism
				</a>
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
							<a className='nav-link active' href='/'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/about'>
								About
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/gallery'>
								Gallery
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='mailto:itschittagongism@gmail.com'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
