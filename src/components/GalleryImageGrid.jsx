import useData from '../hooks/useData';
import Loading from './Loading';

export default function GalleryImageGrid() {
	// const datas = [FP1, FP2, FP3];
	const { datas, loading } = useData('gallery');

	return (
		<section className='container'>
			<div className='row'>
				{loading && <Loading />}
				{datas.map((data, i) => (
					<div className='col-6 ' key={i}>
						<img src={data.url} alt='' />
					</div>
				))}
			</div>
		</section>
	);
}
