import FP1 from '../Photos/1.jpg';
import FP2 from '../Photos/2.jpg';
import FP3 from '../Photos/3.jpg';

export default function GalleryImageGrid() {
	const datas = [FP1, FP2, FP3];

	return (
		<section className='container'>
			<div className='row'>
				{datas.map((data, i) => (
					<div className='col-6 ' key={i}>
						<img src={data} alt='' />
					</div>
				))}
			</div>
		</section>
	);
}
