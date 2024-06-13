import React, { useEffect, useState } from 'react';
import Navbar from '../Components/nav';
// import '../Pages/AdminDashboard.css';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:3002/booking/view');
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <Navbar />
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
