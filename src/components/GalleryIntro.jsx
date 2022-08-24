import FP1 from '../Photos/1.jpg';
import FP2 from '../Photos/2.jpg';
import FP3 from '../Photos/3.jpg';
import GalleryCarousel from './GalleryCarousel';

export default function GalleryIntro() {
	return (
		<div
			id='carouselExampleFade'
			className='carousel slide carousel-fade'
			data-bs-ride='carousel'
			// style={{ height: '100vh' }}
		>
			<h1
				className='position-absolute top-50 start-50 translate-middle z-30 fw-bold text-white'
				style={{ fontSize: '10vmin' }}
			>
				Gallery
			</h1>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<GalleryCarousel image={FP1} />
				</div>
				<div className='carousel-item'>
					<GalleryCarousel image={FP2} />
				</div>
				<div className='carousel-item'>
					<GalleryCarousel image={FP3} />
				</div>
			</div>

			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleFade'
				data-bs-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
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
