export default function AdminGalleryItem({ data, index }) {
	const date = data.createdAt.toDate();

	const delectImage = () => {
		console.log(data.id);
	};

	return (
		<li className=''>
			<div>
				{index + 1}
				<img
					src={data.url}
					alt=''
					className='img-fluid'
					style={{ height: '70px' }}
				/>
				<p>Created on - {date.toDateString()}</p>
				<button className='btn btn-danger btn-sm' onClick={delectImage}>
					Delect
				</button>
			</div>
		</li>
	);
}
