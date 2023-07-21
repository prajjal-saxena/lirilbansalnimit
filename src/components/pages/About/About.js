import React from 'react'
import '../../../App.css'
import Mission from '../../../img/mission.png';
import Vision from '../../../img/vision.png';

const About = () => {
  return (
    <>
      <div className="audit-page">
        <section className="audit-cover about-cover">
           <div className="container">
              <div className="audit-cover-para">
                <h1 style={{color: "#f1f1f1", fontSize: "42px"}}>ABOUT US</h1>
              </div>
           </div>
        </section>
        <section className="audit-page-content container" style={{marginBottom: "40px"}}>
            <p>Our firm ‘Swati Liril Bansal & Company’ established in year 2014 is a chartered accountancy firm operating from Delhi all over India. Our firm provides diversified professional services to its clients under single roof.</p>
            <p>With the experience of years & years, we facilitate our clients through our professional and reliable consultancy solutions that includes direct taxes, indirect taxes, company law matters, statutory audit, internal audit, corporate advisory and project financing etc.</p>
            <div className="abt-cover">
            <h1>Our Mission</h1>
               <div className='mission'>
                  <div className="mission-content">
                      <p>We are dedicated to provide highest quality of services to our clients. We strongly believe in meeting all the current and the future needs of our clients for long term success of clients.  </p>
                      <p>We work towards creating an open environment that encourages creative thinking that leads to innovative ideas and innovative ideas inspire change and change is essence of life that leads to way to success.</p>
                  </div>
                  <div className="mission-img">
                      <img src={Mission} alt="" />
                  </div>  
               </div>
               <div className='vision'>
                 <div className="vision-img">
                    <img src={Vision} alt="" />
                 </div>
                 <div className="vision-detail">
                    <h1>Our Vision</h1>
                    <p>Our vision is to be recognized as best CA firm all over India. We are working PAN India and would like to work outside India. To Develop a global recognition and we are committed to work hard towards this positive vision.</p>
                 </div>
               </div>
            </div>
        </section>
    </div>   
    </>
  )
}

export default About
