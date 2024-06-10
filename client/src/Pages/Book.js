import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout"
import Navbar from '../Components/nav';
import '../Pages/Book.css'

function Book() {

  const [product, setProduct] = useState({
    name: "React from FB",
    // price: 5,
    productBy: "facebook"
  })


  const makePayment = token => {
    const body = {
      token, 
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch('http://localhost:3002/Payment', {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log ("RESPONSE", response)
      const {status} = response;
      console.log("STATUS", status)
    })
    .catch(error => console.log(error));
  };

  return (
    <div>
        <Navbar/>
        <div className='book-full'>
    
          <form className='Book' >

            <div className='book-text'>
              <h1>Book Appointment</h1><br/>
              <label>Beautician's Name</label>
              <input type='Text' placeholder='Enter your name' ></input><br/><br/>

              <label>Customer's Name</label>
              <input type='Text' placeholder='Enter your name' ></input><br/><br/>

              <label>Package</label>
              <input type='Text' placeholder='Enter your package' ></input><br/><br/>

              <label>Date</label>
              <input type='Date' placeholder='Enter your date' ></input><br/><br/>

              <label>Time</label>
              <input type='Time' placeholder='Enter your time' ></input><br/><br/>
              

              {/* <a href='/Payment'><button className='btn6'>Confirm</button><br/><br/></a> */}
              
              </div>
            </form>
            <StripeCheckout stripeKey="pk_test_51PIkTWSIoegrYwWKgjBItRKTZ66PBSYHCM66JdmdDjLN8Zy7t5d2oIskmaqIcDjJCgtHKXq7cQjNOX5WbsV5utdN00aYcFkp6G"
                token={makePayment}
                name='Payment' 
                currency='LKR'
                // amount={product.price * 100}
                // billingAddress
                > 
            <div className='stripe'>
                {/* <button className='btn-large pink'  style={{borderRadius:'15px',backgroundColor:'pink',marginRight: '200px', width: '140px', height: '53px'}}>Pay {product.price} LKR</button> */}
                <button className='btn-large pink'  style={{borderRadius:'10px',backgroundColor:'pink',marginRight: '200px', width: '140px', height: '53px'}}>Payment</button>
            </div>
            </StripeCheckout>  

          </div>
      
    </div>
  )
}

export default Book
