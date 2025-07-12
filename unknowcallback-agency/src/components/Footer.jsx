import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaLine } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Column 1: Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <Link to="/">
                <span className="logo-text">Unknowcallback</span>
              </Link>
            </div>
            <p className="footer-description">
              Digital Agency ครบวงจรที่เชี่ยวชาญด้านการออกแบบและพัฒนาเว็บไซต์, 
              E-commerce, แอปพลิเคชัน, แพลตฟอร์ม E-Learning และงานกราฟิกดีไซน์
            </p>
            <p className="footer-tagline">
              <strong>Complete! All in one place.</strong>
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-column">
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/services/web-design" className="footer-link">Web Design</Link>
              </li>
              <li>
                <Link to="/services/e-commerce" className="footer-link">E-commerce</Link>
              </li>
              <li>
                <Link to="/services/app-development" className="footer-link">App Development</Link>
              </li>
              <li>
                <Link to="/services/e-learning" className="footer-link">E-Learning</Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="footer-link">Graphic Design</Link>
              </li>
              <li>
                <Link to="/pricing" className="footer-link">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div className="footer-column">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li>
                <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Help Center</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Support</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="social-media">
              <a href="#" className="social-link" aria-label="Line">
                <FaLine />
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
            <div className="copyright">
              <p>&copy; {currentYear} Unknowcallback. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--color-black);
          color: var(--color-white);
          padding: var(--spacing-3xl) 0 var(--spacing-lg);
          border-top: 1px solid var(--color-dark-gray);
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-logo {
          margin-bottom: var(--spacing-md);
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

        .footer-description {
          color: var(--color-text-light);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .footer-tagline {
          color: var(--color-electric-blue);
          font-size: var(--font-size-lg);
        }

        .footer-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          margin-bottom: var(--spacing-md);
          color: var(--color-white);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: var(--spacing-sm);
        }

        .footer-link {
          color: var(--color-text-light);
          text-decoration: none;
          transition: var(--transition-fast);
          display: inline-block;
          padding: 0.25rem 0;
        }

        .footer-link:hover {
          color: var(--color-electric-blue);
          transform: translateX(5px);
        }

        .footer-bottom {
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--color-dark-gray);
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }

        .social-media {
          display: flex;
          gap: var(--spacing-md);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--color-dark-gray);
          color: var(--color-white);
          border-radius: 50%;
          text-decoration: none;
          transition: var(--transition-base);
          font-size: 1.1rem;
        }

        .social-link:hover {
          background-color: var(--color-electric-blue);
          color: var(--color-white);
          transform: translateY(-2px);
        }

        .copyright {
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
        }

        .copyright p {
          margin: 0;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .social-media {
            justify-content: center;
          }
        }

        /* Tablet Styles */
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop Styles */
        @media (min-width: 1025px) {
          .footer-content {
            grid-template-columns: 2fr 1fr 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;