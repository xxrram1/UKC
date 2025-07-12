import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const serviceLinks = [
    { to: '/services/web-design', label: 'Web Design' },
    { to: '/services/e-commerce', label: 'E-commerce' },
    { to: '/services/app-development', label: 'App Development' },
    { to: '/services/e-learning', label: 'E-Learning' },
    { to: '/services/graphic-design', label: 'Graphic Design' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <span className="logo-text">Unknowcallback</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item services-dropdown">
                <button 
                  className="nav-link dropdown-toggle"
                  onClick={toggleServicesDropdown}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  Services
                  <FaChevronDown className="dropdown-icon" />
                </button>
                <ul 
                  className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {serviceLinks.map((service) => (
                    <li key={service.to}>
                      <Link 
                        to={service.to} 
                        className={`dropdown-link ${isActive(service.to) ? 'active' : ''}`}
                        onClick={closeMenu}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link 
                  to="/pricing" 
                  className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header-cta">
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'show' : ''}`}>
          <ul className="mobile-menu">
            <li className="mobile-item">
              <Link 
                to="/" 
                className={`mobile-link ${isActive('/') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="mobile-item">
              <button 
                className="mobile-link dropdown-toggle"
                onClick={toggleServicesDropdown}
              >
                Services
                <FaChevronDown className={`dropdown-icon ${isServicesDropdownOpen ? 'rotate' : ''}`} />
              </button>
              <ul className={`mobile-dropdown ${isServicesDropdownOpen ? 'show' : ''}`}>
                {serviceLinks.map((service) => (
                  <li key={service.to}>
                    <Link 
                      to={service.to} 
                      className={`mobile-dropdown-link ${isActive(service.to) ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mobile-item">
              <Link 
                to="/pricing" 
                className={`mobile-link ${isActive('/pricing') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>
            <li className="mobile-item">
              <Link 
                to="/contact" 
                className={`mobile-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: var(--color-black);
          transition: var(--transition-base);
          border-bottom: 1px solid transparent;
        }

        .header-scrolled {
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          border-bottom-color: var(--color-dark-gray);
          box-shadow: var(--shadow-lg);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          flex-shrink: 0;
        }

        .logo-text {
          font-size: var(--font-size-2xl);
          font-weight: 700;
          color: var(--color-white);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .logo-text:hover {
          color: var(--color-electric-blue);
        }

        .desktop-nav {
          display: none;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: var(--color-white);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
          padding: 0.5rem 0;
          border: none;
          background: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-electric-blue);
        }

        .dropdown-toggle {
          background: none;
          border: none;
          font-size: var(--font-size-base);
          font-family: var(--font-family);
        }

        .dropdown-icon {
          font-size: 0.75rem;
          transition: var(--transition-fast);
        }

        .services-dropdown:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: var(--color-dark-gray);
          min-width: 200px;
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-xl);
          list-style: none;
          padding: 0.5rem 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: var(--transition-base);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--color-white);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .dropdown-link:hover,
        .dropdown-link.active {
          background-color: var(--color-electric-blue);
          color: var(--color-white);
        }

        .header-cta {
          display: none;
        }

        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: none;
          border: none;
          color: var(--color-white);
          font-size: 1.25rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mobile-menu-btn:hover {
          color: var(--color-electric-blue);
        }

        .mobile-nav {
          display: block;
          background-color: var(--color-dark-gray);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }

        .mobile-nav.show {
          max-height: 500px;
        }

        .mobile-menu {
          list-style: none;
          padding: 1rem 0;
        }

        .mobile-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-item:last-child {
          border-bottom: none;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          color: var(--color-white);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
          border: none;
          background: none;
          width: 100%;
          cursor: pointer;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: var(--color-electric-blue);
        }

        .mobile-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background-color: rgba(0, 0, 0, 0.3);
          list-style: none;
        }

        .mobile-dropdown.show {
          max-height: 300px;
        }

        .mobile-dropdown-link {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--color-text-light);
          text-decoration: none;
          transition: var(--transition-fast);
          border-left: 3px solid transparent;
        }

        .mobile-dropdown-link:hover,
        .mobile-dropdown-link.active {
          color: var(--color-electric-blue);
          border-left-color: var(--color-electric-blue);
        }

        .rotate {
          transform: rotate(180deg);
        }

        /* Desktop Styles */
        @media (min-width: 769px) {
          .desktop-nav {
            display: block;
          }

          .header-cta {
            display: block;
          }

          .mobile-menu-btn {
            display: none;
          }

          .mobile-nav {
            display: none;
          }
        }

        /* Tablet Styles */
        @media (min-width: 481px) and (max-width: 768px) {
          .nav-menu {
            gap: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;