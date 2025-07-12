import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Service Pages
import WebDesign from './pages/services/WebDesign';
import ECommerce from './pages/services/ECommerce';
// import AppDevelopment from './pages/services/AppDevelopment';
// import ELearning from './pages/services/ELearning';
// import GraphicDesign from './pages/services/GraphicDesign';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service Routes */}
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/e-commerce" element={<ECommerce />} />
          {/* <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/e-learning" element={<ELearning />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} /> */}
          
          {/* Fallback Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
