export default function Button({ children, className, ...rest }) {
	return (
		<button
			className={`${className} my-2 me-2 py-1 px-2 text-sm md:text-lg buttonstyle`}
			{...rest}
		>
			{children}
		</button>
	);
}
