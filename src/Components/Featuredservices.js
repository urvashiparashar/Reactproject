import React from 'react'

function Featuredservices() {
  return (
    <section id="featured-services" className="featured-services section-bg">
    <div className="container">

      <div className="row no-gutters">
        <div className="col-lg-4 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="fa-sharp fa-solid fa-key"></i></div>
            <h4 className="title"><a href="">What is Mental Health?</a></h4>
            <p className="description">Learn about mental health as a piece of overall wellness and the early warning signs of mental health problems.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="fa-solid fa-circle-nodes"></i></div>
            <h4 className="title"><a href="">Myths and Facts</a></h4>
            <p className="description">Know the facts, use your knowledge to educate others, and reach out to those who may have mental health problems.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="fa-solid fa-seedling"></i></div>
            <h4 className="title"><a href="">Recovery is possible</a></h4>
            <p className="description">Treatment and recovery are ongoing processes that happen over time. The first step is getting help.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Featuredservices
