export default function ProgressBar({ progress }) {
	return (
		<>
			{progress > 0 && (
				<div className='progress'>
					<div
						className='progress-bar'
						role='progressbar'
						style={{ width: `${progress}%` }}
						aria-valuenow='25'
						aria-valuemin='0'
						aria-valuemax='100'
					>
						{progress}%
					</div>
				</div>
			)}
			{progress === 100 && (
				<p className='text-primary'>Please Refresh to add more</p>
			)}
		</>
	);
}
