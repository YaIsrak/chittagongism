export default function Button({ children, className, ...rest }) {
	return (
		<button
			className={`${className} my-2 me-2 py-2 px-4  buttonstyle`}
			{...rest}
		>
			{children}
		</button>
	);
}
