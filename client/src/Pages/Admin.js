import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Pages/Admin.css';function Admin() {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();  useEffect(() => {
    fetchUsers();
  }, []);  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3002/beauticianprofile/view');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert(`Failed to fetch users: ${error.message}`);
    }
  };  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/beautician/delete/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert(`Failed to delete user: ${error.message}`);
    }
  };  const toggleVerifyUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3002/beauticianprofile/verified/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) {
        throw new Error('Failed to verify user');
      }
      const updatedUser = await response.json();
      setUsers(users.map((user) => (user._id === id ? updatedUser : user)));
    } catch (error) {
      console.error('Error verifying user:', error);
      alert(`Failed to verify the user: ${error.message}`);
    }
  };  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
    navigate('/');
  };  return (
    <div>
      <div className='sidebar'>
        <ul style={{ marginTop: '100px' }}>
          <li><a href='/'>Home</a></li>
          <li><a href='/users'>User</a></li>
          <li><a href='/Profile'>Beauticians</a></li>
          <li><a href='/Contact'>Contact Us</a></li>
        </ul>
      </div>
      <section>
        <h2 style={{ marginLeft: '300px' }}>Welcome, Sarmina!</h2>
      </section>
      {isLoggedIn ? (
        <li className="nav-item">
          <button className="btn" id="loginBtn" onClick={handleLogout}>Logout</button>
        </li>
      ) : (
        <li className="nav-item">
          <Link to="/login"><button className="btn" id="loginBtn">Login</button></Link>
        </li>
      )}
      <div className='main-content'>
        <div className='user-info'>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <div className="admin-board" style={{ marginLeft: '200px' }}>
        <h2>Beautician Profiles</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
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
                  <button onClick={() => toggleVerifyUser(profile._id)}>
                    {profile.isVerified ? 'Unverify' : 'Verify'}
                  </button>
                  {/* <button onClick={() => handleDeleteUser(profile._id)}>Delete</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}export default Admin;