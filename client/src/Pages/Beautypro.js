import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Pages/Beautypro.css';

const Beautypro = () => {
  const [formData, setFormData] = useState({ services: [] });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, checked } = e.target;
    let newOptions = formData.services;

    if (checked) {
      newOptions = [...newOptions, value];
    } else {
      newOptions = newOptions.filter(option => option !== value);
    }

    setFormData({ ...formData, services: newOptions });
  };

  const handleClick = () => {
    const serviceData = formData.services;
    console.log(serviceData)
    navigate('/Profilebeauty', { state: { serviceData } });
  };

  return (
    <div className="beauty-form">
      <form style={{ width: '500px' }}>
        <div>
          <label>Services:</label>
          <div>
            <input type="checkbox" name="services" value="HairCutting" onChange={handleChange} /> Hair Cutting
          </div>
          <div>
            <input type="checkbox" name="services" value="NailArt" onChange={handleChange} /> Nail Art
          </div>
          <div>
            <input type="checkbox" name="services" value="Manicure" onChange={handleChange} /> Manicure
          </div>
          <div>
            <input type="checkbox" name="services" value="Facial" onChange={handleChange} /> Facial
          </div>
          <div>
            <input type="checkbox" name="services" value="Pedicure" onChange={handleChange} /> Pedicure
          </div>
          <div>
            <input type="checkbox" name="services" value="EyebrowShape" onChange={handleChange} /> Eyebrow Shape
          </div>
          <div>
            <input type="checkbox" name="services" value="HairColoring" onChange={handleChange} /> Hair Coloring
          </div>
          <div>
            <input type="checkbox" name="services" value="NormalMakeup" onChange={handleChange} /> Normal Makeup
          </div>
          <div>
            <input type="checkbox" name="services" value="BridalMakeup" onChange={handleChange} /> Bridal Makeup
          </div>
          <div>
            <input type="checkbox" name="services" value="HairStyle" onChange={handleChange} /> Hair Style
          </div>
          <div>
            <input type="checkbox" name="services" value="SareeDraping" onChange={handleChange} /> Saree Draping
          </div>
          <div>
            <input type="checkbox" name="services" value="NailExhancements" onChange={handleChange} /> Nail Enhancements
          </div>
        </div>

        <div className="container14">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Beautypro;
