import React from 'react'

const indirectTaxation = () => {
  return (
    <>
    <div className="audit-page">
        <section className="audit-cover indirect-tax">
           <div className="container">
              <div className="audit-cover-para">
                <h1 style={{color: "#f1f1f1", fontSize: "42px"}}>INDIRECT TAXATION</h1>
              </div>
           </div>
        </section>


        


        <section className="audit-page-content container" style={{marginBottom: "40px"}}>
             <p>Over the business objective from an accounting and financial perspective, we believe in the completeness and accuracy of information contained in a company’s financial statements. We offer sector-wise in-depth analysis of financials surrounding the business environment. Our audit philosophy is based on integrity, objectivity, independence and strict adherence to all professional standards, regulations and laws.</p>
             <div className="serv">
               <div className='inclu1'>
               <p><strong>Our GST compliance services include:</strong></p>
                  <p>&#x2022; GST Return filing related compliances</p>
                  <p>&#x2022; Invoicing related Compliances services</p>
                  <p>&#x2022; E-way bill compliances services</p>
                  <p>&#x2022; GST Registration / de-registration related Compliances Services</p>
                  <p>&#x2022; Other compliance services like Letter of undertaking (LUT), input tax credit matching etc.</p>
                  <p><strong>Other GST related services include:</strong></p>
                  <p>&#x2022; Advise on interpretation of provisions under GST law</p>
                  <p>&#x2022; Advise on Classification of goods/services & their effective rate </p>
                  <p>&#x2022; Assistance in GST Refund related Services in case of export of goods and services, supplies to SEZs, excess payment of taxes due to mistakes, refund of accumulated ITC etc.</p>
                  <p>&#x2022; Support in Representation and Litigation/Assessment matters </p>
                  <p>&#x2022; Assistance in GST Audit/Assessment by Department</p>
               </div>
               {/* <div className='inclu2'>
                  <img src={indirect} alt="" />
               </div> */}
             </div>
          </section>
    </div> 
  </>
  )
}

export default indirectTaxation
