import AboutSec1 from '../components/AboutSec1';
import FeatureSec from '../components/FeatureSec';
import HomeSec1 from '../components/HomeSec1';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout>
			<HomeSec1 />
			<AboutSec1 />
			<FeatureSec />
		</Layout>
	);
}
