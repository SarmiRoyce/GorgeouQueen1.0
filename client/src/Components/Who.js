import React from 'react';
import "./Who.css";


function Who() {
    return (
        <div className='role'><br/><br/><br/><br/>
            <h1 style={{fontSize:'60px'}}><b>Your Role</b></h1>
            <div className='who'>
            <a href='/Register'><div class="card" style={{width: '32rem'}}>
                <img src="https://kanishqsalonacademy.com/wp-content/uploads/2021/03/Img-4-1024x667.jpg" class="card-img-top" alt="..." style={{padding:'20px'}}/>
                    <div class="card-body">
                      <h5 class="card-title" style={{fontWeight:'bold',textAlign:'center',fontSize:'30px'}}>Beautician</h5>
                    </div>
            </div></a><br></br>

            <a href='/URegister'><div class="card" style={{width: '32rem'}}>
                <img src="https://scholarsight.com/media/Beautician_DT_KZ1MfkF.jpg" class="card-img-top" alt="..." style={{height:'340px',padding:'20px'}}/>
                    <div class="card-body">
                      <h5 class="card-title" style={{fontWeight:'bold',textAlign:'center',fontSize:'30px'}}>User</h5>
                    </div>
            </div></a><br></br>

            </div>
        </div>
    
    )
}

export default Who