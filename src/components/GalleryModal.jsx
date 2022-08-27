import { motion } from 'framer-motion';

export default function GalleryModal({ selectedImage, setSelectedImage }) {
	const handleClick = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImage(null);
		}
	};

	return (
		<motion.div className='backdrop' onClick={handleClick}>
			<motion.img
				src={selectedImage}
				alt='enlargeImage'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			/>
		</motion.div>
	);
}
