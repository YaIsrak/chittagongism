import { motion } from 'framer-motion';

export default function GalleryImage({ url, setSelectedImage }) {
	return (
		<motion.div className='col-6' onClick={() => setSelectedImage(url)} layout>
			<motion.img
				className='img-fluid my-3'
				src={url}
				alt='GalleryImage'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			/>
		</motion.div>
	);
}
