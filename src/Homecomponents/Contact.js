import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'


function Contact() {
	
    const [userData,setUserData]=useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        }
    );

    let name,value;
    const postUserData=(event)=>
    {
      name=event.target.name;
      value=event.target.value;
      setUserData({...userData,[name]:value});
    };

    // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName,lastName,email,phone,message } = userData;

    if (firstName && lastName && phone && email && message) {
      const res = fetch(
        "https://reactfirebasewebsite-ca7a9-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,lastName,email,phone,message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill all the data");
    }
  };


	
  return (
    <>
    <Header></Header>
    <div className="container1">
		<div className="contact-box1">
			<div className="left1"></div>
			<div className="right1">
				<h2 id="h21">Contact Us</h2>
				<input type="text" className="field1" placeholder="Enter Your First Name" id="" name="firstName" value={userData.firstName} onChange={postUserData}/>
        <input type="text" className="field1" placeholder="Enter Your Last Name" id="" name="lastName" value={userData.lastName} onChange={postUserData}/>
				<input type="text" className="field1" placeholder="Enter Your Email" id="" name="email" value={userData.email} onChange={postUserData}/>
				<input type="text" className="field1" placeholder="Enter your Phone" id="" name="phone" value={userData.phone} onChange={postUserData}/>
				<input type="text" className="field1" placeholder="Enter your Message" id="" name="message" value={userData.message} onChange={postUserData}></input>
        <div class="form-check form-checkbox-style">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"></input>
          <label class="form-check-label" className='main-hero-para'>I agree that the Sano team may contact me at the email address or phone number I provide above </label>

        </div>
				<button className="btn1" type='submit' onClick={submitData}>Send</button>
			</div>
		</div>
	</div>
    <Footer></Footer>
    </>
    
  )
}

export default Contact
