import { Link } from 'react-router-dom'
import Logo from './../img/lirilLogo.png'

function BasicExample() {

  return (
    <>
        <div className="welcome">
            <div className="container">
                <p style={{textAlign:"center", color:"#f1f1f1", marginTop:"0px", marginBottom:"0px"}}>Welcome to Swati Liril Bansal & Company</p>
            </div>
         </div>


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid container">
    <Link class="navbar-brand" to='/'><img src={Logo} width="40%" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"><strong>Home</strong></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about"><strong>About Us</strong></Link>
        </li>
        <li class="nav-item dropdown">
          <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <strong>Services</strong>
          </span>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/auditAssurance">Audit & Assurance</Link></li>
            <li><Link class="dropdown-item" to="/directTaxation">Direct Taxation</Link></li>
            <li><Link class="dropdown-item" to="/indirectTaxation">Indirect Taxation</Link></li>
            <li><Link class="dropdown-item" to="/corporate-project-finance">Corporate & Project Finance</Link></li>
            <li><Link class="dropdown-item" to="/accounting">Accounting & Other Services</Link></li>
            <li><Link class="dropdown-item" to="/constitution">Constitution Of a Business</Link></li>

          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/industries"><strong>Industries</strong></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact"><strong>Contact Us</strong></Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  );
}

export default BasicExample;