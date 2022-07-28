
import './App.css';
//import About from './Component/About';
//import Home from './Component/Home';
//import Login from './Component/Login';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom'
import Login from './Component/Login';
import Home from './Component/Home';
import About from './Component/About';
function App() {
  return (
    <div className="App">
     <Navbar/>
    {/* <About/> */}
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
