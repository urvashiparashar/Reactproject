import React, { useContext } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { UserContext } from '../App'

const Login = () => {

  const {state,dispatch}=useContext(UserContext);

  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  
  const loginUser=async (e) =>
  {
      e.preventDefault();
      const res=await fetch('/signin',{
        method :"POST",
        credentials: 'include',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      });

      const data= await res.json();

      if(res.status===400 || !data)
      {
        window.alert("invalid credentials");
      }
      else
      {
        dispatch({type:"USER",payload:true})
        window.alert("login successfull");
        navigate("/");
      }

  }

  return (
   <>
   <section className='signup'>
      <div className='container mt-5' >
        <div className='signin-content' >
          <div className='signin-image'>
            <NavLink to="/signup" className="signup-image-link">Create an account</NavLink>
          </div>
          <div className='signin-form'>
          <h2 className='form-title'>Sign up</h2>
          <form className='register-form' id="register-form" method='POST'>
            
            <div className='form-group'>
              <label htmlFor='email'>
                <i className='zmdi zmdi-email material-icons-name'></i>
              </label>
              <input type="email" name="email" id="email" autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your email'/>
            </div>
            
            <div className='form-group'>
              <label htmlFor='password'>
                <i className='zmdi zmdi-lock material-icons-name'></i>
              </label>
              <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

          
            <div className='form-group form-button'>
              <input type="submit" name='signup' id="signup" className='form-submit' value="register" onClick={loginUser}/>
            </div>

          </form>
        </div>
      </div>
      </div>
    </section>
   </>
  )
}

export default Login
