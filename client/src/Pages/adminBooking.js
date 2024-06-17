import React, { useEffect, useState } from 'react';
// import Navbar from '../Components/nav';
import { Link } from 'react-router-dom';
// import '../Pages/AdminDashboard.css';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // This is just an example. Replace with actual login logic.

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:3001/booking/view');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  const handleLogout = () => {
    // Add logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div style={{marginLeft:'200px'}}>
      {/* <Navbar /> */}
      <div className='sidebar'>
        <ul style={{ marginTop: '150px' }}>
          <li><a href='/Admin'>Beauticians</a></li>
          <li><a href='/admin/booking'>Bookings</a></li>
          <li><a href='/Contact'>Payment</a></li>
        </ul>
      </div>
      <div className='sarmi23'>
        <h2>Welcome, Sarmina!</h2>
      </div>
      <div className='sarmi'>
        <p>Total Booking</p>
        <p>Total Beauticians</p>
        <p>Payment</p>
      </div>
      <div className='main-content'>
        <div className='user-info'>
          {isLoggedIn ? (
            <button className="btn" id="loginBtn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">
              <button className="btn" id="loginBtn">Login</button>
            </Link>
          )}
        </div>
      </div>
      <div className='admin-dashboard'>
        <h1>Admin Dashboard</h1>
        <table>
          <thead>
            <tr>
              <th>Beautician's Name</th>
              <th>Customer's Name</th>
              <th>Packages</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.beauticianName}</td>
                <td>{booking.customerName}</td>
                <td>{booking.packages.join(', ')}</td>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
