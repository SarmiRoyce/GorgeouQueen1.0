import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/nav';
import '../Pages/Profile.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    experience: '',
    location: '',
    imageFile: null,
    imageUrl: '',
    services: {
      HairCutting: false,
      NailArt: false,
      Manicure: false,
      Facial: false,
      Pedicure: false,
      EyebrowShape: false,
      HairColoring: false,
      NormalMakeup: false,
      BridalMakeup: false,
      HairStyle: false,
      SareeDraping: false,
      NailEnhancements: false,
    },
    email: '',
    instagram: '',
    businessHours: [{ day: '', time: '' }],
    works: [],
  });
  const [showServicesForm, setShowServicesForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        imageFile: file,
        imageUrl,
      }));
    } else if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        services: { ...prevData.services, [name]: checked },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleBusinessHoursChange = (index, e) => {
    const { name, value } = e.target;
    const newBusinessHours = [...formData.businessHours];
    newBusinessHours[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      businessHours: newBusinessHours,
    }));
  };

  const addBusinessHour = () => {
    setFormData((prevData) => ({
      ...prevData,
      businessHours: [...prevData.businessHours, { day: '', time: '' }],
    }));
  };

  const removeBusinessHour = (index) => {
    const newBusinessHours = formData.businessHours.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      businessHours: newBusinessHours,
    }));
  };

  const handleWorkChange = (index, e) => {
    const { name, value, files } = e.target;
    const newWorks = [...formData.works];
    if (name === 'imageFile') {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      newWorks[index] = { ...newWorks[index], imageFile: file, imageUrl };
    } else {
      newWorks[index][name] = value;
    }
    setFormData((prevData) => ({
      ...prevData,
      works: newWorks,
    }));
  };

  const addWork = () => {
    setFormData((prevData) => ({
      ...prevData,
      works: [...prevData.works, { imageFile: null, imageUrl: '', description: '' }],
    }));
  };

  const removeWork = (index) => {
    const newWorks = formData.works.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      works: newWorks,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if at least one service is selected
    const selectedServices = Object.values(formData.services).some((service) => service === true);
    if (!selectedServices) {
      toast.error('Please select at least one service.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/beauticianprofile/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Profile created successfully');
        setTimeout(() => {
          navigate('/Beauticians/bookings');
        }, 2000); // Add a delay before navigating
      } else {
        const data = await response.json();
        toast.error(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };

  return (
    <div className='pro-form14'>
      <ToastContainer />
      <Navbar />
      <div className="pro-form5">
        <div className="pro-form"><br />
          <h1 style={{ textAlign: 'center', fontWeight: '600' }}><b>Explore Your Profile</b></h1>
          <form onSubmit={handleSubmit}>
            <div className="profile-header">
              {formData.imageUrl && <img src={formData.imageUrl} alt="Beautician's" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />}
              <input
                type="file"
                name="imageFile"
                accept="image/*"
                onChange={handleChange}
                placeholder="Upload Image"
              />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                style={{ fontSize: '18px' }}
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                style={{ fontSize: '18px' }}
              />
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Experience"
                style={{ fontSize: '18px' }}
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                style={{ fontSize: '18px' }}
              />
            </div>
            <div className="container14">
              <button type="button" className="btn btn-primary" onClick={() => setShowServicesForm(!showServicesForm)} style={{ backgroundColor: '#dd1759;', fontWeight: '800', fontSize: '20px' }}>
                Services
              </button>
            </div>
            {showServicesForm && (
              <div>
                <label>Services:</label>
                {Object.keys(formData.services).map((service) => (
                  <div key={service}>
                    <input
                      type="checkbox"
                      name={service}
                      checked={formData.services[service]}
                      onChange={handleChange}
                    /> {service.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                ))}
                <button type="button" onClick={() => setShowServicesForm(false)}>Add Service</button>
              </div>
            )}
            <div className="container portfolio">
              <h2 style={{ fontWeight: '600', marginTop: '20px', textAlign: 'center' }}>Works</h2><br />
              <div className="row">
                {formData.works.map((work, index) => (
                  <div key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
                    {work.imageUrl && <img src={work.imageUrl} alt={`Work ${index + 1}`} />}
                    <input
                      type="file"
                      name="imageFile"
                      onChange={(e) => handleWorkChange(index, e)}
                      style={{ marginTop: '10px', marginBottom: '10px' }}
                    />
                    <input
                      type="text"
                      name="description"
                      value={work.description}
                      onChange={(e) => handleWorkChange(index, e)}
                      placeholder="Work Description"
                      style={{ marginBottom: '10px' }}
                    />
                    <button type="button" onClick={() => removeWork(index)}>Remove</button>
                  </div>
                ))}
                <button type="button" onClick={addWork} style={{ width: '110px', height: '50px', backgroundColor: 'blue', fontWeight: '800' }}>Add Work</button>
              </div>
            </div><br />
            <div className="container contact">
              <h2 style={{ fontWeight: '600' }}>Contact Information</h2>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="Instagram"
              />
              <div>
                <h3 style={{ fontWeight: '800', marginTop: '30px' }}>Business Hours</h3>
                {formData.businessHours.map((hour, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <input
                      type="text"
                      name="day"
                      value={hour.day}
                      onChange={(e) => handleBusinessHoursChange(index, e)}
                      placeholder="Day"
                      style={{ marginRight: '10px' }}
                    />
                    <input
                      type="text"
                      name="time"
                      value={hour.time}
                      onChange={(e) => handleBusinessHoursChange(index, e)}
                      placeholder="Time"
                      style={{ marginRight: '10px' }}
                    />
                    <button type="button" onClick={() => removeBusinessHour(index)}>Remove</button>
                  </div>
                ))}
                <button type="button" onClick={addBusinessHour} style={{ backgroundColor: 'blue' }}>Add Business Hour</button>
              </div><br />
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#dd1759' }}>Save Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
