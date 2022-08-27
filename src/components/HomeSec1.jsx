export default function HomeSec1() {
	const introImage =
		'https://firebasestorage.googleapis.com/v0/b/chittagongism.appspot.com/o/intro%2F1660931701428.jpg?alt=media&token=7a911c5a-9d70-43e5-b078-a64421ce3282';
	return (
		<section
			className='homesec1'
			style={{
				backgroundImage: `url('${introImage}')`,
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
