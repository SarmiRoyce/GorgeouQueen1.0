// import React, { useEffect, useState } from 'react';
// import Navbar from '../Components/nav';
// // import '../Pages/AdminDashboard.css';

// function AdminDashboard() {
//   const [bookings, setBookings] = useState([]);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch('http://localhost:3001/booking/view');
//         const data = await response.json();
//         setBookings(data);
//       } catch (error) {
//         console.error('Error fetching bookings:', error);
//       }
//     };

//     fetchBookings();
//   }, []);

//   const updateBookingStatus = async (id, status) => {
//     try {
//       const response = await fetch(`http://localhost:3001/booking/update/${id}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status }),
//       });

//       if (response.ok) {
//         const updatedBooking = await response.json();
//         setBookings((prevBookings) =>
//           prevBookings.map((booking) =>
//             booking._id === updatedBooking._id ? updatedBooking : booking
//           )
//         );
//       } else {
//         console.error('Failed to update booking status');
//       }
//     } catch (error) {
//       console.error('Error updating booking status:', error);
//     }
//   };

//   return (
//     <div>
//       {/* <Navbar /> */}
//       <div className='admin-dashboard'>
//         {/* <h1>Admin Dashboard</h1> */}
//         <table>
//           <thead>
//             <tr>
//               <th>Beautician's Name</th>
//               <th>Customer's Name</th>
//               <th>Packages</th>
//               <th>Date</th>
//               <th>Time</th>
//               <th>Response</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking._id}>
//                 <td>{booking.beauticianName}</td>
//                 <td>{booking.customerName}</td>
//                 <td>{booking.packages.join(', ')}</td>
//                 <td>{new Date(booking.date).toLocaleDateString()}</td>
//                 <td>{booking.time}</td>
//                 <td>
//                   <button onClick={() => updateBookingStatus(booking._id, true)}>
//                     <i className="fa-solid fa-thumbs-up"></i>
//                   </button>
//                   <button onClick={() => updateBookingStatus(booking._id, false)}>
//                     <i className="fa-solid fa-thumbs-down"></i>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;




import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/beauticianNavbar';
// import '../Pages/AdminDashboard.css';

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
        {/* <h1>Admin Dashboard</h1> */}
        <table>
          <thead>
            <tr>
              <th>Beautician's Name</th>
              <th>Customer's Name</th>
              <th>Packages</th>
              <th>Date</th>
              <th>Time</th>
              <th>status</th>
              <th>Response</th>
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
                <td>
                  <button onClick={() => updateBookingStatus(booking._id, 'done')}>
                    <i className="fa-solid fa-thumbs-up"></i>
                  </button>
                  <button onClick={() => updateBookingStatus(booking._id, 'cancelled')}>
                    <i className="fa-solid fa-thumbs-down"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
