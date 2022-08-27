export default function Footer() {
	const datas = [
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/ChittagongismPhotography017',
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/chittagongism',
		},
	];
	return (
		<section className='footer bg-dark text-white'>
			<div className='container '>
				<div className='row'>
					<div className='col-md-6'>
						<h3>Kazi Akib</h3>
						<a className='text-white' href='mailto:itschittagongism@gmail.com'>
							itschittagongism@gmail.com
						</a>{' '}
						<br />
						<div>
							{datas.map((data, i) => (
								<a className='me-2 text-white' key={i} href={data.link}>
									{data.name}
								</a>
							))}
						</div>
						<br />
						<p className='text-muted'>
							Website Created by{' '}
							<a className='text-muted' href='/'>
								MD Yaser Arafat Israk
							</a>
						</p>
					</div>
					<div className='col-md-6'>
						<h4>Tools</h4>
						<ul className='text-muted'>
							<li>React.js</li>
							<li>Firebase</li>
							<li>Bootstrap</li>
							<li>Tailwind CSS</li>
							<li>Adobe XD</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
