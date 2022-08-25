import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { projectFirestore } from '../firebase';

export default function useData(folder) {
	const [datas, setDatas] = useState([]);
	const [loading, setLoading] = useState(true);

	// ref
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
			setLoading(false);
		}
		getData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return { datas, loading };
}