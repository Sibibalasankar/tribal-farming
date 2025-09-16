import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/TransportComponents.css';

const AvailableTransports = () => {
  const [transports] = useState([
    {
      id: 1,
      type: 'Pickup Truck',
      capacity: '1.5 tons',
      owner: 'Rajesh Kumar',
      location: 'Village A, 5km away',
      availableDate: 'Today, 2:00 PM',
      rating: 4.5
    },
    {
      id: 2,
      type: 'Tractor with Trailer',
      capacity: '3 tons',
      owner: 'Suresh Patel',
      location: 'Village B, 8km away',
      availableDate: 'Tomorrow, 9:00 AM',
      rating: 4.2
    },
    {
      id: 3,
      type: 'Mini Truck',
      capacity: '2 tons',
      owner: 'Anita Sharma',
      location: 'Village C, 3km away',
      availableDate: 'Today, 5:00 PM',
      rating: 4.8
    }
  ]);

  return (
    <div className="component-container">
      <h2>Available Transports</h2>
      <div className="transports-list">
        {transports.map(transport => (
          <motion.div 
            key={transport.id}
            className="transport-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="transport-info">
              <h3>{transport.type}</h3>
              <p><strong>Capacity:</strong> {transport.capacity}</p>
              <p><strong>Owner:</strong> {transport.owner}</p>
              <p><strong>Location:</strong> {transport.location}</p>
              <p><strong>Available:</strong> {transport.availableDate}</p>
              <p><strong>Rating:</strong> {transport.rating} ★</p>
            </div>
            <button className="select-btn">Select Transport</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTransports;