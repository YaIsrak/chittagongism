import useAuth from '../hooks/useAuth';

export default function Login() {
	const { currentUser, setEmail, setPassword, handleLogin } = useAuth();

	console.log('user:', currentUser);

	return (
		<section className='login'>
			<div
				className='card position-absolute top-50 start-50 translate-middle'
				style={{ width: '18rem' }}
			>
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
					<a href='/' className='font-sans'>
						Forgot Password?
					</a>
				</div>
			</div>
		</section>
	);
}
