import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../Components/nav.css";
import image from '../Components/Gorgeous_Queen_2_-removebg-preview.png';
import axios from "axios";

function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('auth-token');
        if (token) {
            setIsLoggedIn(true);
            axios.get('http://localhost:3001/api/user/getUsers', {
                headers: { 'auth-token': token }
            }).then(response => {
            }).catch(error => {
                console.error("Error fetching user profile:", error);
            });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid" style={{ height: '90px', textAlign: 'center' }}>
                        <div className="align1">
                            <img className="img3" src={image} style={{ height: '110px', marginTop: '10px' }} alt="Logo" />
                        </div>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav" style={{ fontSize: '25px' }}>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>&nbsp;&nbsp;&nbsp; */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Profilebeauty">Add Profile</Link>
                                </li>&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Beauticians/bookings">Orders</Link>
                                </li>&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                                </li>&nbsp;&nbsp;&nbsp;

                                {isLoggedIn ? (
                                    <li className="nav-item">
                                        <button className="btn" id="loginBtn" onClick={handleLogout}>Logout</button>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link to="/login"><button className="btn" id="loginBtn">Login</button></Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Nav;
