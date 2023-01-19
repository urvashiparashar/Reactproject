import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'
import axios from "axios"

const Signup = () => {
  const navigate = useNavigate();

  const [user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });

  let name,value;

  const handleInputs=(e)=>
  {
    console.log(e);
    name= e.target.name;
    value=e.target.value;

    setUser({...user,[name]:value});
  }

  const PostData=async (e)=>
  {
     e.preventDefault();

     const {name,email,phone,password,cpassword}= user;
     const res=await fetch('/register',{
      method:"POST",
      body: JSON.stringify({name,email,phone,password,cpassword}),
      headers:{
        "Content-Type":"application/json"
      }
      
     });
    

     const data=await res.json();

     if(res.status === 422 || !data)
     {
      window.alert("inavalid registration");
      console.log("invalid registration");
     }
     else
     {
      window.alert("successfull");
      console.log("successfull");

      navigate("/");
     }
  }
  return (
    <>
    <section className='signup'>
      <div className='container mt-5' >
        <div className='signup-content' >
          <h2 className='form-title'>Sign up</h2>
          <form className='register-form' id="register-form" method='POST'>
            <div className='form-group'>
              <label htmlFor='name'>
                <i className='zmdi zmdi-account material-icons-name'></i>
              </label>
              <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your name'/>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>
                <i className='zmdi zmdi-email material-icons-name'></i>
              </label>
              <input type="email" name="email" id="email" autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Your email'/>
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>
                <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
              </label>
              <input type="number" name="phone" id="phone" autoComplete='off' placeholder='Your Phone' value={user.phone} onChange={handleInputs}/>
            </div>
            
            <div className='form-group'>
              <label htmlFor='password'>
                <i className='zmdi zmdi-lock material-icons-name'></i>
              </label>
              <input type="password" name="password" id="password" autoComplete='off' placeholder='Your Password' value={user.password} onChange={handleInputs}/>
            </div>

            <div className='form-group'>
              <label htmlFor='cpassword'>
                <i className='zmdi zmdi-lock material-icons-name'></i>
              </label>
              <input type="password" name="cpassword" id="cpassword" autoComplete='off' placeholder='Confirm Your Password' value={user.cpassword} onChange={handleInputs}/>
            </div>

            

            <div className='form-group form-button'>
              <input type="submit" name='signup' id="signup" className='form-submit' value="register" onClick={PostData}/>
            </div>

            <div className='signup-image'> 
              <NavLink to="/login" className="signup-image-link">Already registered  </NavLink>        </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Signup
