import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';
import { useTheme } from './ThemeContext';  
import './Navbar.css';
import logo from '../components/images/LogoCandiclie.png';

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const { theme, toggleTheme } = useTheme();  

  const toggleServicesMenu = () => {
    setShowServices(!showServices);
  };

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleServiceClick = () => {
    setShowServices(true);
  };

  return (
    <div className={`navbar ${isMobile ? 'mobile' : 'desktop'} page-content ${theme}`}>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
        <h2>All Solution At One Place</h2>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <FaBars />
      </div>


        {/* Theme toggle button */}
        <div className="theme-toggle">
  <button onClick={toggleTheme}>
    <span className="sun-icon">☀️</span>
    <span className="moon-icon">🌙</span>
  </button>
</div>


      {/* Mobile menu */}
      <nav className={`menu ${isMobile ? 'show' : ''}`}>
        <div className="close-menu" onClick={toggleMobileMenu}>
          ✖
        </div>
        <div className="menu-item-container">
          <div className="menu-item">
            <Link to="/">Home</Link>
          </div>
          <div className="menu-item">
            <Link to="/">About Us</Link>
          </div>
          <div className="menu-item services-dropdown" onClick={toggleServicesMenu}>
            <span className="text">Our Services</span>
            <span className="icon">{showServices ? <FaChevronUp /> : <FaChevronDown />}</span>
            <div className={`submenu ${showServices ? 'show' : ''}`}>
              <Link to="/services/it-consulting" className="submenu-item" onClick={handleServiceClick}>
                IT Services and Consulting
              </Link>
              <Link to="/services/recruitment" className="submenu-item" onClick={handleServiceClick}>
                Recruitment
              </Link>
              <Link to="/services/digital-marketing" className="submenu-item" onClick={handleServiceClick}>
                Digital Marketing
              </Link>
              <Link to="/services/business-consulting" className="submenu-item" onClick={handleServiceClick}>
                Business Consulting
              </Link>
            </div>
          </div>
          <div className="menu-item">
            <Link to="/career">Career</Link>
          </div>
          <div className="menu-item">
            <Link to="/career">Partnership</Link>
          </div>
          
          <div className="menu-item">
            <Link to="/blogs">Blogs</Link>
          </div>
          <div className="menu-item">
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </nav>

    

      
    </div>
  );
};

export default Navbar;
