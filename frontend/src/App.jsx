import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // ✅ Import new Navbar
import Landing from './pages/Landing';
import CropSuggestion from './pages/CropSuggestion';
import TransportPooling from './pages/TransportPooling';
import CropInfo from './pages/CropInfo';
import About from './components/About';
import './index.css';
import "./i18n";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/crop-suggestion" element={<CropSuggestion />} />
          <Route path="/transport-pooling" element={<TransportPooling />} />
          <Route path="/crop-info" element={<CropInfo />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
