export default function AdminGalleryItem({ data, index, delectImage }) {
	const date = data.createdAt.toDate();

	return (
		<li className=''>
			<div>
				<h4>{index + 1}</h4>
				<img
					src={data.url}
					alt=''
					className='img-fluid'
					style={{ height: '70px' }}
				/>
				{data.createdAt && (
					<p className='font-sans'>
						Created on -{' '}
						<span className='badge bg-info text-black font-sans'>
							{date.toString()}
						</span>
					</p>
				)}
				<button
					className='btn btn-danger btn-sm font-sans'
					onClick={() => delectImage(data.id, data.url)}
				>
					Delete
				</button>
			</div>
		</li>
	);
}
