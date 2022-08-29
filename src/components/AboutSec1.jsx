import Button from './Button';
import useData from '../hooks/useData';

export default function AboutSec1() {
	const { about, profilePhoto } = useData('info');
	const { datas } = useData('socialLinks');

	return (
		<section className='aboutsec1' style={{ padding: 0 }}>
			<div className='row'>
				<div className='col-6 my-auto'>
					<img src={profilePhoto} alt='pp' className='img-fluid' />
				</div>
				<div className='col-6'>
					<div className='middle position-relative top-50 start-50 translate-middle'>
						<h1 className=''>Kazi Akib</h1>
						<p className='text-sm md:text-lg'>{about}</p>

						{datas.map((data) => (
							<Button className='hello' key={data.id}>
								<a href={data.link}>{data.name}</a>
							</Button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
