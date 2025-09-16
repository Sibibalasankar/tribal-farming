import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Landing.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="modern-logo">
          TribalFarm AI
        </Link>

        {/* Desktop Links */}
        <ul className="modern-nav-links">
          <li><Link to="/crop-suggestion">Crop AI</Link></li>
          <li><Link to="/transport-pooling">Transport</Link></li>
          <li><Link to="/crop-info">Market Intel</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/crop-suggestion" onClick={toggleMenu}>Crop AI</Link>
        <Link to="/transport-pooling" onClick={toggleMenu}>Transport</Link>
        <Link to="/crop-info" onClick={toggleMenu}>Market Intel</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
