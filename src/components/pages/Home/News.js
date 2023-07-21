import React from 'react';
import News1 from '../../../img/news1.jpg';
import News2 from '../../../img/news2.jpg';
import News3 from '../../../img/news3.jpg';
import '../../../App.css'
import './home.css'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
      <section className="news-article">
        <div className="container">
          <h1 style={{textAlign:"center",marginBottom:"20px"}}>News And Articles</h1>
            <div className="news-content">
                <div className="new-cont1">
                   <img src={News1} alt="" />
                   <h2>Latest amendment in Indirect taxes</h2>
                   <p>Attention is invited to sub-section (3) of section 54 of CGST Act, 2017, which provides for the refund of unutilized input tax credit in cases where credit is accumulated on account of....</p>
                   <Link to='/news1'><button className="btn read-more" style={{padding: "8px 27px"}}>Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
                </div>
                <div className="new-cont2">
                   <img src={News2} alt="" />
                   <h2>Latest amendment in Direct taxes</h2>
                   <p>Clause (2)(b) prevents loss on the trading of crypto assets from being set off against income under "any other provision of the IT act. As per the amendment....</p>
                   <Link to='/news2'><button className="btn read-more" style={{padding: "8px 27px"}}>Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
                </div>
                <div className="new-cont3">
                   <img src={News3} alt="" />
                   <h2>Latest amendment as per MCA</h2>
                   <p>Amendment to Schedule III to the Companies Act, 2013 vide MCA Notification GSR. 207(E) dated 24th March 2021 mandates companies to round off....</p>
                   <Link to='/news3'><button className="btn read-more" style={{padding: "8px 27px"}}>Read More<span className="btnSpan" style={{marginLeft: "10px"}}><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button></Link>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default News
