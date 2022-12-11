import logo from './logo.svg';
import React from 'react'
import './App.css';

import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Featuredservices from './Components/Featuredservices';
import Cards from './Components/Cards';
function App() {
  return (
    <>
     
      
      <Header/>
      <Home/>
      <Featuredservices/>
      <Cards/>
      <Footer/>
      
    </>
  );
}

export default App;
