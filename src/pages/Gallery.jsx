import GalleryImageGrid from '../components/GalleryImageGrid';
import GalleryIntro from '../components/GalleryIntro';
import Layout from '../components/Layout';

// import ImageUploadForm from '../components/ImageUploadForm';

export default function Gallery() {
	return (
		<Layout>
			<GalleryIntro />
			<GalleryImageGrid />
			{/* <ImageUploadForm /> */}
		</Layout>
	);
}
