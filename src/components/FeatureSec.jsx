import useData from '../hooks/useData';

export default function FeatureSec() {
	const { datas } = useData('feature');
	return (
		<section className='featuresec bg-orange-100/40 '>
			<h1 className='text-center fw-bold'>Feature Photos</h1>
			<div className='container'>
				<div className='row'>
					{datas.map((data, i) => (
						<img
							key={data.id}
							id={data.id}
							className='col-md-4 img-fluid'
							src={data.url}
							alt='Feature Photos'
						/>
					))}
				</div>
			</div>
		</section>
	);
}
