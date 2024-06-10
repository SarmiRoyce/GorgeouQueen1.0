import React, { useState } from 'react';
import Navbar from '../Components/nav';
import Footer from '../Components/Footer';
import '../Pages/Packages.css';

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleToggle = (packageName) => {
    if (selectedPackage === packageName) {
      setSelectedPackage(null);
    } else {
      setSelectedPackage(packageName);
    }
  };

  return (
    <div className='beauty'>
      <Navbar />
      <h1 style={{ marginTop: '30px', textAlign: 'center' }}>Beautician's Packages</h1><br />
      <div className='pack'>
        <div onClick={() => handleToggle('Hair Cutting')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://www.onlinedegree.com/wp-content/uploads/2017/02/beautician.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Hair Cutting</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Nail Art')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://media.istockphoto.com/id/1289189250/photo/fashionable-multicolored-manicure.jpg?s=612x612&w=0&k=20&c=2G0Zcpt4VvkLxdz77XH-IECSdM-pnReuREBzYobCSLs=" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Nail Art</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Manicure')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://www.bodycraft.co.in/wp-content/uploads/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Manicure</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Facial')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://edelweissspa.net/wp-content/uploads/2014/05/facial_banner1.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Facial</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Pedicure')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://www.makeuphairbeauty.com/shutterstock_178521473-scaled.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Pedicure</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Eyebrow Shape')} className='card' style={{ width: '18rem' ,height:'18rem'}}>
          <img src="https://s2.r29static.com/bin/entry/0b3/0,0,2000,2400/720x864,85/1694595/image.webp" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Eyebrow Shape</h5>
          </div>
        </div>&nbsp;&nbsp;<br/><br/>

        <div onClick={() => handleToggle('Hair Coloring')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://images.indianexpress.com/2021/08/GettyImages-hair-colours-1200.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Hair Coloring</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Normal Makeup')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://mlnbwqvavz70.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://adphotography.in/wp-content/uploads/2021/04/haldi_look_2.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Normal Makeup</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Bridal Makeup')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://miro.medium.com/v2/resize:fit:1282/0*wFv8pCa365VOMz34.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Bridal Makeup</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Hair Style')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://image-marketing.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/09/05215409/Best-Bridal-Hairstyles.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Hair Style</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Saree Draping')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://media.karousell.com/media/photos/products/2023/3/21/saree_prepleating_ironing__dra_1679404250_ec7b15f4_thumbnail.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '170px' }} />
          <div className="card-body">
            <h5 className="card-title">Saree Draping</h5>
          </div>
        </div>&nbsp;&nbsp;

        <div onClick={() => handleToggle('Nail Enhancements')} className='card' style={{ width: '18rem',height:'18rem' }}>
          <img src="https://naildesigns.com/wp-content/uploads/2020/02/manicure-master-make-nail-extension-gel-nail-extensions-ss-featured.jpg" className="card-img-top" alt="..." style={{ padding: '10px', width: '150px', height: '220px' }} />
          <div className="card-body">
            <h5 className="card-title">Nail Enhancements</h5>
          </div>
        </div>&nbsp;
      </div>

 
        {/* Render content based on selected package */}
        {selectedPackage === 'Hair Cutting' && (
          <div className='beautician'>
            {/* Content for Hair Cutting */}
            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      {/* <span class="fa fa-star checked" style={{color:'yellow'}}/>
                      <span class="fa fa-star checked" style={{color:'yellow'}} />
                      <span class="fa fa-star checked" style={{color:'yellow'}} />
                      <span class="fa fa-star checked" style={{color:'yellow'}} />
                      <span class="fa fa-star checked" style={{color:'yellow'}} /><br></br><br></br> */}
                      <a href="/showprofile"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQs3n0cXA3mFaVBC4OAxYO6a3xG_I_qR3ZRgnd6XMINJiJwZW4zsrMZQTuYYtG5dVKkw&usqp=CAU" 
                className="card-img-top" 
                alt="Anne" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Anne</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

          </div>
        )}
        {selectedPackage === 'Nail Art' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/showprofile"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}
                {selectedPackage === 'Manicure' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

          </div>
        )}
           {selectedPackage === 'Facial' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}
         {selectedPackage === 'Pedicure' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                {/* <span className="fa fa-star checked" style={{ color: 'yellow' }} />
                <span className="fa fa-star checked" style={{ color: 'yellow' }} />
                <span className="fa fa-star checked" style={{ color: 'yellow' }} />
                <span className="fa fa-star checked" style={{ color: 'yellow' }} />
                <span className="fa fa-star checked" style={{ color: 'yellow' }} /><br /><br /> */}
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}
         {selectedPackage === 'Eyebrow Shape' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}

{selectedPackage === 'Hair Coloring' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}

{selectedPackage === 'Normal Makeup' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQs3n0cXA3mFaVBC4OAxYO6a3xG_I_qR3ZRgnd6XMINJiJwZW4zsrMZQTuYYtG5dVKkw&usqp=CAU" 
                className="card-img-top" 
                alt="Anne" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Anne</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}

{selectedPackage === 'Bridal Makeup' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}

{selectedPackage === 'Hair Style' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQs3n0cXA3mFaVBC4OAxYO6a3xG_I_qR3ZRgnd6XMINJiJwZW4zsrMZQTuYYtG5dVKkw&usqp=CAU" 
                className="card-img-top" 
                alt="Anne" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Anne</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}

{selectedPackage === 'Saree Draping' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://img.freepik.com/premium-photo/beautician-with-female-client-parlor-gorgeous-bridal-makeup_94574-2254.jpg" 
                className="card-img-top" 
                alt="Ann Julie" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Ann Julie</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}

{selectedPackage === 'Nail Exhancements' && (
          <div className='beautician'>
            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://saloninsrilanka.weebly.com/uploads/1/1/3/0/113028645/kk_1_orig.jpg" 
                className="card-img-top" 
                alt="Diya" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Diya</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem'}}>
              <img 
                src="https://cdn0.weddingwire.in/vendor/3378/3_2/960/jpg/bridal-makeup-nivedita-kulkarni-makeup-artist-beautician-bridal-makeup7_15_293378-160793696530456.jpeg" 
                className="card-img-top" 
                alt="Keerthana" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Suja</h5>
                <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div className="card" style={{ width: '18rem' }}>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQs3n0cXA3mFaVBC4OAxYO6a3xG_I_qR3ZRgnd6XMINJiJwZW4zsrMZQTuYYtG5dVKkw&usqp=CAU" 
                className="card-img-top" 
                alt="Anne" 
                style={{ padding: '10px', width: '285px', height: '220px' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Anne</h5>
                <a href="/showprofile"><button className='btn12'>View Profile</button></a>
              </div>
            </div><br />

            <div class="card" style={{width: '18rem'}}>
                    <img src="https://i.pinimg.com/736x/16/93/61/16936135a6fc4b080ccc22ecc39a7280.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Meenakshi</h5> 
                      <a href="/Profilebeauty"><button className='btn12'>View Profile</button></a>
                    </div>
            </div><br></br>

          </div>
        )}
        {/* Add content for other packages */}
        <Footer/>
      </div>
      
  );
}

export default Packages


