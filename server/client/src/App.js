import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import { Route , Routes} from 'react-router-dom'
import Errorpage from './components/Errorpage';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { initialState,reducer } from '../src/reducer/UseReducer'

//1. Context API
export const UserContext=createContext();

const Routing=()=>
  {
      return(
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route  path="*" element={<Errorpage/>} />
      </Routes>
      )
  }

const App = () => {
  const[state,dispatch]=useReducer(reducer,initialState)
  return (
   
    <>
    
    <UserContext.Provider value={{state,dispatch}}>
   
      <Navbar/>
       <Routing/>
      </UserContext.Provider>
    </>
  )
}

export default App
