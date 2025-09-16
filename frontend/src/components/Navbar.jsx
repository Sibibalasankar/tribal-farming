// src/components/Navbar.js
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Landing.css";
import Logo from "/logo-title.png"; // Make sure the path is correct

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <nav className={`modern-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo Image */}
        <Link to="/" className="modern-logo">
          <img src={Logo} alt="TribalFarm AI" className="logo-image" />
        </Link>

        <ul className="modern-nav-links">
          <li><Link to="/crop-suggestion">{t("cropAI")}</Link></li>
          <li><Link to="/transport-pooling">{t("transport")}</Link></li>
          <li><Link to="/crop-info">{t("market")}</Link></li>
          <li><Link to="/about">{t("about")}</Link></li>
          <li>
            <select value={language} onChange={handleLanguageChange} className="lang-select">
              <option value="en">English</option>
              <option value="ta">தமிழ்</option>
              <option value="ml">മലയാളം</option>
              <option value="hi">हिन्दी</option>
            </select>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <Link to="/crop-suggestion" onClick={() => setMenuOpen(false)}>{t("cropAI")}</Link>
        <Link to="/transport-pooling" onClick={() => setMenuOpen(false)}>{t("transport")}</Link>
        <Link to="/crop-info" onClick={() => setMenuOpen(false)}>{t("market")}</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>{t("about")}</Link>
        <select value={language} onChange={handleLanguageChange} className="lang-select">
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
          <option value="ml">മലയാളം</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
