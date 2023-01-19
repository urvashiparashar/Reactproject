import React ,{useEffect}from 'react'
import {useNavigate} from "react-router-dom"

const About = () => {

  const navigate=useNavigate();

  const callAboutPage=async()=>
  {
      try 
      {
        const res=await fetch('/about',
        {
          method:"GET",
          headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
          },
          credentials:"include" 
        });

        const data=await res.json();
        console.log(data);
        if(!res.status===200)
        {
          const error=new Error(res.error);
          throw error;
        }

      }
      catch(err)
      {
         console.log(err);
         navigate("/");
      }

  }
  useEffect(()=>
  {
    callAboutPage();
  }, []);
  return (
    <>
    <div className='container emp-profile'>
      <form method=''>
        <div className='row'>
          <div className='col-md-6'>
            <div className='profile-head'>
              <h5>vinod thapa</h5>
              <h6>Web developer</h6>
              <p className='profile-rating mt-3 mb-5'>
                Rankings<span>1/10</span>
              </p>
              <ul className='nav nav-tabs'>
                <li className='nav-item'>
                  <a className='nav-link active' href='#home' id="home-tab" data-toggle="tab" role="tab">About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link active' href='#profile' id="profile-tab" data-toggle="tab" role="tab">Timeline</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className='col-md-2'>
            <input type="submit" className='profile-edit-btn' name='btn' value="Edit profile"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='profile-work'>
              
            </div>
          </div>
          <div className='col-md-8 pl-5 about-info'>
            <div className='tab-content profile-tab' id="myTabContent">
              <div className='tab-pane fade show active' id="home" role="tabpanel" aria-aria-labelledby='home-tab'>
                <div className='row'>
                  <div className='col-md-6'>
                    <label>User Id</label>
                  </div>
                  <div className='col-md-6'>
                    <label>7457618191981</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <label>Name</label>
                  </div>
                  <div className='col-md-6'>
                    <label>vinod thapa</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <label>email</label>
                  </div>
                  <div className='col-md-6'>
                    <label>vinodthapa@gmail.com</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <label>Phone</label>
                  </div>
                  <div className='col-md-6'>
                    <label>8911919911</label>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6'>
                    <label>Profession</label>
                  </div>
                  <div className='col-md-6'>
                    <label>web developer</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default About
