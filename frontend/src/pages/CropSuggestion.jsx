import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/CropSuggestion.css'; // Import the modern CSS

const ModernCropSuggestion = () => {
  const [selectedSoil, setSelectedSoil] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const soilTypes = [
    { id: 'clay', name: 'Clay Soil', icon: '🟫', description: 'Heavy soil with high water retention' },
    { id: 'sandy', name: 'Sandy Soil', icon: '🟨', description: 'Light soil with good drainage' },
    { id: 'loamy', name: 'Loamy Soil', icon: '🟧', description: 'Balanced soil with good nutrients' },
    { id: 'rocky', name: 'Rocky Soil', icon: '⛰️', description: 'Soil with many rocks, common in hills' }
  ];

  const seasons = [
    { id: 'spring', name: 'Spring', icon: '🌼', description: 'Moderate temperature, rainfall' },
    { id: 'summer', name: 'Summer', icon: '☀️', description: 'Hot, dry conditions' },
    { id: 'monsoon', name: 'Monsoon', icon: '🌧️', description: 'Heavy rainfall period' },
    { id: 'winter', name: 'Winter', icon: '❄️', description: 'Cold temperatures' }
  ];

  const regions = [
    { id: 'foothills', name: 'Foothills', icon: '⛰️', description: 'Lower altitude hilly areas' },
    { id: 'midhills', name: 'Mid Hills', icon: '🏞️', description: 'Medium altitude areas' },
    { id: 'highhills', name: 'High Hills', icon: '🗻', description: 'High altitude mountainous areas' }
  ];

  const cropData = {
    clay: {
      spring: ['Rice', 'Wheat', 'Barley'],
      summer: ['Cotton', 'Sugarcane', 'Sorghum'],
      monsoon: ['Rice', 'Maize', 'Soybean'],
      winter: ['Wheat', 'Mustard', 'Barley']
    },
    sandy: {
      spring: ['Carrot', 'Radish', 'Potato'],
      summer: ['Watermelon', 'Peanuts', 'Cassava'],
      monsoon: ['Corn', 'Beans', 'Pumpkin'],
      winter: ['Carrot', 'Onion', 'Garlic']
    },
    loamy: {
      spring: ['Tomato', 'Cucumber', 'Lettuce'],
      summer: ['Corn', 'Beans', 'Squash'],
      monsoon: ['Rice', 'Soybean', 'Peanuts'],
      winter: ['Wheat', 'Barley', 'Peas']
    },
    rocky: {
      spring: ['Millet', 'Buckwheat', 'Herbs'],
      summer: ['Sorghum', 'Sunflower', 'Quinoa'],
      monsoon: ['Millet', 'Beans', 'Pumpkin'],
      winter: ['Barley', 'Mustard', 'Lentils']
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSoil && selectedSeason && selectedRegion) {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would be an AI API call
      const suggestedCrops = cropData[selectedSoil][selectedSeason];
      
      // Add some details for each crop
      const resultsWithDetails = suggestedCrops.map(crop => ({
        name: crop,
        image: `https://source.unsplash.com/300x300/?${crop.toLowerCase()},agriculture`,
        suitability: 'High',
        water: 'Moderate',
        harvest: '90-120 days',
        price: '$' + (Math.random() * 5 + 1).toFixed(2) + '/kg'
      }));
      
      setResults(resultsWithDetails);
      setIsLoading(false);
    }
  };

  return (
    <div className="crop-suggestion-page">
      {/* Background Animation */}
      <div className="bg-animation">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="modern-container">
        <motion.h1 
          className="modern-page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI Crop Intelligence
        </motion.h1>
        
        <p className="page-subtitle">
          Neural network-powered crop selection using real-time environmental data, soil analysis, and climate patterns optimized for mountainous terrain.
        </p>
        
        <motion.div 
          className="modern-form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="input-section">
              <div className="section-label">Select Soil Type</div>
              <div className="modern-option-grid">
                {soilTypes.map(soil => (
                  <div 
                    key={soil.id}
                    className={`modern-option-card ${selectedSoil === soil.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSoil(soil.id)}
                  >
                    <div className="option-icon-modern">{soil.icon}</div>
                    <div className="option-content">
                      <h4 className="option-title">{soil.name}</h4>
                      <p className="option-description">{soil.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="input-section">
              <div className="section-label">Select Season</div>
              <div className="modern-option-grid">
                {seasons.map(season => (
                  <div 
                    key={season.id}
                    className={`modern-option-card ${selectedSeason === season.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSeason(season.id)}
                  >
                    <div className="option-icon-modern">{season.icon}</div>
                    <div className="option-content">
                      <h4 className="option-title">{season.name}</h4>
                      <p className="option-description">{season.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="input-section">
              <div className="section-label">Select Region Type</div>
              <div className="modern-option-grid">
                {regions.map(region => (
                  <div 
                    key={region.id}
                    className={`modern-option-card ${selectedRegion === region.id ? 'selected' : ''}`}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <div className="option-icon-modern">{region.icon}</div>
                    <div className="option-content">
                      <h4 className="option-title">{region.name}</h4>
                      <p className="option-description">{region.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="modern-submit-btn"
              disabled={!selectedSoil || !selectedSeason || !selectedRegion || isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  Analyzing Conditions...
                </>
              ) : (
                'Generate AI Recommendations'
              )}
            </button>
          </form>

          {results.length > 0 && (
            <motion.div 
              className="modern-results-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="results-title">AI-Powered Recommendations</h3>
              <div className="crop-results-grid">
                {results.map((crop, index) => (
                  <motion.div 
                    key={index}
                    className="modern-crop-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="crop-card-header">
                      <img src={crop.image} alt={crop.name} className="modern-crop-image" />
                      <h3 className="crop-title">{crop.name}</h3>
                    </div>
                    <div className="crop-stats">
                      <div className="stat-item">
                        <span className="stat-label">Suitability:</span>
                        <span className="stat-value">{crop.suitability}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Water Needs:</span>
                        <span className="stat-value">{crop.water}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Harvest Time:</span>
                        <span className="stat-value">{crop.harvest}</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-label">Market Price:</span>
                        <span className="stat-value">{crop.price}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ModernCropSuggestion;