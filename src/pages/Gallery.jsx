import GalleryImageGrid from '../components/GalleryImageGrid';
import GalleryIntro from '../components/GalleryIntro';
import Layout from '../components/Layout';

export default function Gallery() {
	return (
		<Layout>
			<GalleryIntro />
			<GalleryImageGrid />
		</Layout>
	);
}
