import React from 'react'
import Profile from './Beauticians';
import Navbar from '../Components/nav';
import '../Pages/Ourservices.css';
import Footer from '../Components/Footer';

function Ourservices() {
  return (
    <div className='content'>
        <Navbar/>
        <h1 style={{fontSize:'60px',textAlign:'center',fontWeight:'bold',marginTop:'20px'}}>Our Services</h1><br/>
        <p style={{fontSize:'30px',textAlign:'center'}}>Beauticians provide a range of beauty services that <br/>
          include face scrubs, bridal makeup, hair cutting and <br/>
          anti-stress massages. They perform skin analysis and <br/>
          advise customers about their skin, hair and body. <br/>
          They also perform facials, waxing and pedicure. </p>

        <a href='/packages'><img src="https://freeonlinedeal.files.wordpress.com/2015/06/parlour-services.jpg" alt="Beauty Parlour and Salon Visits" style={{marginLeft:'700px',marginTop:'20px',borderRadius:'20px'}}/></a><br/>
        <Footer/>
      
    </div>
  )
}

export default Ourservices
