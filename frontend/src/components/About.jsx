import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Sibi B S',
      role: 'Agricultural Expert',
      image: 'https://source.unsplash.com/300x300/?farmer',
      description: '10+ years experience in sustainable farming practices'
    },
    {
      name: 'Hariharan S',
      role: 'Technology Specialist',
      image: 'https://source.unsplash.com/300x300/?technologist',
      description: 'Bridging the gap between technology and agriculture'
    },
    {
      name: 'HariKrishnan S',
      role: 'Data Scientist',
      image: 'https://source.unsplash.com/300x300/?data-scientist',
      description: 'Expert in AI and predictive analytics for crop yields'
    },
    {
      name: 'Priyanka R',
      role: 'Community Manager',
      image: 'https://source.unsplash.com/300x300/?community-manager',
      description: 'Connecting farmers and building supportive communities'
    }
  ];

  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Our advanced algorithms analyze soil conditions, weather patterns, and market trends to provide personalized crop recommendations.',
      icon: '🤖'
    },
    {
      title: 'Sustainable Practices',
      description: 'We promote farming methods that protect the environment, conserve resources, and ensure long-term agricultural viability.',
      icon: '🌱'
    },
    {
      title: 'Community Focus',
      description: 'Our platform connects farmers, enabling knowledge sharing, resource pooling, and collective bargaining power.',
      icon: '👥'
    },
    {
      title: 'Market Access',
      description: 'We help farmers get better prices by connecting them directly with buyers and providing real-time market intelligence.',
      icon: '📊'
    }
  ];

  return (
    <div className="about-page">
      {/* Animated background */}
      <div className="bg-animation">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="about-container">
        <motion.h1 
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About TribalFarm AI
        </motion.h1>
        
        <motion.p 
          className="about-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering farmers with AI-driven insights and community support for sustainable agriculture
        </motion.p>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              TribalFarm AI was founded with a simple mission: to leverage technology for the benefit of farming communities. 
              We believe that by combining traditional farming wisdom with modern AI capabilities, we can help farmers increase yields, 
              reduce costs, and build more sustainable agricultural practices.
            </p>
            <p>
              Our platform provides farmers with data-driven insights, connects them with resources and markets, 
              and fosters a community where knowledge and experiences can be shared.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Offer</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-card-modern"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  className="team-card-modern"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={member.image} alt={member.name} className="team-card-image" />
                  <div className="team-card-content">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-description">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>Join Our Community</h2>
            <p>
              Whether you're a small-scale farmer, an agricultural expert, or simply passionate about sustainable farming, 
              there's a place for you in our community. Together, we can build a more resilient and prosperous future for agriculture.
            </p>
            <motion.button 
              className="modern-cta-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;