import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main-content {
          flex: 1;
          padding-top: 80px; /* Account for fixed header */
        }

        /* Responsive padding for mobile */
        @media (max-width: 768px) {
          .main-content {
            padding-top: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;