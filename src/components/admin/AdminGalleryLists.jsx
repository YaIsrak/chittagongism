import useData from '../../hooks/useData';
import AdminImageItem from './AdminImageItem';

export default function AdminGalleryLists({ folder }) {
	const { datas } = useData(folder);

	return (
		<div className='container'>
			<h1>{folder} List</h1>
			<hr />
			{datas.map((data, i) => (
				<ul className='' key={data.id} id={data.id}>
					<AdminImageItem data={data} index={i} />
				</ul>
			))}
		</div>
	);
}
