// import React, { useState, useEffect } from 'react';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import './Beauticians.css';
// import { Link } from "react-router-dom";

// function Beautician() {
//     const [beauticians, setBeauticians] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3002/beauticianprofile/view')
//             .then(response => response.json())
//             .then(data => setBeauticians(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);
//     const handleHireClick = (beautician) => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             window.location.href = `/showprofile/${beautician}`;
//         } else {
//             // If token doesn't exist, navigate to the home page
//             // window.location.href = "login";
//         }
//     };

//     return (
//         <div className='beauty'>
//             <Navbar />
//             <h1 style={{ marginTop: '30px', textAlign: 'center' }}>Beauticians Team</h1>
//             <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '50px' }}>
//                 {beauticians.map((beautician, index) => (
//                     <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
//                         <img src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SORL0723007_1560x880_desktop.jpg" style={{ padding: '10px', width: '285px', height: '220px' }}/>
//                         {/* <img src={beautician.imgSrc} className="card-img-top" alt={`${beautician.name}`} style={{ padding: '10px', width: '285px', height: '220px' }} /> */}
//                         <div className="card-body">
//                             <h5 className="card-title">{beautician.name}</h5><br></br>
//                             {/* <div className="stars">
//                                 {[...Array(5)].map((star, i) => (
//                                     <span key={i} className={`fa fa-star ${i < beautician.rating ? 'checked' : ''}`} style={{ color: 'yellow' }}></span>
//                                 ))}
//                             </div> */}
//                             {/* <p className="card-title">[{beautician.services}]</p><br></br> */}

//                             <Link
//                                 to={`/showprofile/${beautician._id}`}
//                                 className='btn12'
//                                 id="buttoncardtractor2"
//                                 onClick={() => handleHireClick(beautician._id)}>
//                                 View Profile
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Beautician;


import React, { useState, useEffect } from 'react';
import Navbar from '../Components/nav';
import Footer from '../Components/Footer';
import './Beauticians.css';
import { Link } from "react-router-dom";

const availableServices = [
    'HairCutting', 'NailArt', 'Manicure', 'Facial', 'Pedicure', 'EyebrowShape',
    'HairColoring', 'NormalMakeup', 'BridalMakeup', 'HairStyle', 'SareeDraping', 'NailEnhancements'
];

function Beautician() {
    const [beauticians, setBeauticians] = useState([]);
    const [visibleServices, setVisibleServices] = useState({});
    const [selectedServices, setSelectedServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/beauticianprofile/view')
            .then(response => response.json())
            .then(data => setBeauticians(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleHireClick = (beautician) => {
        const token = localStorage.getItem("token");
        if (token) {
            window.location.href = `/showprofile/${beautician}`;
        } else {
            // If token doesn't exist, navigate to the login page
            // window.location.href = "/login";
        }
    };

    const toggleServices = (index) => {
        setVisibleServices(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const renderServices = (services) => {
        return Object.entries(services)
            .filter(([_, value]) => value)
            .map(([key]) => (
                <li key={key} className="service-item">{key.replace(/([A-Z])/g, ' $1').trim()}</li>
            ));
    };

    const handleServiceChange = (service) => {
        setSelectedServices(prevSelectedServices =>
            prevSelectedServices.includes(service)
                ? prevSelectedServices.filter(s => s !== service)
                : [...prevSelectedServices, service]
        );
    };

    const filterBeauticians = () => {
        // Filter beauticians based on selected services and verification status
        const filteredByServices = selectedServices.length === 0
            ? beauticians
            : beauticians.filter(beautician =>
                selectedServices.every(service => beautician.services[service])
            );

        // Filter beauticians to only show verified ones
        return filteredByServices.filter(beautician => beautician.isVerified);
    };

    return (
        <div className='beauty'>
            <Navbar />
            <h1 style={{ marginTop: '30px', textAlign: 'center' }}>Beauticians Team</h1>

            <div className="filter-container" style={{ textAlign: 'center', margin: '20px 0' }}>
                {availableServices.map(service => (
                    <button
                        key={service}
                        onClick={() => handleServiceChange(service)}
                        className={`filter-button ${selectedServices.includes(service) ? 'selected' : ''}`}
                    >
                        {service.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                ))}
            </div>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '50px' }}>
                {filterBeauticians().map((beautician, index) => (
                    <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                        <img src={beautician.imageUrl || "https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SORL0723007_1560x880_desktop.jpg"} style={{ padding: '10px', width: '285px', height: '220px' }}/>
                        <div className="card-body">
                            <h5 className="card-title">{beautician.name}</h5>
                            <button onClick={() => toggleServices(index)} className='btn12' 
                            >Services</button>
                            {visibleServices[index] && (
                                <ul className="services-list">
                                    {renderServices(beautician.services)}
                                </ul>
                            )}  
                            <Link
                                to={`/showprofile/${beautician._id}`}
                                className='btn12'
                                style={{marginLeft:"18px"}}
                                id="buttoncardtractor2"
                                onClick={() => handleHireClick(beautician._id)}>
                                View Profile
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Beautician;

