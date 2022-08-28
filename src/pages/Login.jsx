import { useAuth } from '../hooks/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
	const { currentUser, setEmail, setPassword, handleLogin } = useAuth();

	return (
		<section className='login'>
			<div
				className='card position-absolute top-50 start-50 translate-middle'
				style={{ width: '18rem' }}
			>
				{currentUser ? (
					<div className='card-body text-center'>
						<h5>Your are already logged in!</h5>
						<Link to='/' className='font-sans'>
							Back to Home
						</Link>
						<br />
						<Link to='/admin' className='font-sans'>
							Admin
						</Link>
					</div>
				) : (
					<div className='card-body text-center'>
						<h2 className=''>Login</h2>
						<input
							type='text'
							className='form-control mb-2 font-sans'
							placeholder='Enter your email'
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							type='password'
							className='form-control mb-2 font-sans'
							placeholder='Enter your password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button
							className='form-control btn btn-primary font-sans'
							onClick={handleLogin}
						>
							Login
						</button>
						<Link to='/' className='font-sans'>
							Forgot Password?
						</Link>
						<br />
						<Link to='/' className='font-sans'>
							Back to Home
						</Link>
					</div>
				)}
			</div>
		</section>
	);
}
