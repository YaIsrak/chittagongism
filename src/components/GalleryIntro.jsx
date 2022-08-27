import useData from '../hooks/useData';
import GalleryCarousel from './GalleryCarousel';

export default function GalleryIntro() {
	const { datas, loading } = useData('feature');

	return (
		<div
			id='carouselExampleFade'
			className='carousel slide carousel-fade'
			data-bs-ride='carousel'
		>
			<h1
				className='position-absolute top-50 start-50 translate-middle z-30 fw-bold text-white'
				style={{ fontSize: '10vmin' }}
			>
				Gallery
			</h1>
			<div className='carousel-inner'>
				{datas.map((data, i) => (
					<GalleryCarousel
						key={data.id}
						image={data.url}
						i={i}
						loading={loading}
					/>
				))}
			</div>
			{/* prev Button */}
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleFade'
				data-bs-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>

			{/* next button */}
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleFade'
				data-bs-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	);
}
