import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
  return (
    <>
    <Header/>
    <section id="aboutus" className="d-flex align-items-center">
        <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
            <h1 style={{margintop: '78px'}}>About Us</h1>
            <h2><b>SANO aims to help people going through mental distress.<br/>Our vision is to create a safe space for people to express themselves and support one another to improve mental well-being.<br/>
                
                We are here for you.</b></h2>
        </div>
    </section>
    
    <section id="services" className="services section-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="section-title" data-aos="fade-right">
                        <h2>How we help</h2>
                        <p>As a group, we can create a safe and supportive environment where people can be themselves.</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4><a href="">Mental Health Assesment</a></h4>
                                <p>Take a test to assess what you are going through and how you are doing.</p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-chat"></i></div>
                                <h4><a href="">Forums for discussion</a></h4>
                                <p>Join the discussion forums anonymously to seek prespective, support and guidance from people going through similar crisis. </p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4><a href="">Professional Support</a></h4>
                                <p>Connect with Doctors, Therapists and experts to get professional counselling.</p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex align-items-stretch mt-4">
                            <div className="icon-box" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4><a href="">Blogs and Resources</a></h4>
                                <p> Explore a variety of articles and activities to help you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
    <Footer/>
    </>
    

  )
}

export default About
