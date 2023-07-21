import React from 'react'
import '../App.css';
import {Link} from "react-router-dom";
import Logo from '../img/lirilLogo.png'


const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="firstFooter">
            <Link style={{textDecoration:"none"}} to="/"><span style={{color:"#f1f1f1"}}>Home</span></Link><br/>
            <Link style={{textDecoration:"none"}} to="/about"><span style={{color:"#f1f1f1"}}>About Us</span></Link><br/>
            <Link style={{textDecoration:"none"}} to="/more-services"><span style={{color:"#f1f1f1"}}>Services</span></Link><br/>
            <Link style={{textDecoration:"none"}} to="/industries"><span style={{color:"#f1f1f1"}}>Industries</span></Link><br/>
            <Link style={{textDecoration:"none"}} to="/contact"><span style={{color:"#f1f1f1"}}>Contact Us</span></Link>
          </div>
          <div className="secondFooter">
            <Link to='/directTaxation' style={{color: "#f1f1f1"}}><p style={{marginBottom: "0px"}}>Direct</p></Link>
            <Link to='/indirectTaxation' style={{color: "#f1f1f1"}}><p style={{marginBottom: "0px"}}>Indirect</p></Link>
            <Link to='/auditAssurance' style={{color: "#f1f1f1"}}><p style={{marginBottom: "0px"}}>Audit & Assurance</p></Link>
            <Link to='/more-services'><p><span style={{color:"rgb(20 238 252)"}} className='servic-more'><strong>More Services...</strong></span></p></Link>
          </div>
          <div className="thirdFooter">
            <img src={Logo} width="100%" alt="" />
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </div>
          <div className="fouthFooter">
            <p style={{textAlign: "left"}}>DDA Market, Office No. 2, First Floor, CSC1, Patparganj,</p>
            <p>Delhi-110092</p>
            <p style={{textAlign: "left"}}><strong>Email:</strong> info@slbco.in, liril@slbco.in</p>
            <span className='forthP'><strong>Phone:</strong> 9958724000, 9560593356, 011 45118521</span>
          </div>
        </div>
      </div> 
    </div>
    <div className="cpy" style={{background:"#0f736cf7", color:"#f1f1f1"}}>
     <div className="container">
     
        <p style={{textAlign: "center",marginTop: "0px",marginBottom: "0px"}}>Copyright @ Swati Liril Bansal & Company</p>
      </div>
    </div>
    </>
  )
}

export default Footer
