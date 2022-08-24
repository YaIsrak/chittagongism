import FP1 from '../Photos/1.jpg';
import FP2 from '../Photos/2.jpg';
import FP3 from '../Photos/3.jpg';

export default function FeatureSec() {
	return (
		<section className='featuresec bg-orange-100/40 '>
			<h1 className='text-center fw-bold'>Feature Photos</h1>
			<div className='container'>
				<div className='row'>
					<img className='col-4 img-fluid' src={FP1} alt='' />
					<img className='col-4 img-fluid' src={FP2} alt='' />
					<img className='col-4 img-fluid' src={FP3} alt='' />
				</div>
			</div>
		</section>
	);
}
