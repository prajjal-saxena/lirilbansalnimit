import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';


const Contact = () => {
  return (
    <div className="all-contact">
   <div className='form-contactus container'>
       <div className='form'>
          <div className="container">
            <h1 style={{color: "#f1f1f1"}}>GET IN TOUCH</h1>
            <Form>
                <FormGroup>
                  <Input type="text" name="name" placeholder="Your Name" />
                </FormGroup>
                <FormGroup>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
                </FormGroup>
                <FormGroup>
                  <Input type="text" name="name" placeholder="Subject" />
                </FormGroup>
              
                <FormGroup>
                  <Input type="textarea" name="text" id="exampleText" placeholder='Your Query'/>
                </FormGroup>

                
                <Button>Submit</Button>
              </Form>
          </div>
       </div>
       <div className='address-map'>
          <div className="address"> 
              <div className="container">
                <div className="address-content">
                    <p style={{textAlign: "left!important", marginBottom: "6px"}}><strong style={{textAlign: "left!important", marginBottom: "6px"}}>DDA Market, Office No. 2, First Floor, CSC1, Patparganj, Delhi-110092</strong></p>
                    <span style={{textAlign: "left!important", marginBottom: "6px"}}><strong>Email:</strong> <b>info@slbco.in, liril@slbco.in</b></span><br/>
                    <span style={{textAlign: "left!important", marginBottom: "6px"}}><strong>Phone:</strong> <b>9958724000, 9560593356,<br/> 011-45118521</b></span>

                </div>
              </div>
          </div>
          <div className="map">
              <iframe title='myFrame' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3501.7749178093463!2d77.29744091432467!3d28.63650729065354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390cfb70e5769d2d%3A0x3a99739d3d661efe!2sJ7PX%2BJV2%20Liril%20Bansal%2C%20DDA%20Market%20Rd%2C%20I.P.Extension%2C%20Patparganj%2C%20Delhi%2C%20110092!3m2!1d28.6365026!2d77.2996296!5e0!3m2!1sen!2sin!4v1668060913909!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
       </div>
    </div>
    </div>

  )
}


export default Contact
