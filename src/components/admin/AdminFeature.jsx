import useData from '../../hooks/useData';
import ImageUploadForm from '../ImageUploadForm';
import AdminGalleryLists from './AdminGalleryLists';
import AdminNav from './AdminNav';

export default function AdminFeature() {
	const folder = 'feature';
	const { datas } = useData(folder);

	return (
		<>
			<AdminNav />
			<div className='container'>
				<h1>Upload photos on {folder}</h1>
			</div>
			<section style={{ padding: '5vmin 0 0 0 ' }}>
				<ImageUploadForm
					folder={folder}
					dataLength={datas.length}
					btn={datas.length >= 3 ? true : false}
				/>
			</section>
			<hr />
			<section>
				<AdminGalleryLists folder={folder} />
			</section>
		</>
	);
}
