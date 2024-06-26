


// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import Navbar from '../Components/nav';
// import Select from 'react-select';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import 'react-toastify/dist/ReactToastify.css';
// import '../Pages/Book.css';


// function Book() {
//   const location = useLocation();
//   const beauticianName = location.state?.beauticianName || "";
//   const packages = location.state?.packages || {};  const [customerName, setCustomerName] = useState('');
//   const [selectedPackages, setSelectedPackages] = useState([]);
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const navigate = useNavigate();  // Function to fetch customer name from JWT token
//   const fetchCustomerName = () => {
//     const token = localStorage.getItem('auth-token'); // Assuming token is stored in localStorage
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         const { fname, lname } = decodedToken;
//         setCustomerName(`${fname} ${lname}`);
//       } catch (error) {
//         console.error('Error decoding token:', error);
//       }
//     }
//   };  useEffect(() => {
//     fetchCustomerName();
//   }, []); // Fetch customer name on component mount  const handlePackageChange = (selectedOptions) => {
//     setSelectedPackages(selectedOptions.map(option => option.value));
//   };  const handleSubmit = async (event) => {
//     event.preventDefault();    const bookingData = {
//       beauticianName,
//       customerName,
//       packages: selectedPackages,
//       date,
//       time
//     };    try {
//       const bookingResponse = await fetch('http://localhost:3001/booking/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(bookingData)
//       });      if (bookingResponse.ok) {
//         toast.success('Booking created successfully!', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });        setTimeout(() => {
//           navigate('/profile');
//         }, 3000); // Redirect after 3 seconds
//       } else {
//         throw new Error('Failed to create booking');
//       }
//     } catch (error) {
//       console.error('Error creating booking:', error);
//       toast.error('Error creating booking. Please try again.', {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };  
  
//   const packageOptions = Object.keys(packages).map((packageName) => ({
//     value: packageName,
//     label: packageName.replace(/([A-Z])/g, ' $1').trim()
//   })) 

  
//   return (
//     <div>
//       <Navbar />
//       <div className='book-full'>
//         <form className='Book' onSubmit={handleSubmit}>
//           <div className='book-text'>
//             <h1>Book Appointment</h1><br />
//             <label>Beautician's Name</label>
//             <input type='text' value={beauticianName} readOnly /><br /><br />            <label>Customer's Name</label>
//             <input
//               type='text'
//               placeholder='Enter your name'
//               value={customerName}
//               onChange={(e) => setCustomerName(e.target.value)}
//               required
//               disabled // Disable manual editing since it's fetched from JWT
//             /><br /><br />            <label>Packages</label>
//             <Select
//               isMulti
//               name="packages"
//               options={packageOptions}
//               className="basic-multi-select"
//               classNamePrefix="select"
//               onChange={handlePackageChange}
//             /><br /><br />            <label>Date</label>
//             <input
//               type='date'
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               required
//             /><br /><br />            <label>Time</label>
//             <input
//               type='time'
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//               required
//             /><br /><br />
//           </div>
//           <button type='submit' className='btn-large'>Confirm</button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );

// export default Book;






import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Components/nav';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import{ jwtDecode }from 'jwt-decode'; // Ensure jwtDecode is imported correctly
import 'react-toastify/dist/ReactToastify.css';
import '../Pages/Book.css';

function Book() {
  const location = useLocation();
  const beauticianName = location.state?.beauticianName || "";
  const packages = location.state?.packages || {};

  const [customerName, setCustomerName] = useState('');
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  // Function to fetch customer name from JWT token
  const fetchCustomerName = () => {
    const token = localStorage.getItem('auth-token'); // Assuming token is stored in localStorage
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const { fname, lname } = decodedToken;
        setCustomerName(`${fname} ${lname}`);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  };

  useEffect(() => {
    fetchCustomerName();
  }, []); // Fetch customer name on component mount

  const handlePackageChange = (selectedOptions) => {
    setSelectedPackages(selectedOptions.map(option => option.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookingData = {
      beauticianName,
      customerName,
      packages: selectedPackages,
      date,
      time
    };

    try {
      const bookingResponse = await fetch('http://localhost:3001/booking/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      if (bookingResponse.ok) {
        toast.success('Booking created successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate('/profile');
        }, 3000); // Redirect after 3 seconds
      } else {
        throw new Error('Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      toast.error('Error creating booking. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const packageOptions = Object.keys(packages).map((packageName) => ({
    value: packageName,
    label: packageName.replace(/([A-Z])/g, ' $1').trim()
  }));

  return (
    <div>
      <Navbar />
      <div className='book-full'>
        <form className='Book' onSubmit={handleSubmit}>
          <div className='book-text'>
            <h1>Book Appointment</h1><br />
            <label>Beautician's Name</label>
            <input type='text' value={beauticianName} readOnly /><br /><br />
            <label>Customer's Name</label>
            <input
              type='text'
              placeholder='Enter your name'
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              disabled // Disable manual editing since it's fetched from JWT
            /><br /><br />
            <label>Packages</label>
            <Select
              isMulti
              name="packages"
              options={packageOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handlePackageChange}
            /><br /><br />
            <label>Date</label>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            /><br /><br />
            <label>Time</label>
            <input
              type='time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            /><br /><br />
          </div>
          <button type='submit' className='btn-large'>Confirm</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Book;
