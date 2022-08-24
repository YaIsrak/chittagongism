import ImageUploadForm from '../ImageUploadForm';
import AdminGalleryLists from './AdminGalleryLists';
import AdminNav from './AdminNav';

export default function AdminGallery() {
	const folder = 'gallery';
	return (
		<>
			<AdminNav />
			<div className='container'>
				<h1>Upload photos on {folder}</h1>
			</div>
			<section style={{ padding: '5vmin 0 0 0 ' }}>
				<ImageUploadForm folder={folder} />
			</section>
			<hr />
			<section>
				<AdminGalleryLists folder={folder} />
			</section>
		</>
	);
}
