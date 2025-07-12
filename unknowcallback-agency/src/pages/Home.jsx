import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaShoppingCart, 
  FaMobile, 
  FaGraduationCap, 
  FaPalette,
  FaLightbulb,
  FaPencilRuler,
  FaRocket,
  FaHeadset,
  FaArrowRight,
  FaQuoteLeft
} from 'react-icons/fa';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const typingTexts = [
    'Unknowcallback',
    'Digital Agency',
    'Complete Solutions'
  ];

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    let timeoutId;

    if (isTyping) {
      if (typingText.length < currentText.length) {
        timeoutId = setTimeout(() => {
          setTypingText(currentText.slice(0, typingText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typingText.length > 0) {
        timeoutId = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typingText, isTyping, currentTextIndex]);

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Design',
      description: 'สร้างเว็บไซต์ที่สวยงาม ใช้งานง่าย และตอบสนองทุกอุปกรณ์',
      link: '/services/web-design'
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce',
      description: 'ระบบร้านค้าออนไลน์ครบครัน พร้อมระบบชำระเงินที่ปลอดภัย',
      link: '/services/e-commerce'
    },
    {
      icon: <FaMobile />,
      title: 'App Development',
      description: 'พัฒนาแอปพลิเคชันมือถือ iOS และ Android ที่ทันสมัย',
      link: '/services/app-development'
    },
    {
      icon: <FaGraduationCap />,
      title: 'E-Learning',
      description: 'แพลตฟอร์มการเรียนรู้ออนไลน์ที่มีประสิทธิภาพ',
      link: '/services/e-learning'
    },
    {
      icon: <FaPalette />,
      title: 'Graphic Design',
      description: 'ออกแบบกราฟิกที่สร้างแบรนด์และดึงดูดใจ',
      link: '/services/graphic-design'
    }
  ];

  const processSteps = [
    {
      icon: <FaLightbulb />,
      title: 'Plan',
      description: 'วางแผน วิเคราะห์ Sitemap ตามกลุ่มเป้าหมาย'
    },
    {
      icon: <FaPencilRuler />,
      title: 'Design',
      description: 'ออกแบบ Key Visual และ Concept ให้ตรงตาม CI'
    },
    {
      icon: <FaRocket />,
      title: 'Develop',
      description: 'จัดทำเว็บไซต์ด้วยเทคโนโลยีที่เหมาะสม'
    },
    {
      icon: <FaHeadset />,
      title: 'Support',
      description: 'ดูแลเว็บไซต์ 1 ปีเต็ม ผ่าน Line/Email'
    }
  ];

  const clientLogos = [
    'Client Logo 1',
    'Client Logo 2',
    'Client Logo 3',
    'Client Logo 4',
    'Client Logo 5',
    'Client Logo 6'
  ];

  const testimonials = [
    {
      name: 'คุณสมชาย ใจดี',
      company: 'ABC Company',
      text: 'ทีม Unknowcallback ทำงานเป็นมืออาชีพมาก เว็บไซต์ออกมาสวยงามและใช้งานง่าย',
      rating: 5
    },
    {
      name: 'คุณสมหญิง รักงาน',
      company: 'XYZ Store',
      text: 'ระบบ E-commerce ที่ทำให้ช่วยเพิ่มยอดขายของเราขึ้นมาก ขอบคุณมากครับ',
      rating: 5
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-animation"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                <span className="typing-text">
                  {typingText}
                  <span className="cursor">|</span>
                </span>
              </h1>
              <p className="hero-tagline">Complete! All in one place.</p>
              <p className="hero-description">
                ครบ! จบที่เดียว - Digital Agency ที่ให้บริการครบวงจร
                ตั้งแต่ Web Design, E-commerce, App Development, E-Learning 
                ไปจนถึง Graphic Design
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  เริ่มต้นโปรเจกต์
                </Link>
                <Link to="/pricing" className="btn btn-secondary">
                  ดูแพ็กเกจ
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="process section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>Our Process</h2>
            <p>ขั้นตอนการทำงานที่เป็นระบบและมีประสิทธิภาพ</p>
          </motion.div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="process-step"
              >
                <div className="step-icon">
                  {step.icon}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="step-number">{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="services section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>Our Services</h2>
            <p>บริการครบวงจรที่ตอบสนองทุกความต้องการของธุรกิจ</p>
          </motion.div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="service-card"
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="clients section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>Trusted by Leading Companies</h2>
            <p>ความไว้วางใจจากลูกค้าที่ใช้บริการ</p>
          </motion.div>
          
          <div className="client-logos">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="client-logo"
              >
                <div className="logo-placeholder">
                  {logo}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="testimonial-card"
              >
                <div className="testimonial-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>Ready to elevate your business?</h2>
            <p>เริ่มต้นโปรเจกต์ของคุณวันนี้ รับใบเสนอราคาฟรี</p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .home {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(135deg, var(--color-black) 0%, var(--color-dark-gray) 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .hero-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(0, 123, 255, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(0, 123, 255, 0.3) 0%, transparent 50%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-title {
          font-size: var(--font-size-5xl);
          font-weight: 800;
          margin-bottom: var(--spacing-md);
          color: var(--color-white);
          line-height: 1.1;
        }

        .typing-text {
          display: inline-block;
          position: relative;
        }

        .cursor {
          display: inline-block;
          color: var(--color-electric-blue);
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-tagline {
          font-size: var(--font-size-2xl);
          color: var(--color-electric-blue);
          margin-bottom: var(--spacing-md);
          font-weight: 600;
        }

        .hero-description {
          font-size: var(--font-size-lg);
          color: var(--color-text-light);
          margin-bottom: var(--spacing-xl);
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: var(--font-size-lg);
        }

        /* Process Section */
        .process-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .process-step {
          display: flex;
          align-items: center;
          margin-bottom: var(--spacing-xl);
          position: relative;
        }

        .process-step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 40px;
          top: 80px;
          width: 2px;
          height: 40px;
          background: var(--color-electric-blue);
        }

        .step-icon {
          background: var(--color-electric-blue);
          color: var(--color-white);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-right: var(--spacing-lg);
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-content h3 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }

        .step-content p {
          color: var(--color-text-light);
          margin: 0;
        }

        .step-number {
          background: var(--color-dark-gray);
          color: var(--color-electric-blue);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: var(--font-size-lg);
          margin-left: var(--spacing-md);
        }

        /* Services Section */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .service-card {
          background: var(--color-black);
          border: 1px solid var(--color-dark-gray);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          text-align: center;
          transition: var(--transition-base);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--color-electric-blue);
          transform: scaleX(0);
          transition: var(--transition-base);
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--color-electric-blue);
        }

        .service-icon {
          background: var(--color-electric-blue);
          color: var(--color-white);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin: 0 auto var(--spacing-md);
        }

        .service-card h3 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }

        .service-card p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-md);
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          color: var(--color-electric-blue);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition-fast);
        }

        .service-link:hover {
          gap: var(--spacing-sm);
        }

        /* Clients Section */
        .client-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100px;
        }

        .logo-placeholder {
          background: var(--color-dark-gray);
          border: 2px dashed var(--color-text-muted);
          border-radius: var(--border-radius-md);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
          transition: var(--transition-base);
        }

        .logo-placeholder:hover {
          border-color: var(--color-electric-blue);
          color: var(--color-electric-blue);
        }

        .testimonials {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .testimonial-card {
          background: var(--color-dark-gray);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          position: relative;
        }

        .testimonial-icon {
          color: var(--color-electric-blue);
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
        }

        .testimonial-text {
          color: var(--color-text-light);
          font-style: italic;
          margin-bottom: var(--spacing-md);
          line-height: 1.6;
        }

        .testimonial-author h4 {
          color: var(--color-white);
          margin-bottom: var(--spacing-xs);
        }

        .testimonial-author p {
          color: var(--color-text-muted);
          margin: 0;
        }

        /* CTA Section */
        .cta {
          padding: var(--spacing-3xl) 0;
        }

        .cta-content h2 {
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
        }

        .cta-content p {
          color: var(--color-white);
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
        }

        /* Section Headers */
        .section-header {
          margin-bottom: var(--spacing-xl);
        }

        .section-header h2 {
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
        }

        .section-header p {
          color: var(--color-text-light);
          font-size: var(--font-size-lg);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: var(--font-size-4xl);
          }

          .hero-tagline {
            font-size: var(--font-size-xl);
          }

          .hero-description {
            font-size: var(--font-size-base);
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .process-step {
            flex-direction: column;
            text-align: center;
          }

          .step-icon {
            margin-right: 0;
            margin-bottom: var(--spacing-md);
          }

          .step-number {
            margin-left: 0;
            margin-top: var(--spacing-md);
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .testimonials {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;