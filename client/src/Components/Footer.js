import React from 'react'
// import image from '../Components/Gorgeous Queen.png';
import image from '../Components/Gorgeous_Queen_2_-removebg-preview.png';
import "./Footer.css";

function Footer() {
  return (
    <div>
        <footer class="bg-body-tertiary text-center text-lg-start" style={{marginTop:'60px'}}>
  <div class="container p-4">
    <div class="row" style={{display:'flex',justifyContent:'space-between'}}>
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">

        <ul class="list-unstyled mb-0">
          <li>
            <a href="/" class="text-body">
            <img class="img3" src={image} /></a>
            </li>
        </ul>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase">Quick Links</h5>

        <ul class="list-unstyled" style={{marginTop:'30px'}}>
          <li>
            <a href="/" class="text-body">Home</a>
          </li>
          <li>
            <a href="/Services" class="text-body">Our services</a>
          </li>
          <li>
            <a href="/Profile" class="text-body">Beauticians</a>
          </li>
          <li>
            <a href="/Contact" class="text-body">Contact Us</a>
          </li>
        </ul>
      </div>&nbsp;&nbsp;&nbsp;

      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Contact Us</h5>

        <ul class="list-unstyled mb-0" style={{marginTop:'30px'}}>
          <li>
            <a href="#!" class="text-body">E-mail: gorgeousqueen@gmail.com</a>
          </li>
          <li>
            <a href="#!" class="text-body">Telephone No: +94 76 653 8473</a>
          </li>

        </ul>
      </div>

      

    </div>
  </div>

  <div class="text-center p-3">
    © 2024 Copyright:
    <a class="text-body" href="/">Gorgeous Queen.com</a>
  </div>
</footer>
      
    </div>
  )
}

export default Footer
