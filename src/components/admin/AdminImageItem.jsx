export default function AdminGalleryItem({ data, index }) {
	return (
		<li className='list-group-item'>
			{index + 1}
			<img
				src={data.url}
				alt=''
				className='img-fluid'
				style={{ height: '20px' }}
			/>
		</li>
	);
}
