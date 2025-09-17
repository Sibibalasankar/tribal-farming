import { motion } from 'framer-motion';
import '../styles/CropInfo.css'; // Modern theme CSS

const CropInfo = () => {
  const crops = [
    { name: 'Millet', image: '/crop/Millet.jpg', price: '₹200/kg', season: 'Monsoon' },
    { name: 'Buckwheat', image: '/crop/Buckwheat.jpg', price: '₹250/kg', season: 'Winter' },
    { name: 'Quinoa', image: '/crop/Quinoa.jpg', price: '₹350/kg', season: 'Summer' },
    { name: 'Barley', image: '/crop/Barley.jpg', price: '₹150/kg', season: 'Winter' },
    { name: 'Lentils', image: '/crop/Lentils.jpg', price: '₹180/kg', season: 'Winter' },
    { name: 'Herbs', image: '/crop/Herbs.jpg', price: '₹400/kg', season: 'Spring' },
    { name: 'Wheat', image: '/crop/Wheat.jpg', price: '₹220/kg', season: 'Rabi' },
    { name: 'Maize', image: '/crop/Maize.png', price: '₹210/kg', season: 'Kharif' },
    { name: 'Rice', image: '/crop/rice.jpg', price: '₹30/kg', season: 'Rabi' },
    { name: 'Tomatoes', image: '/crop/Tomato.jpg', price: '₹50/kg', season: 'All Seasons' },
    { name: 'Potatoes', image: '/crop/Potato.jpg', price: '₹40/kg', season: 'All Seasons' },
    { name: 'Spinach', image: '/crop/Lentils.jpg', price: '₹60/kg', season: 'Monsoon' },
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

        {/* Price disclaimer */}
        <motion.p 
          className="price-disclaimer fade-in-element"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ⚠️ Prices are indicative. Future updates will reflect live market rates.
        </motion.p>

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
