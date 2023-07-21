import React from 'react';
import '../../../App.css'
import './home.css';
import ServiceOffer from './ServiceOffer';
import News from './News';

const Home = () => {
  return (
    <>
    <div className='cover-img'>
      <div className="container">
        <div className="cover-content">
           <h1 style={{color:"#f1f1f1"}}>Innovation. Integrity. <span style={{color:"#089F93"}}>Performance.</span></h1>
        </div>
      </div>
    </div>

    <ServiceOffer/>
    <News/>
    </>
  )
}

export default Home
