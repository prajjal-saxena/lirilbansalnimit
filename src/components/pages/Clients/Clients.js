import React from 'react'
import Steel from '../../../img/steel.png'
import Estate from '../../../img/infrastructure.png'
import It from '../../../img/technical-support.png'
import Hospital from '../../../img/hospital.png'
import Textile from '../../../img/textile.png'
import Manufacture from '../../../img/manufacture.png'
import Financial from '../../../img/stock.png'
import Oil from '../../../img/chemical.png'
import Health from '../../../img/healthcare.png'
import Jeweler from '../../../img/jeweler.png'
import '../../../App.css'


const Clients = () => {
  return (
    <>
      <div className="industries">
         <div className="ind">
            <div className="container">
               <h1>Industries</h1>
            </div>
         </div>
         <div className="container">
            <div className="ind-content">
               <div className='indusImg'><img src={Steel} alt="" /><p>Steel</p></div>
               <div className='indusImg'><img src={Estate} alt="" /><p>Real Estate/ Infrastructure</p></div>
               <div className='indusImg'><img src={It} alt="" /><p>Information Technology</p></div>
               <div className='indusImg'><img src={Hospital} alt="" /><p>Hospitality</p></div>
               <div className='indusImg'><img src={Textile} alt="" /><p>Textiles</p></div>
               <div className='indusImg'><img src={Manufacture} alt="" /><p>Manufacturing</p></div>
               <div className='indusImg'><img src={Financial} alt="" /><p>Financial Sector</p></div>
               <div className='indusImg'><img src={Oil} alt="" /><p>Oil/ Chemicals</p></div>
               <div className='indusImg'><img src={Health} alt="" /><p>Healthcare</p></div>
               
            </div>
            <div className="ind-content ind-content1">
               <div className='indusImg ind1'><img src={Jeweler} alt="" /><p>Jewelers</p></div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Clients
