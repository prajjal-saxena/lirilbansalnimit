import React from 'react'
import './service.css';
// import Serv from '../../../img/auditSit.jpg'

const auditAssurance = () => {
  return (
    <>
      <div className="audit-page">
          <section className="audit-cover">
             <div className="container">
                <div className="audit-cover-para">
                  <h1 style={{color: "#f1f1f1", fontSize: "42px"}}>AUDIT & ASSURANCE</h1>
                </div>
             </div>
          </section>
          <section className="audit-page-content container" style={{marginBottom: "40px"}}>
             <p>Over the business objective from an accounting and financial perspective, we believe in the completeness and accuracy of information contained in a company’s financial statements. We offer sector-wise in-depth analysis of financials surrounding the business environment. Our audit philosophy is based on integrity, objectivity, independence and strict adherence to all professional standards, regulations and laws.</p>
             <div className="serv">
               <div className='inclu1'>
                  <p><strong>Our Services includes:</strong></p>
                  <p>&#x2022; Statutory Audit in compliance with the Company’s Act and various laws.</p>
                  <p>&#x2022; Tax Audit as per the provisions of Income-Tax Act.</p>
                  <p>&#x2022; Internal & Management Audit</p>
                  <p>&#x2022; Special Audits</p>
                  <p>&#x2022; Stock Audit</p>
                  <p>&#x2022; Agreed Upon Procedures</p>
                  <p>&#x2022; Certification Services of various financial information</p>
                  <p>&#x2022; Preparation of SOPs</p>
               </div>
               {/* <div className='inclu2'>
                  <img src={Serv} alt="" />
               </div> */}
             </div>
          </section>
      </div> 
    </>
  )
}

export default auditAssurance
