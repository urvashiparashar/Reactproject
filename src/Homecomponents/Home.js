import React from 'react'

function Home() {
  return (
    <>
    {/*<!-- ======= Hero Section ======= -->*/}
    <section id="hero" className="d-flex align-items-center">
    <div className="container text-center position-relative" data-aos="fade-in" data-aos-delay="200">
      <h1>Mental Health matters </h1>
      <h2>And we are here to help you</h2>
      {/* <a href="#main" className="glow-on-hover">Get Started</a> */}
    </div>
  </section>
  {/* <!-- End Hero --> */}

  <main id="main">
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
  {/* <!-- End Featured Services Section --> */}

  {/* <!-- Start Cards Section--> */}
  <div id="card_row">
  <div id="card_col">
<div className="card">
  <div className="inner-box">
    <div className="card-front">
      <span id="card1">Feeling stressed?</span>
    </div>
    <div className="card-back">
      <p id="p1">Peer support with self care tools</p>
    </div>
  </div>
</div>
</div>
<div id="card_col">
  <div className="card">
    <div className="inner-box">
      <div className="card-front" id="gif2">
        <span id="card1" style={{color: 'rgb(19, 18, 18)'}}>Mind Recovery</span>
      </div>
      <div className="card-back">
        <p id="p1">For parents and caregivers</p>
      </div>
    </div>
  </div>
  </div>

<div id="card_col">
  <div className="card">
    <div className="inner-box">
      <div className="card-front" id="gif3">
        <span id="card1-3">Behavioral disorders?</span>
      </div>
      <div className="card-back">
        <p id="p1">For educators</p>
      </div>
    </div>
  </div>
</div>

<div id="card_col">
  <div className="card">
    <div className="inner-box">
      <div className="card-front" id="gif4">
        <span id="card1">Get Immediate help</span>
      </div>
      <div className="card-back">
        <p id="p1">For employees and workman</p>
      </div>
    </div>
  </div>
</div>
</div>
  {/* <!--End Card section--> */}


    {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container">
        <div className="row content">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <h2>Featured Resources!!</h2>
            <h3>If you have, or believe you may have, a mental health problem, it is helpful to talk about these issues with others. Learn more about building a strong support system and developing a recovery plan. </h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <p>
              If you or someone you know has a mental health problem, there are ways to get help. Studies show that most people with mental health problems get better and many recover completely.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Get Immediate help</li>
              <li><i className="ri-check-double-line"></i> Make meaningful contributions to their communities</li>
              <li><i className="ri-check-double-line"></i> Cope with the stresses of life</li>
            </ul>
            <p className="font-italic">
              Let's work collectively and help others for mental peace and wellbeing.
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

    

    {/* <!-- ======= Why Us Section ======= --> */}
    <section id="why-us" className="why-us ">
      <div className="container">

        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch" data-aos="fade-right " id="whyusbox">
            <div className="content">
              <h3>The Mental Health Myths and Facts</h3>
              <p>Can you tell the difference between a mental health myth and fact? Learn the truth about the most common mental health myths. </p>
              <div className="text-center">
                <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch" id="box1">
            <div className="icon-boxes d-flex flex-column justify-content-center" id="box2">
              <div className="row" id="row1-1">
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" id="row1-2">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-receipt"></i>
                    <h4>Children don't experience mental health problems.</h4>
                    <p><span style={{textDecoration: 'underline'}}><b>Fact: </b></span>Studies say that mental health problems are often clinically diagnosable, and can be a product of the interaction of biological, psychological, and social factors.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200" id="row1-3">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-cube-alt"></i>
                    <h4>People with mental health problems are violent.</h4>
                    <p><span style={{textDecoration: 'underline'}}><b>Fact: </b></span>The vast majority of people with mental illness are not violent and only 3%–5% of violent acts can be attributed to individuals living with a serious mental illness.</p>
                  </div>
                </div>
                <div className="col-xl-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300" id="row1-4">
                  <div className="icon-box mt-4 mt-xl-0">
                    <i className="bx bx-images"></i>
                    <h4>I can't do anything for a person with a mental health problem.</h4>
                    <p><span style={{textDecoration: 'underline'}}><b>Fact: </b></span>In 2020, only 20% of adults received any mental health treatment in the past year, which included 10% who received counseling or therapy from a professional.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End .content--> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End Why Us Section --> */}

    {/* <!-- ======= Cta Section ======= --> */}
    <section id="cta" className="cta">
      <div className="container">

        <div className="text-center" data-aos="zoom-in">
          <h3>GET HELP</h3>
          <p>  The Lifeline provides 24/7, free and confidential support for people in
            distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.
          </p>
          <a className="cta-btn" href="#">91+ 1100888555</a>
        </div>

      </div>
    </section>
    {/* <!-- End Cta Section --> */}
  </main>

</>

  );
}

export default Home
