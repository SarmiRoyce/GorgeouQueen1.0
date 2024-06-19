import React, { useEffect, useState } from 'react';
import Navbar from './beauticianNavbar';

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

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

  const updateBookingStatus = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:3001/booking/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        const updatedBooking = await response.json();
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === updatedBooking._id ? updatedBooking : booking
          )
        );
      } else {
        console.error('Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className='admin-dashboard'>
        <table>
          <thead>
            <tr>
              <th>Beautician's Name</th>
              <th>Customer's Name</th>
              <th>Packages</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              {/* <th>Response</th> */}
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.beauticianName}</td>
                <td>{booking.customerName}</td>
                <td>{booking.packages.join(', ')}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>{booking.time}</td>
                <td>{booking.status}</td>
                {/* <td>
                  <button
                    className={`status-button ${booking.status === 'done' ? 'green-tick' : ''}`}
                    onClick={() => updateBookingStatus(booking._id, 'done')}
                    disabled={booking.status === 'done' || booking.status === 'cancelled'}
                  >
                    {booking.status === 'done' ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-thumbs-up"></i>
                    )}
                  </button>
                  <button
                    className={`status-button ${booking.status === 'cancelled' ? 'red-cross' : ''}`}
                    onClick={() => updateBookingStatus(booking._id, 'cancelled')}
                    disabled={booking.status === 'done' || booking.status === 'cancelled'}
                  >
                    {booking.status === 'cancelled' ? (
                      <i className="fa-solid fa-times"></i>
                    ) : (
                      <i className="fa-solid fa-thumbs-down"></i>
                    )}
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
