import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Pages/Admin.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/beauticianprofile/view');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      toast.success('Users fetched successfully');
    } catch (error) {
      console.error('Error fetching users:', error);
      toast.error(`Failed to fetch users: ${error.message}`);
    }
  };

  const toggleVerifyUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/beauticianprofile/verified/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Failed to verify user');
      }
      const updatedUser = await response.json();
      setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
      toast.success(`User ${updatedUser.isVerified ? 'verified' : 'unverified'} successfully`);
    } catch (error) {
      console.error('Error verifying user:', error);
      toast.error(`Failed to verify the user: ${error.message}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
    navigate('/');
    toast.info('Logged out successfully');
  };

  const verifiedUsersCount = users.filter(user => user.isVerified).length;

  return (
    <div>
      <ToastContainer />
      <div className='sidebar'>
        <ul style={{ marginTop: '150px' }}>
          <li><a href='/profile'>Beauticians</a></li>
          <li><a href='/admin/booking'>Bookings</a></li>
          <li><a href='/Contact'>Payment</a></li>
          <div className='user-info' style={{ marginLeft: '20px' }}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </ul>
      </div>
      <div className='sarmi23'>
        <h2>Welcome, Sarmina!</h2>
      </div>
      <div className='sarmi'>
        <p>Total Booking <br /><br />12</p>
        <p>Total Beauticians <br /><br />{users.length}</p>
        <p>Verified Beauticians <br /><br />{verifiedUsersCount}</p>
      </div>
      {isLoggedIn ? (
        <li className="nav-item">
          <button className="btn" id="loginBtn" onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <li className="nav-item">
          <Link to="/login"><button className="btn" id="loginBtn">Login</button></Link>
        </li>
      )}
      <div className="admin-board" style={{ marginLeft: '200px' }}>
        <h4>Beautician Profiles</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Image</th> */}

              <th>Title</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Email</th>
              <th>Business Hours</th>
              <th>Works</th>
              <th>Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((profile, index) => (
              <tr key={index}>
                <td>{profile.name}</td>
                {/* <td>{profile.imageUrl}</td> */}

                <td>{profile.title}</td>
                <td>{profile.experience}</td>
                <td>{profile.location}</td>
                <td>{profile.email}</td>
                <td>
                  {profile.businessHours.map((hour, index) => (
                    <div key={index}>{hour.day}: {hour.time}</div>
                  ))}
                </td>
                <td>
                  {profile.works.map((work, index) => (
                    <div key={index}>
                      <img src={work.imageUrl} alt={`Work ${index + 1}`} style={{ width: '50px', height: '50px' }} />
                      <div>{work.description}</div>
                    </div>
                  ))}
                </td>
                <td>{profile.isVerified ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => toggleVerifyUser(profile._id)} >
                    {profile.isVerified ? 'Unverify' : 'Verify'}
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

export default Admin;
