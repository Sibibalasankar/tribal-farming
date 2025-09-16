import { motion } from 'framer-motion';
import '../styles/TransportPooling.css';

const TransportPooling = () => {
  const transportOptions = [
    {
      title: 'Available Transports',
      description: 'View available transportation options in your area.',
      image: 'https://source.unsplash.com/300x200/?truck',
      buttonText: 'View Options'
    },
    {
      title: 'Share Your Transport',
      description: 'Have extra space? Offer it to other farmers.',
      image: 'https://source.unsplash.com/300x200/?delivery',
      buttonText: 'Offer Space'
    },
    {
      title: 'Schedule Pickup',
      description: 'Plan your transportation in advance.',
      image: 'https://source.unsplash.com/300x200/?calendar',
      buttonText: 'Schedule Now'
    }
  ];

  return (
    <div className="transport-pooling-page">
      {/* Animated background */}
      <div className="bg-animation">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="transport-container">
        <motion.h1 
          className="transport-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transport Pooling
        </motion.h1>
        
        <motion.p 
          className="transport-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Connect with other farmers to share transportation to markets. Reduce costs and environmental impact.
        </motion.p>
        
        <motion.div 
          className="transport-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {transportOptions.map((option, index) => (
            <motion.div 
              key={index}
              className="transport-card-modern"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={option.image} alt={option.title} className="transport-card-image" />
              <div className="transport-card-content">
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <button className="modern-cta-btn">{option.buttonText}</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TransportPooling;