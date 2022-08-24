import Button from './Button';

export default function AboutSec1() {
	return (
		<section className='aboutsec1' style={{ padding: 0 }}>
			<div className='row'>
				<div
					className='col-6'
					style={{
						backgroundImage:
							"url('https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/298376717_632466505125816_5941247024899339153_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEXmaD5IMDhWxxNu8LxzCSsOJNW2P-VJfE4k1bY_5Ul8fSHyx8eUlY-5DPQ8t7MwjsZV0ZaJjDLEv-RUXY5DpVm&_nc_ohc=YKqANYj7iEYAX9y_T3_&_nc_ht=scontent.fcgp27-1.fna&oh=00_AT9t1OO7x2L5hfX0Bk_J3sda0nEGtCFpbXHbkhM9qXUDwg&oe=63068485')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						height: '100vh',
					}}
				></div>
				<div className='col-6'>
					<div className='middle position-relative top-50 start-50 translate-middle'>
						<h1 className=''>Kazi Akib</h1>
						<p className='text-sm md:text-lg'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
							perspiciatis? Eveniet temporibus, perferendis maiores quod qui
							dolor rem, obcaecati possimus quaerat deserunt incidunt eligendi
							minus? Optio corporis iusto cum aliquam? Lorem, ipsum dolor sit
							amet consectetur adipisicing elit. Veniam, perspiciatis? Eveniet
							temporibus, perferendis maiores quod qui dolor rem, obcaecati
							possimus quaerat deserunt incidunt eligendi minus? Optio corporis
							iusto cum aliquam?v
						</p>
						<Button className='hello'>
							<a href='/'>hello</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
