import Loading from './Loading';

export default function GalleryCarousel({ image, i, loading }) {
	return (
		<div
			className={`carousel-item ${i === 1 && 'active'}`}
			data-bs-interval='2000'
		>
			{loading === true ? (
				<>
					<Loading />
				</>
			) : (
				<div
					className='h-screen bg-cover bg-center '
					style={{ backgroundImage: `url('${image}')` }}
				></div>
			)}
		</div>
	);
}
