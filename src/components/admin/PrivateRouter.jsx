import { useAuth } from '../../hooks/AuthContext';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
	const { currentUser } = useAuth();

	return currentUser ? children : <Navigate to='/login' replace />;
}
