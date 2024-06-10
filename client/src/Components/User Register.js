import React, { useState } from 'react';
import Navbar from './nav';

function SignUpPage() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypepassword, setRetypePassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!firstname.trim()) {
      newErrors.firstname = "First name is required.";
    }
    if (!lastname.trim()) {
      newErrors.lastname = "Last name is required.";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (password !== retypepassword) {
      newErrors.retypepassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const userData = {
      firstname,
      lastname,
      email,
      password,
      retypepassword
    };

    console.log(userData);

    fetch('http://localhost:3002/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='register-full'>
        <form onSubmit={handleSubmit} className='Register' style={{ display: 'flex', justifyContent: 'space-evenly', width: '950px' }}>
          <div>
            <img src="https://content.jdmagicbox.com/comp/bidar/m2/9999p8482.8482.180626152315.d4m2/catalogue/apsara-beauty-parlour-hallikhed-bidar-bidar-beauty-parlours-y43tudewu1.jpg" alt='bridal' style={{ height: '700px' }} />
          </div>
          <div className='register-text' style={{ marginLeft: '40px' }}>
            <h1 style={{ marginLeft: '40px' }}>User Register</h1><br />
            <label>First Name</label>
            <input type='text' id='firstName' placeholder='Enter your first name' value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
            {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}<br /><br />

            <label>Last Name</label>
            <input type='text' id='lastName' placeholder='Enter your last name' value={lastname} onChange={(e) => setLastName(e.target.value)} required />
            {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname}</p>}<br /><br />

            <label>Email Address</label>
            <input type='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}<br /><br />

            <label>Password</label>
            <input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}<br /><br />

            <label>Retype Password</label>
            <input type='password' id='retypePassword' placeholder='Confirm your password' value={retypepassword} onChange={(e) => setRetypePassword(e.target.value)} required />
            {errors.retypepassword && <p style={{ color: 'red' }}>{errors.retypepassword}</p>}<br /><br />

            <button className='btn15'>Submit</button><br />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;


    