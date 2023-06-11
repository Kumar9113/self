
import './App.css';
import './index.css'
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/Project' element={<Project/>} ></Route>
    <Route path='/About' element={<About/>} ></Route>
    <Route path='/Contact' element={<Contact/>} ></Route>

   </Routes>

   </>
  );
}

export default App;
