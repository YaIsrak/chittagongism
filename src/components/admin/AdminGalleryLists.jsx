import useData from '../../hooks/useData';
import useStorage from '../../hooks/useStorage';
import AdminImageItem from './AdminImageItem';

export default function AdminGalleryLists({ folder }) {
	const { datas } = useData(folder);
	const { delectImage } = useStorage(folder);

	return (
		<div className='container'>
			<h1>
				{folder} List- {datas.length}
			</h1>
			<hr />
			{datas.map((data, i) => (
				<ul className='' key={data.id} id={data.id}>
					<AdminImageItem data={data} index={i} delectImage={delectImage} />
				</ul>
			))}
		</div>
	);
}
