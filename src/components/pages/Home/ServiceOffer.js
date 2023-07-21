import React, { useState } from 'react';
import Ser1 from '../../../img/ser1.png';
import Ser2 from '../../../img/ser2.png';
import Ser3 from '../../../img/ser3.png';
import '../../../App.css'
import './home.css';
import { Link } from 'react-router-dom'

const ServiceOffer = () => {
  const [hide] = useState(window.innerWidth > 1024)

  return (
    <>
      <section className="serviceOffer">
        <div className="container">
            <div className="serviceOffer-content">
              
                <h1>Services We Offer</h1>
                <Link to='/more-services'><button className="btn view-all">View All<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
            </div>
            <p>We are committed to building, creating and sustaining everlasting relationships which are drawn through our experience and expertise</p>

        </div>
        
        <div className="service-offer1">  
            <div className="container">
                <div className="service-offer">
                    <div className="service-offer-cont">
                       <img src={Ser1} alt="" />
                    </div>
                    <div className="service-offer-cont service-offer-cont1">
                        <h2>Audit & Assurance</h2>
                        <p>Over the business objective from an accounting and financial perspective, we believe in the completeness and accuracy of information contained in a company’s financial statements....</p>
                        <Link to="/auditAssurance"><button className="btn read-more">Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
                    </div>
                </div>
            </div>
        </div>
       
        {
           hide ? 
           <div className="serviceoffer2">
            <div className="seroffer1" width="100%">
              <div className="container1">
                  <div className="serv1">
                      <img src={Ser2} alt="" />
                      <h2 className='text-center' style={{marginTop: "40px"}}>Direct Tax</h2>
                      <p>Besides handling all procedural matters relating to filing of returns and representation before tax authorities at all levels, we have been advising our clients ....</p>
                      <Link to="/directTaxation"><button className="btn read-more">Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
                  </div>
              </div>
            </div>
            <div className="seroffer2">
              <div className="container1">
                  <div className="serv1">
                      <img src={Ser3} alt="" />
                      <h2 className='text-center' style={{marginTop: "40px"}}>Indirect Tax</h2>
                      <p>Preparation and filing of Income-tax returns and Advising on the issues relating to Service tax and Wealth-tax returns of resident and non-resident .... </p>
                      <Link to="/indirectTaxation"><button className="btn read-more">Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
                  </div>
              </div>
           </div>
         </div>:
          <>
              <div className="seroffer1" width="100%">
                <div className="container">
                    <div className="serv1">
                        <img src={Ser2} alt="" />
                        <h2 className='text-center'>Direct Tax</h2>
                        <p>Besides handling all procedural matters relating to filing of returns and representation before tax authorities at all levels ....</p>
                        <button className="btn read-more" style={{display: "block!important;"}}>Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
                    </div>
                </div>
              </div>
              <div className="seroffer2">
                <div className="container">
                    <div className="serv1">
                        <img src={Ser3} alt="" />
                        <h2 className='text-center'>Indirect Tax</h2>
                        <p>Preparation and filing of Income-tax returns and Advising on the issues relating to Service tax and Wealth-tax returns of resident and non-resident..... </p>
                        <button className="btn read-more" style={{display: "block!important;"}}>Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
                    </div>
                </div>
            </div>
          </>
            
        }

      </section> 

      <section className="quote">
        <div className="container">
            <p style={{marginTop:"0px",letterSpacing:"2px",textAlign:"center"}}><strong>Swati Liril Bansal & Company is one of the leading firms of Chartered Accountants.<br/>We believe in providing contented and committed services to create long term relationship with clients, people & society.</strong></p>
        </div>
      </section>
    </>
  )
}

export default ServiceOffer
