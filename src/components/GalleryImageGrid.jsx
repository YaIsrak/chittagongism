import { useState } from 'react';
import useData from '../hooks/useData';
import GalleryImage from './GalleryImage';
import GalleryModal from './GalleryModal';
import Loading from './Loading';

export default function GalleryImageGrid() {
	const [selectedImage, setSelectedImage] = useState(null);
	const { datas, loading } = useData('gallery');

	return (
		<section className='container'>
			<div className='row'>
				{loading && <Loading />}
				{datas.map((data) => (
					<GalleryImage
						key={data.id}
						url={data.url}
						setSelectedImage={setSelectedImage}
					/>
				))}
				{selectedImage && (
					<GalleryModal
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
				)}
			</div>
		</section>
	);
}
