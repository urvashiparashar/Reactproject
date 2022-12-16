import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


import Home from './Homecomponents/Home';

import About from './Homecomponents/About';

import Contact from './Homecomponents/Contact';

function App() {

  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </Router>

      
      
    </>
  );
}

export default App;
