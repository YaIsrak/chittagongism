export default function GalleryCarousel({ image }) {
	return (
		<div
			className='h-screen bg-cover bg-center '
			style={{ backgroundImage: `url('${image}')` }}
		></div>
	);
}
