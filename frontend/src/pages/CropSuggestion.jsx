import { useState } from 'react';
import '../styles/CropSuggestion.css'; // Import the modern CSS

const ModernCropSuggestion = () => {
  const [selectedSoil, setSelectedSoil] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Soil types
  const soilTypes = [
    { 
      id: 'clay', 
      name: 'Clay Soil', 
      image: '/soil/clay.png',
      description: 'Heavy soil with high water retention' 
    },
    { 
      id: 'sandy', 
      name: 'Sandy Soil', 
      image: '/soil/sandy1.png',
      description: 'Light soil with good drainage' 
    },
    { 
      id: 'loamy', 
      name: 'Loamy Soil', 
      image: '/soil/loamy.png',
      description: 'Balanced soil with good nutrients' 
    },
    { 
      id: 'rocky', 
      name: 'Rocky Soil', 
      image: '/soil/blacksoil.png',
      description: 'Soil with many rocks, common in hills' 
    }
  ];

  // Seasons
  const seasons = [
    { id: 'spring', name: 'Spring', image: '/season/spring.jpg', description: 'Moderate temperature, rainfall' },
    { id: 'summer', name: 'Summer', image: '/season/summer.jpg', description: 'Hot, dry conditions' },
    { id: 'monsoon', name: 'Monsoon', image: '/season/monsoon.png', description: 'Heavy rainfall period' },
    { id: 'winter', name: 'Winter', image: '/season/winter.png', description: 'Cold temperatures' }
  ];

  // Regions
  const regions = [
    { id: 'foothills', name: 'Foothills', image: '/region/foothill.png', description: 'Lower altitude hilly areas' },
    { id: 'midhills', name: 'Mid Hills', image: '/region/midhills.png', description: 'Medium altitude areas' },
    { id: 'highhills', name: 'High Hills', image: '/region/highhills.png', description: 'High altitude mountainous areas' }
  ];

  // Crop data mapping (soil + season)
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

  // Crop images mapping
const cropImages = {
  Rice: '/crop/rice.jpg',
  Wheat: '/crop/Wheat.jpg',
  Barley: '/crop/Barley.jpg',
  Cotton: '/crop/Cotton.jpeg',
  Sugarcane: '/crop/Sugarcane.jpg',
  Sorghum: '/crop/Sorghum.jpg',
  Maize: '/crop/Maize.png',
  Soybean: '/crop/Soybean.jpg',
  Mustard: '/crop/Mustard.jpg',
  Carrot: '/crop/Carrot.jpg',
  Radish: '/crop/Radish.jpg',
  Potato: '/crop/Potato.jpg',
  Watermelon: '/crop/Watermelon.jpg',
  Peanuts: '/crop/Peanuts.jpg',
  Cassava: '/crop/Cassava.jpg',
  Corn: '/crop/corn.jpg',
  Beans: '/crop/Beans.jpg',
  Pumpkin: '/crop/Pumpkin.jpg',
  Onion: '/crop/Onion.jpg',
  Garlic: '/crop/Garlic.jpg',
  Tomato: '/crop/Tomato.jpg',
  Cucumber: '/crop/Cucumber.jpg',
  Lettuce: '/crop/Lettuce.jpg',
  Squash: '/crop/Squash.jpg',
  Peas: '/crop/Peas.jpg',
  Millet: '/crop/Millet.jpg',
  Buckwheat: '/crop/Buckwheat.jpg',
  Herbs: '/crop/Herbs.jpg',
  Sunflower: '/crop/Sunflower.jpg',
  Quinoa: '/crop/Quinoa.jpg',
  Lentils: '/crop/Lentils.jpg'
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSoil && selectedSeason && selectedRegion) {
      setIsLoading(true);

      await new Promise(resolve => setTimeout(resolve, 1500)); // simulate API delay

      const suggestedCrops = cropData[selectedSoil][selectedSeason];

      const resultsWithDetails = suggestedCrops.map(crop => ({
        name: crop,
        image: cropImages[crop] || 'https://placehold.co/300x300?text=Crop',
        suitability: 'High',
        water: 'Moderate',
        harvest: '90-120 days',
        price: '₹' + (Math.random() * 5 + 1).toFixed(2) + '/kg'
      }));

      setResults(resultsWithDetails);
      setIsLoading(false);
    }
  };

  return (
    <div className="crop-suggestion-page">
      <div className="bg-animation">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="modern-container">
        <h1 className="modern-page-title">AI Crop Intelligence</h1>
        
        <p className="page-subtitle">
          Neural network-powered crop selection using real-time environmental data, soil analysis, and climate patterns optimized for mountainous terrain.
        </p>
        
        <div className="modern-form-container">
          <form onSubmit={handleSubmit}>
            {/* Soil Selection */}
            <div className="input-section">
              <div className="section-label">Select Soil Type</div>
              <div className="modern-option-grid">
                {soilTypes.map(soil => (
                  <div 
                    key={soil.id}
                    className={`modern-option-card ${selectedSoil === soil.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSoil(soil.id)}
                  >
                    <div className="option-image-container">
                      <img 
                        src={soil.image} 
                        alt={soil.name}
                        className="option-image"
                        onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=Soil'; }}
                      />
                    </div>
                    <div className="option-content">
                      <h4 className="option-title">{soil.name}</h4>
                      <p className="option-description">{soil.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Season Selection */}
            <div className="input-section">
              <div className="section-label">Select Season</div>
              <div className="modern-option-grid">
                {seasons.map(season => (
                  <div 
                    key={season.id}
                    className={`modern-option-card ${selectedSeason === season.id ? 'selected' : ''}`}
                    onClick={() => setSelectedSeason(season.id)}
                  >
                    <div className="option-image-container">
                      <img 
                        src={season.image} 
                        alt={season.name}
                        className="option-image"
                        onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=Season'; }}
                      />
                    </div>
                    <div className="option-content">
                      <h4 className="option-title">{season.name}</h4>
                      <p className="option-description">{season.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Region Selection */}
            <div className="input-section">
              <div className="section-label">Select Region Type</div>
              <div className="modern-option-grid">
                {regions.map(region => (
                  <div 
                    key={region.id}
                    className={`modern-option-card ${selectedRegion === region.id ? 'selected' : ''}`}
                    onClick={() => setSelectedRegion(region.id)}
                  >
                    <div className="option-image-container">
                      <img 
                        src={region.image} 
                        alt={region.name}
                        className="option-image"
                        onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=Region'; }}
                      />
                    </div>
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

          {/* Results */}
          {results.length > 0 && (
            <div className="modern-results-container">
              <h3 className="results-title">AI-Powered Recommendations</h3>
              <div className="crop-results-grid">
                {results.map((crop, index) => (
                  <div key={index} className="modern-crop-card">
                    <div className="crop-card-header">
                      <img 
                        src={crop.image} 
                        alt={crop.name} 
                        className="modern-crop-image" 
                        onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=Crop'; }}
                      />
                      <h3 className="crop-title">{crop.name}</h3>
                    </div>
                    <div className="crop-stats">
                      <div className="stat-item"><span className="stat-label">Suitability:</span> <span className="stat-value">{crop.suitability}</span></div>
                      <div className="stat-item"><span className="stat-label">Water Needs:</span> <span className="stat-value">{crop.water}</span></div>
                      <div className="stat-item"><span className="stat-label">Harvest Time:</span> <span className="stat-value">{crop.harvest}</span></div>
                      <div className="stat-item"><span className="stat-label">Market Price:</span> <span className="stat-value">{crop.price}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernCropSuggestion;
