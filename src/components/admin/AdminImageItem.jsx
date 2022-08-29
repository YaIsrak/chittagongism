export default function AdminGalleryItem({ data, index, delectImage }) {
	const date = data.createdAt.toDate();

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
				{data.createdAt && <p>Created on - {date.toString()}</p>}
				<button
					className='btn btn-danger btn-sm'
					onClick={() => delectImage(data.id, data.url)}
				>
					Delect
				</button>
			</div>
		</li>
	);
}
