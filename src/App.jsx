import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';
import AdminGallery from './components/admin/AdminGallery';
import About from './pages/About';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/about' element={<About />} />

					{/* admin */}
					<Route path='/admin' element={<Admin />} />
					<Route path='/admin/gallery' element={<AdminGallery />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
