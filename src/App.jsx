import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


import '../src/App.css';
import AboutUs from './components/About/AboutUs';
import Contact from './components/Contact/Contact';
import Villas from './components/Villas/Villas';
import SingleVila from './components/Villas/SingleVila';



function App() {
  return (
   <Router>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>    
    <Route path='/aboutUs' element={<AboutUs/>}/>    
    <Route path='/contact' element={<Contact/>}/>    
    <Route path='/villas' element={<Villas/>}/>    
    <Route path='/Villa/:id' element={<SingleVila/>}/>    
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
