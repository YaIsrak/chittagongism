import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase';
import AdminImageItem from './AdminImageItem';

export default function AdminGalleryLists({ folder }) {
	const [datas, setDatas] = useState([]);
	const collectionRef = collection(projectFirestore, folder);

	useEffect(() => {
		async function getData() {
			const data = await getDocs(collectionRef);
			setDatas(
				data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}))
			);
		}
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container'>
			<h1>Gallery List</h1>
			<hr />
			{datas.map((data, i) => (
				<ul className='list-group' key={data.id} id={data.id}>
					<AdminImageItem data={data} index={i} />
				</ul>
			))}
		</div>
	);
}
