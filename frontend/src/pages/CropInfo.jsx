import { motion } from 'framer-motion';
import '../styles/CropInfo.css'; // Import the new modern theme CSS

const CropInfo = () => {
  const crops = [
    { name: 'Millet', image: 'https://source.unsplash.com/300x300/?millet', price: '$2.50/kg', season: 'Monsoon' },
    { name: 'Buckwheat', image: 'https://source.unsplash.com/300x300/?buckwheat', price: '$3.20/kg', season: 'Winter' },
    { name: 'Quinoa', image: 'https://source.unsplash.com/300x300/?quinoa', price: '$4.75/kg', season: 'Summer' },
    { name: 'Barley', image: 'https://source.unsplash.com/300x300/?barley', price: '$1.80/kg', season: 'Winter' },
    { name: 'Lentils', image: 'https://source.unsplash.com/300x300/?lentils', price: '$2.10/kg', season: 'Winter' },
    { name: 'Herbs', image: 'https://source.unsplash.com/300x300/?herbs', price: '$5.00/kg', season: 'Spring' },
  ];

  return (
    <div className="crop-info-page">
      {/* Animated background */}
      <div className="bg-animation">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="crop-info-container">
        <motion.h1 
          className="crop-info-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Crop Information & Market Prices
        </motion.h1>

        <motion.div 
          className="crop-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {crops.map((crop, index) => (
            <motion.div 
              key={index}
              className="crop-card-modern"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={crop.image} alt={crop.name} className="crop-card-image" />
              <div className="crop-card-content">
                <h3>{crop.name}</h3>
                <p><span className="label">Price:</span> {crop.price}</p>
                <p><span className="label">Best Season:</span> {crop.season}</p>
                <button className="modern-cta-btn">View Details</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CropInfo;
