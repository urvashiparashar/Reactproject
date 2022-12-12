import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './Homecomponents/Header';
import Home from './Homecomponents/Home';
import Footer from './Homecomponents/Footer';


function App() {
  return (
    <>
      {/*Home page section*/}
      <Router>
      <Header/>
      <Home/>
      
      <Footer/></Router>

      
      
    </>
  );
}

export default App;
