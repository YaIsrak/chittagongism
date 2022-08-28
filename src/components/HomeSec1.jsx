import useData from '../hooks/useData';

export default function HomeSec1() {
	const { coverPhoto } = useData('info');
	return (
		<section
			className='homesec1'
			style={{
				backgroundImage: `url('${coverPhoto}')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '100vh',
			}}
		>
			<div className='container-sm'>
				<div className='overlay'></div>
				<h1
					className='text-white fw-bold position-absolute top-50 translate-middle-y'
					style={{ fontSize: '10vmin' }}
				>
					Capture <br />
					Aesthetic moment
				</h1>
			</div>
		</section>
	);
}
