import React from 'react'
import Audit from '../../../../img/auditSit.jpg'
import Direct from '../../../../img/directTaxation.jpg'
import Indirect from '../../../../img/indirectTax.jpg'
import Corporate from '../../../../img/corporate.jpg'
import Accounting from '../../../../img/accounting.jpg'
import Constitution from '../../../../img/constitution.jpg'
import {Link} from 'react-router-dom';

const more = () => {
  return (
    <div>
       <div className="container">

        <div className="moreSer">
            
                <div className="one">
                  <Link to='/auditAssurance'>
                  <img src={Audit} width="100%" alt="" />
                  <p><strong>Audit & Assurance</strong></p>
                  </Link>
                </div>    
             

           
                <div className="two one">
                  <Link to='/directTaxation'>
                    <img src={Direct} width="100%" alt="" />
                    <p><strong>Direct Taxation</strong></p>
                  </Link>
                 </div>
           
          

          
            <div className="three one">
             <Link to='/indirectTaxation'>
                <img src={Indirect} width="100%" alt="" />
                <p><strong>Indirect Taxation</strong></p>
             </Link>
            </div>
         
          

          
            <div className="four one">
             <Link to='/corporate-project-finance'>
                <img src={Corporate} width="100%" alt="" />
                <p><strong>Corporate & Project Finance</strong></p>
             </Link>
            </div>
           
           

        
            <div className="five one">
             <Link to='/accounting'>
                <img src={Accounting} width="100%" alt="" />
                <p><strong>Accounting & Other Services</strong></p>
             </Link>
            </div>
           

           
            <div className="six one">
             <Link to='/constitution'>
                <img src={Constitution} width="100%" alt="" />
                <p><strong>Constitution of a business</strong></p>
             </Link>
            </div>
          
         </div>
       </div>
    </div>
  )
}

export default more
