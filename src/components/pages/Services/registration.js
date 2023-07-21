import React from 'react'
import './service.css';

const registration = () => {
  return (
    <>
    <div className="audit-page">
          <section className="audit-cover corporate-project">
             <div className="container">
                <div className="audit-cover-para">
                  <h1 style={{color: "#f1f1f1", fontSize: "42px"}}>Corporate & Project Finance</h1>
                </div>
             </div>
          </section>
          <section className="audit-page-content container" style={{marginBottom: "40px"}}>
             <div className="serv">
               <div className='inclu1'>
               <p>Our services include Syndicated lending/loans for various projects.</p>

                  <p><strong>Our Services includes:</strong></p>
                  <p>&#x2022; Preparing financial feasibility study for setting up of various project</p>
                  <p>&#x2022; Appraisal of Project </p>
                  <p>&#x2022; Preparation of the project report with optimal financial structuring.</p>
                  <p>&#x2022; Pooling of various credit facilities from Financial Institutions</p>
                  <p>&#x2022; Liasioning with various Financial Institutions </p>
                  <p>&#x2022;	Working Capital finance proposal (Fresh/Renew/Enhancement) of various clients with Banks </p>
                  <p>&#x2022;	State & Central Subsidies</p>
               </div>
               {/* <div className='inclu2'>
                  <img src={Regis} alt="" />
               </div> */}
             </div>
          </section>
      </div> 
  </>
  )
}

export default registration
