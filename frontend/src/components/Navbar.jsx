import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Landing.css"; // Create a separate CSS file for styling (optional)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="modern-logo">
          TribalFarm AI
        </Link>
        <ul className="modern-nav-links">
          <li><Link to="/crop-suggestion">Crop AI</Link></li>
          <li><Link to="/transport-pooling">Transport</Link></li>
          <li><Link to="/crop-info">Market Intel</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
