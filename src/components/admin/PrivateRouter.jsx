import { useAuth } from '../../hooks/AuthContext';
import { Navigate } from 'react-router-dom';
import Loading from '../Loading';
import { useEffect, useState } from 'react';

export default function PrivateRoute({ children }) {
	const [loading, setLoading] = useState(true);
	const { currentUser } = useAuth();

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return loading ? (
		<div className='position-absolute top-50 start-50 translate-middle'>
			<Loading />
		</div>
	) : (
		<>{currentUser ? children : <Navigate to='/login' replace />}</>
	);
}
