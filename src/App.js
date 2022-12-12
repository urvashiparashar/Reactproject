import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


import Home from './Homecomponents/Home';

import About from './Homecomponents/About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
      </Router>

      
      
    </>
  );
}

export default App;
