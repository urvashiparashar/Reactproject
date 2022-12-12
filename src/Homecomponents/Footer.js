import React from 'react'

function Footer() {
  return (
    <footer id="footer">
        <div className="container d-md-flex py-2 last">

          <div className="me-md-auto text-center text-md-start">
            <div className="copyright pt-1">
              &copy; Copyright <strong><span>Mindcare</span></strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
  </footer>
  

  
  );
}

export default Footer
