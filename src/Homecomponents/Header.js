import React from 'react'

export default function Header() {
  return (
    
  //   <header id="header" className="fixed-top d-flex align-items-center ">
  //   <div className="container">
  //     <div className="header-container d-flex align-items-center justify-content-between">
  //       <div className="logo">
  //         <h1 className="text-light" style={{color: '#000'}}><span>SANO</span></h1>
  //       </div>

  //       </div>
  //   </div>
  // </header>
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container">
      <div className="header-container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1 className="text-light" style={{color: '#000'}}><a href="index.html"><span>SANO</span></a></h1>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto " href="index.html">Home</a></li>
            <li><a className="nav-link scrollto active" href="AboutUs.html">About</a></li>
            <li><a className="nav-link scrollto" href="cards.html">Guide</a></li>
            
            <li><a className="nav-link scrollto" href="registration1.html">Contact</a></li>

          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </div>
  </header>
    
  );
}
