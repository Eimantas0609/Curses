
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Components/About';
import Contacts from './Components/Contacts';
import Home from './Components/Home';
 import NotFound from './Components/NotFound';
 import Works from './Components/Works';
 import MainLayout from './layouts/MainLayout';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
	return <BrowserRouter>
	<div className="App">
		<Routes>
		<Route path='/' element={<MainLayout/>}>
		<Route path='about' element={<About/>} />
		<Route path='works' element={<Works/>} />
		<Route path='contacts' element={<Contacts/>} />
		<Route path='*' element={<NotFound/>} />
		</Route> 
		</Routes>
	</div>

	</BrowserRouter>
}
export default App;
		

	
	
	 
