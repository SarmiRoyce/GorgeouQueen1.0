// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// function ViewProfile() {
//   const [profileData, setProfileData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProfileData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3002/beauticianprofile/showBeautician/${id}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch profile data: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setProfileData(data);
//       } catch (err) {
//         setError(err.message);
//         console.error('There was an error fetching the profile data!', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfileData();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!profileData) {
//     return <div>No profile data available</div>;
//   }

//   const { name, title, experience, location, services, works, email, instagram, businessHours } = profileData;

//   return (
//     <div className='showprofile2'>
//       <div className='showprofile'>
//         <div className="profile-header5">
//           <img src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SORL0723007_1560x880_desktop.jpg" alt="Beautician's Photo" />
//           <h1>{name}</h1>
//           <h2>{title}</h2>
//           <p>{experience}</p>
//           <p>{location}</p>
//         </div>

//         <div className="container20">
//           <h3 style={{ fontWeight: '800' }}>Services Offered</h3>
//           <ul>
//             {services && Object.keys(services).map((service, index) => (
//               services[service] && <li key={index}>{service.replace(/([A-Z])/g, ' $1').trim()}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="container29 portfolio">
//           <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
//           <div className="row">
//             {works && works.map((work, index) => (
//               <div key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
//                 {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
//                 <p>{work.description}</p>
//               </div>
//             ))}
//           </div>
//         </div><br />

//         <div className="container30 contact">
//           <h2 style={{ fontWeight: '600' }}>Contact Information</h2><br />
//           <p>Email: {email}</p>
//           <p>Instagram: {instagram}</p>
//           <div>
//             <h3 style={{ fontWeight: '800' }}>Business Hours</h3>
//             <ul>
//               {businessHours && businessHours.map((hour, index) => (
//                 <li key={index}>{hour.day}: {hour.time}</li>
//               ))}
//             </ul>
//             <a href='/Book'><button className='btn10'>Book Now</button><br /><br /></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ViewProfile;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ViewProfile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/beauticianprofile/showBeautician/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch profile data: ${response.statusText}`);
        }
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
        console.error('There was an error fetching the profile data!', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profileData) {
    return <div>No profile data available</div>;
  }

  const { name, title, experience, location, services, works, email, instagram, businessHours } = profileData;

  return (
    <div className='showprofile2'>
      <div className='showprofile'>
        <div className="profile-header5">
          <img src="https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SORL0723007_1560x880_desktop.jpg" alt="Beautician's Photo" />
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>{experience}</p>
          <p>{location}</p>
        </div>

        <div className="container20">
          <h3 style={{ fontWeight: '800' }}>Services Offered</h3>
          <ul>
            {services && Object.keys(services).map((service, index) => (
              services[service] && <li key={index}>{service.replace(/([A-Z])/g, ' $1').trim()}</li>
            ))}
          </ul>
        </div>

        <div className="container29 portfolio">
          <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
          <div className="row">
            {works && works.map((work, index) => (
              <div key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
                {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
                <p>{work.description}</p>
              </div>
            ))}
          </div>
        </div><br />

        <div className="container30 contact">
          <h2 style={{ fontWeight: '600' }}>Contact Information</h2><br />
          <p>Email: {email}</p>
          <p>Instagram: {instagram}</p>
          <div>
            <h3 style={{ fontWeight: '800' }}>Business Hours</h3>
            <ul>
              {businessHours && businessHours.map((hour, index) => (
                <li key={index}>{hour.day}: {hour.time}</li>
              ))}
            </ul>
            <Link to={`/Book/${id}`} state={{ beauticianName: name, packages: services }}>
  <button className='btn10'>Book Now</button><br /><br />
</Link>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
