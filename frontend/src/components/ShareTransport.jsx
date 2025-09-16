import { useState } from 'react';

const ShareTransport = () => {
  const [formData, setFormData] = useState({
    vehicleType: '',
    capacity: '',
    availableDate: '',
    availableTime: '',
    route: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Transport sharing offer submitted successfully!');
    setFormData({
      vehicleType: '',
      capacity: '',
      availableDate: '',
      availableTime: '',
      route: '',
      contactInfo: ''
    });
  };

  return (
    <div className="component-container">
      <h2>Share Your Transport</h2>
      <p className="component-description">
        Have extra space in your vehicle? Offer it to other farmers and help reduce transportation costs for everyone.
      </p>
      
      <form className="share-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleType">Vehicle Type</label>
          <select 
            id="vehicleType" 
            name="vehicleType" 
            value={formData.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="">Select vehicle type</option>
            <option value="truck">Truck</option>
            <option value="tractor">Tractor with Trailer</option>
            <option value="pickup">Pickup Truck</option>
            <option value="minivan">Minivan</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="capacity">Capacity (tons)</label>
          <input 
            type="number" 
            id="capacity" 
            name="capacity" 
            value={formData.capacity}
            onChange={handleChange}
            min="0.5"
            step="0.5"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="availableDate">Available Date</label>
            <input 
              type="date" 
              id="availableDate" 
              name="availableDate" 
              value={formData.availableDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="availableTime">Available Time</label>
            <input 
              type="time" 
              id="availableTime" 
              name="availableTime" 
              value={formData.availableTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="route">Route/Area</label>
          <input 
            type="text" 
            id="route" 
            name="route" 
            value={formData.route}
            onChange={handleChange}
            placeholder="From Village A to Market X"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contactInfo">Contact Information</label>
          <input 
            type="text" 
            id="contactInfo" 
            name="contactInfo" 
            value={formData.contactInfo}
            onChange={handleChange}
            placeholder="Phone number or email"
            required
          />
        </div>
        
        <button type="submit" className="submit-btn">Offer Space</button>
      </form>
    </div>
  );
};

export default ShareTransport;