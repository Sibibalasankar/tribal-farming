    import { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import '../styles/Landing.css'; // Import the modern CSS

    const ModernLanding = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 100;
        setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        // Observe all elements with fade-in class
        const fadeElements = document.querySelectorAll('.fade-in-element');
        fadeElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
        });

        return () => {
        fadeElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className="landing-page">
        {/* Background Animation */}
        <div className="bg-animation">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
        </div>

        

        {/* Hero Section */}
        <section className="modern-hero">
            <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title fade-in-element">
                Next-Gen
                <br />
                Farming
                <br />
                Intelligence
                </h1>
                <p className="hero-subtitle fade-in-element">
                Empowering tribal communities with cutting-edge AI technology for precision agriculture, sustainable farming, and market optimization in challenging terrain.
                </p>
                <Link to="/crop-suggestion" className="modern-cta fade-in-element">
                Launch Platform
                </Link>
            </div>
            
            <div className="hero-image-container fade-in-element">
                <img 
                src="/intro.png" 
                alt="Advanced Tribal Farming Technology" 
                className="hero-image-main"
                />
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="modern-features">
            <div className="features-container">
            <div className="section-header fade-in-element">
                <h2 className="section-title">Revolutionary Capabilities</h2>
                <p className="section-description">
                Advanced AI-driven solutions designed specifically for the unique challenges of hill-based tribal farming communities.
                </p>
            </div>
            
            <div className="features-grid">
                <div className="modern-feature-card fade-in-element">
                <span className="feature-icon-modern">🧠</span>
                <h3 className="feature-title">AI Crop Intelligence</h3>
                <p className="feature-description">
                    Neural network-powered crop selection using real-time environmental data, soil analysis, and climate patterns optimized for mountainous terrain.
                </p>
                <Link to="/crop-suggestion" className="feature-cta">
                    Access AI Engine
                </Link>
                </div>
                
                <div className="modern-feature-card fade-in-element">
                <span className="feature-icon-modern">🚀</span>
                <h3 className="feature-title">Smart Logistics Network</h3>
                <p className="feature-description">
                    Dynamic transport pooling algorithm that connects farmers across remote locations, optimizing routes and reducing costs through collaborative logistics.
                </p>
                <Link to="/transport-pooling" className="feature-cta">
                    Join Network
                </Link>
                </div>
                
                <div className="modern-feature-card fade-in-element">
                <span className="feature-icon-modern">📈</span>
                <h3 className="feature-title">Market Analytics Hub</h3>
                <p className="feature-description">
                    Real-time market intelligence with predictive pricing models, demand forecasting, and strategic timing recommendations for maximum profitability.
                </p>
                <Link to="/crop-info" className="feature-cta">
                    View Analytics
                </Link>
                </div>
            </div>
            </div>
        </section>

        {/* Modern Footer */}
        <footer className="modern-footer">
            <div className="footer-container">
            <div className="footer-content fade-in-element">
                <h3 className="footer-title">TribalFarm AI</h3>
                <p className="footer-description">
                Bridging traditional wisdom with cutting-edge technology to create sustainable, profitable farming solutions for tribal hill communities worldwide.
                </p>
            </div>
            <div className="footer-bottom">
                © 2024 TribalFarm AI. Advanced Agricultural Intelligence Platform.
            </div>
            </div>
        </footer>
        </div>
    );
    };

    export default ModernLanding;