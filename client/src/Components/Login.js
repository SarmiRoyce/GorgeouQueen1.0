// import React, { useState } from 'react';
// import Navbar from '../Components/nav';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();   

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous error
//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     const userdata = { email, password };
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:3001/user/login", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userdata)
//       });

//       const data = await response.json();
//       setLoading(false);

//       if (data.message === "Success") {
//         localStorage.setItem('auth-token', data.token);
//         navigate("/");
//       } else if (data.message === "Success beautician") {
//         localStorage.setItem('auth-token', data.token);
//         navigate("/Beauticians/bookings");
//       } else if (data.message === "Admin_Success") {
//         localStorage.setItem('auth-token', data.token);
//         navigate("/Admin");
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setLoading(false);
//       setError("An error occurred. Please try again.");
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='login-full'>
//         <form className='Login' style={{ display: 'flex', justifyContent: 'space-evenly' }} onSubmit={handleSubmit}>
//           <div>
//             <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" alt="Attractive fashion" style={{ borderRadius: '30px' }} />
//           </div>
//           <div className='login-text'>
//             <h1 style={{ marginLeft: '50px', fontWeight: '800' }}>Login</h1><br />
//             {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
//             <label>Email Address</label>
//             <input 
//               type='email' 
//               placeholder='Enter your email' 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)}
//             /><br /><br />
//             <label>Password</label>
//             <input 
//               type='password' 
//               placeholder='Enter your password' 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)}
//             /><br /><br />
//             <button className='btn4' type="submit" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button><br /><br /><br />
//             <p style={{ fontSize: '15px', textAlign: 'center' }}>Don't have an account? <a href="/role" style={{ textDecoration: 'none', color: 'rgb(221, 23, 89' }}>Register Here</a></p><br />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }








import React, { useState } from 'react';
import Navbar from '../Components/nav';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();   

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    const userdata = { email, password };
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/user/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
      });

      const data = await response.json();
      setLoading(false);

      if (data.message === "Success") {
        localStorage.setItem('auth-token', data.token);
        navigate("/");
        toast.success("Login successful!");
      } else if (data.message === "Success beautician") {
        localStorage.setItem('auth-token', data.token);
        navigate("/Beauticians/bookings");
        toast.success("Login successful!");
      } else if (data.message === "Admin_Success") {
        localStorage.setItem('auth-token', data.token);
        navigate("/Admin");
        toast.success("Login successful!");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error("An error occurred. Please try again.");
      console.log(err);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className='login-full'>
        <form className='Login' style={{ display: 'flex', justifyContent: 'space-evenly' }} onSubmit={handleSubmit}>
          <div>
            <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" alt="Attractive fashion" style={{ borderRadius: '30px' }} />
          </div>
          <div className='login-text'>
            <h1 style={{ marginLeft: '50px', fontWeight: '800' }}>Login</h1><br />
            <label>Email Address</label>
            <input 
              type='email' 
              placeholder='Enter your email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />
            <label>Password</label>
            <input 
              type='password' 
              placeholder='Enter your password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            /><br /><br />
            <button className='btn4' type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button><br /><br /><br />
            <p style={{ fontSize: '15px', textAlign: 'center' }}>Don't have an account? <a href="/role" style={{ textDecoration: 'none', color: 'rgb(221, 23, 89' }}>Register Here</a></p><br />
          </div>
        </form>
      </div>
    </div>
  );
}
