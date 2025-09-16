import { useState } from 'react';

const SchedulePickup = () => {
  const [pickupData, setPickupData] = useState({
    pickupDate: '',
    pickupTime: '',
    location: '',
    destination: '',
    goodsType: '',
    weight: '',
    specialRequirements: ''
  });

  const handleChange = (e) => {
    setPickupData({
      ...pickupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Pickup scheduled successfully!');
    setPickupData({
      pickupDate: '',
      pickupTime: '',
      location: '',
      destination: '',
      goodsType: '',
      weight: '',
      specialRequirements: ''
    });
  };

  return (
    <div className="component-container">
      <h2>Schedule a Pickup</h2>
      <p className="component-description">
        Plan your transportation in advance to ensure your produce reaches the market on time.
      </p>
      
      <form className="schedule-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="pickupDate">Pickup Date</label>
            <input 
              type="date" 
              id="pickupDate" 
              name="pickupDate" 
              value={pickupData.pickupDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pickupTime">Pickup Time</label>
            <input 
              type="time" 
              id="pickupTime" 
              name="pickupTime" 
              value={pickupData.pickupTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Pickup Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={pickupData.location}
            onChange={handleChange}
            placeholder="Your farm address"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input 
            type="text" 
            id="destination" 
            name="destination" 
            value={pickupData.destination}
            onChange={handleChange}
            placeholder="Market or destination address"
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="goodsType">Type of Goods</label>
            <select 
              id="goodsType" 
              name="goodsType" 
              value={pickupData.goodsType}
              onChange={handleChange}
              required
            >
              <option value="">Select goods type</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
              <option value="grains">Grains</option>
              <option value="dairy">Dairy Products</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="weight">Approximate Weight (kg)</label>
            <input 
              type="number" 
              id="weight" 
              name="weight" 
              value={pickupData.weight}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="specialRequirements">Special Requirements</label>
          <textarea 
            id="specialRequirements" 
            name="specialRequirements" 
            value={pickupData.specialRequirements}
            onChange={handleChange}
            placeholder="Any special handling instructions"
            rows="3"
          />
        </div>
        
        <button type="submit" className="submit-btn">Schedule Pickup</button>
      </form>
    </div>
  );
};

export default SchedulePickup;