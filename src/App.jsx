import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import '../src/App.css';


function App() {
  return (
   <Router>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>    
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
