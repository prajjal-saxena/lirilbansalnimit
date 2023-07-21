import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
// import Services from './components/pages/Services/Services';

import AuditAssurance from './components/pages/Services/auditAssurance';
import DirectTaxation from './components/pages/Services/directTaxation';
import IndirectTaxation from './components/pages/Services/indirectTaxation';
import Accounting from './components/pages/Services/accounting';
import Constitution from './components/pages/Services/constitution';
import Registration from './components/pages/Services/registration';

import Clients from './components/pages/Clients/Clients';
import Contact from './components/pages/Contact/Contact';
import News1 from './components/pages/Home/News/news1'
import News2 from './components/pages/Home/News/news2'
import News3 from './components/pages/Home/News/news3'
import MoreService from './components/pages/Services/MoreServices/more'


const App = () =>{
  return (
    <>
      <div className="App">
         <BrowserRouter>
            <Navbar/>
            <Routes>
               <Route exact path='/' element={<Home/>}/>
               <Route exact path='/about' element={<About/>}/>
                    <Route exact path='/auditAssurance' element={<AuditAssurance/>}/>
                    <Route exact path='/directTaxation' element={<DirectTaxation/>}/>
                    <Route exact path= '/indirectTaxation' element={<IndirectTaxation/>}/>
                    <Route exact path='/accounting' element={<Accounting/>}/>
                    <Route exact path='/constitution' element={<Constitution/>}/>
                    <Route exact path='/corporate-project-finance' element={<Registration/>}/>
               <Route exact path='/industries' element={<Clients/>}/>
                  <Route exact path='/news1' element={<News1/>}/>
                  <Route exact path='/news2' element={<News2/>}/>
                  <Route exact path='/news3' element={<News3/>}/>
               <Route exact path='/contact' element={<Contact/>}/>
               <Route exact path='/more-services' element={<MoreService/>}/>
            </Routes>
            <Footer/>
         </BrowserRouter>
      </div>
    </>
  )
}

export default App;
