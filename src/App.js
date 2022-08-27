import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';
import AdminGallery from './components/admin/AdminGallery';
import About from './pages/About';
import AdminFeature from './components/admin/AdminFeature';
import Login from './pages/Login';
import PrivateRoute from './components/admin/PrivateRouter';
import { AuthProvider } from './hooks/AuthContext';

function App() {
	return (
		<div className='App'>
			<Router>
				<AuthProvider>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/gallery' element={<Gallery />} />
						<Route exact path='/about' element={<About />} />

						{/* admin */}
						<Route path='/login' element={<Login />} />
						<Route
							path='/admin'
							element={
								<PrivateRoute>
									<Admin />
								</PrivateRoute>
							}
						/>
						<Route
							path='/admin/gallery'
							element={
								<PrivateRoute>
									<AdminGallery />
								</PrivateRoute>
							}
						/>
						<Route
							path='/admin/feature'
							element={
								<PrivateRoute>
									<AdminFeature />
								</PrivateRoute>
							}
						/>
					</Routes>
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
