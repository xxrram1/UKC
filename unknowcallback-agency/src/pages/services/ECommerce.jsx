import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaShoppingCart, 
  FaCreditCard, 
  FaShieldAlt, 
  FaChartLine, 
  FaTags, 
  FaUsers,
  FaCheck,
  FaStar,
  FaArrowRight,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const ECommerce = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const stats = [
    { number: '200+', label: 'ร้านค้าออนไลน์' },
    { number: '95%', label: 'เพิ่มยอดขาย' },
    { number: '24/7', label: 'รองรับการขาย' }
  ];

  const features = [
    {
      icon: <FaShoppingCart />,
      title: 'Product Management',
      description: 'ระบบจัดการสินค้าครบครัน อัปโหลดสินค้า จัดหมวดหมู่ และควบคุมสต็อกได้ง่าย'
    },
    {
      icon: <FaCreditCard />,
      title: 'Payment Gateway',
      description: 'รองรับการชำระเงินหลากหลายช่องทาง บัตรเครดิต โอนเงิน และ E-Wallet'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Secure Checkout',
      description: 'ระบบชำระเงินปลอดภัย SSL Certificate และเข้ารหัสข้อมูลลูกค้า'
    },
    {
      icon: <FaChartLine />,
      title: 'Sales Analytics',
      description: 'รายงานการขายแบบเรียลไทม์ วิเคราะห์ยอดขาย และพฤติกรรมลูกค้า'
    },
    {
      icon: <FaTags />,
      title: 'Promotion System',
      description: 'ระบบคูปอง โค้ดส่วนลด และโปรโมชันต่างๆ เพื่อเพิ่มยอดขาย'
    },
    {
      icon: <FaUsers />,
      title: 'Customer Management',
      description: 'ระบบจัดการลูกค้า ประวัติการสั่งซื้อ และระบบสมาชิกแบบครบครัน'
    }
  ];

  const portfolioItems = [
    {
      title: 'Fashion Online Store',
      description: 'ร้านค้าเสื้อผ้าออนไลน์ พร้อมระบบไซส์และสี',
      image: '/api/placeholder/600/400',
      category: 'Fashion'
    },
    {
      title: 'Electronics Store',
      description: 'ร้านขายอุปกรณ์อิเล็กทรอนิกส์ พร้อมระบบรีวิว',
      image: '/api/placeholder/600/400',
      category: 'Electronics'
    },
    {
      title: 'Food Delivery Platform',
      description: 'แพลตฟอร์มสั่งอาหารออนไลน์ พร้อมระบบจัดส่ง',
      image: '/api/placeholder/600/400',
      category: 'Food & Beverage'
    }
  ];

  const packages = [
    {
      name: 'Launch',
      price: '฿70,000+',
      description: 'สำหรับร้านค้าใหม่',
      popular: false,
      features: [
        'ตั้งค่าบน Shopify/WooCommerce',
        'ลงสินค้า 20-50 รายการ',
        'ระบบชำระเงินพื้นฐาน',
        'ระบบจัดการคำสั่งซื้อ',
        'ระบบสมาชิก',
        'SSL Certificate',
        'ดูแลระบบ 1 ปี',
        'Training การใช้งาน'
      ]
    },
    {
      name: 'Growth',
      price: '฿120,000+',
      description: 'สำหรับร้านค้าที่ต้องการเติบโต',
      popular: true,
      features: [
        'ทุกอย่างจากแพ็กเกจ Launch',
        'ดีไซน์เฉพาะตัว',
        'ฟีเจอร์โปรโมชัน/คูปอง',
        'เชื่อมต่อระบบขนส่ง',
        'ระบบรีวิวสินค้า',
        'SEO Optimization',
        'Google Analytics',
        'Mobile App พื้นฐาน'
      ]
    },
    {
      name: 'Scale',
      price: 'ติดต่อสอบถาม',
      description: 'สำหรับร้านค้าขนาดใหญ่',
      popular: false,
      features: [
        'ทุกอย่างจากแพ็กเกจ Growth',
        'เชื่อมต่อ API ภายนอก',
        'ระบบ POS',
        'ฟีเจอร์เฉพาะทาง',
        'Multi-vendor Support',
        'Advanced Analytics',
        'Priority Support',
        'Custom Development'
      ]
    }
  ];

  const faqItems = [
    {
      question: 'สามารถเชื่อมต่อกับระบบชำระเงินไหนได้บ้าง?',
      answer: 'รองรับหลายช่องทาง เช่น PayPal, Stripe, Omise, 2C2P, K-Payment และการโอนเงินผ่านธนาคาร'
    },
    {
      question: 'มีค่าธรรมเนียมการทำรายการหรือไม่?',
      answer: 'ไม่มีค่าธรรมเนียมจากทางเรา แต่ Payment Gateway แต่ละตัวจะมีค่าธรรมเนียมตามที่กำหนด'
    },
    {
      question: 'สามารถจัดการสินค้าเองได้หรือไม่?',
      answer: 'ได้ครับ มีระบบจัดการสินค้า (Admin Panel) ที่ใช้งานง่าย เพิ่ม ลบ แก้ไขสินค้าได้ด้วยตนเอง'
    },
    {
      question: 'รองรับการขายหลายช่องทางหรือไม่?',
      answer: 'ได้ครับ สามารถเชื่อมต่อกับ Facebook Shop, LINE Shopping และ Marketplace ต่างๆ'
    },
    {
      question: 'มีระบบจัดการคำสั่งซื้อหรือไม่?',
      answer: 'มีครับ ระบบจัดการคำสั่งซื้อแบบครบครัน ตั้งแต่รับออเดอร์ จนถึงจัดส่งสินค้า'
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="ecommerce-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-background">
          <div className="hero-animation"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>E-commerce Solutions</h1>
              <h2>Building E-commerce Powerhouses that Drive Unstoppable Sales.</h2>
              <p>
                สร้างร้านค้าออนไลน์ที่ไม่เพียงแค่ขายสินค้า แต่ยังสร้างประสบการณ์การช้อปปิ้งที่น่าประทับใจ
                พร้อมระบบจัดการที่ครบครันและปลอดภัย
              </p>
              <Link to="#packages" className="btn btn-primary btn-lg">
                View Packages
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction & Impact */}
      <section className="introduction section">
        <div className="container">
          <div className="intro-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="intro-content"
            >
              <h2>E-commerce ที่ขายได้จริง</h2>
              <p>
                ในยุคของการช้อปปิ้งออนไลน์ การมีร้านค้าออนไลน์ที่ดีไม่เพียงแค่ช่วยเพิ่มยอดขาย
                แต่ยังสร้างความสะดวกสบายให้ลูกค้าและลดต้นทุนในการดำเนินธุรกิจ
              </p>
              <p>
                เรามีประสบการณ์ในการสร้างร้านค้าออนไลน์ที่ประสบความสำเร็จมากมาย
                ด้วยระบบที่ครบครัน ปลอดภัย และใช้งานง่าย
                ทำให้ลูกค้าสามารถเริ่มต้นขายออนไลน์ได้ทันที
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="stats-grid"
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>ฟีเจอร์ E-commerce ที่ครบครัน</h2>
            <p>ระบบจัดการร้านค้าออนไลน์ที่ตอบโจทย์ทุกความต้องการ</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="portfolio section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>A Glimpse of Our Masterpieces</h2>
            <p>ร้านค้าออนไลน์ที่เราสร้างขึ้น</p>
          </motion.div>
          
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="portfolio-item"
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <span className="portfolio-category">{item.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="packages section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>E-commerce Packages</h2>
            <p>เลือกแพ็กเกจที่เหมาะกับขนาดธุรกิจของคุณ</p>
          </motion.div>
          
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`package-card ${pkg.popular ? 'popular' : ''}`}
              >
                {pkg.popular && (
                  <div className="popular-badge">
                    <FaStar />
                    Most Popular
                  </div>
                )}
                
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <p>{pkg.description}</p>
                </div>
                
                <div className="package-features">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <FaCheck className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="package-footer">
                  <Link 
                    to="/contact" 
                    className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-block`}
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>คำถามที่พบบ่อย</h2>
            <p>คำตอบสำหรับคำถามเกี่ยวกับบริการ E-commerce</p>
          </motion.div>
          
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="faq-item"
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  {expandedFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div className={`faq-answer ${expandedFaq === index ? 'expanded' : ''}`}>
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content text-center"
          >
            <h2>พร้อมเปิดร้านค้าออนไลน์ของคุณ?</h2>
            <p>ติดต่อเราวันนี้เพื่อสร้างร้านค้าออนไลน์ที่ขายได้จริง</p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              เริ่มต้นเลย <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .ecommerce-page {
          overflow-x: hidden;
        }

        /* Hero Banner */
        .hero-banner {
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
          background: 
            radial-gradient(circle at 20% 80%, rgba(0, 123, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 123, 255, 0.3) 0%, transparent 50%);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }

        .hero-content h1 {
          font-size: var(--font-size-5xl);
          font-weight: 800;
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }

        .hero-content h2 {
          font-size: var(--font-size-2xl);
          color: var(--color-electric-blue);
          margin-bottom: var(--spacing-md);
          font-weight: 600;
        }

        .hero-content p {
          font-size: var(--font-size-lg);
          color: var(--color-text-light);
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
        }

        /* Introduction */
        .intro-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }

        .intro-content h2 {
          color: var(--color-white);
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-md);
        }

        .intro-content p {
          color: var(--color-text-light);
          font-size: var(--font-size-lg);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--spacing-lg);
        }

        .stat-card {
          background: var(--color-dark-gray);
          padding: var(--spacing-lg);
          border-radius: var(--border-radius-lg);
          text-align: center;
          border: 1px solid var(--color-electric-blue);
        }

        .stat-number {
          font-size: var(--font-size-3xl);
          font-weight: 800;
          color: var(--color-electric-blue);
          margin-bottom: var(--spacing-xs);
        }

        .stat-label {
          color: var(--color-text-light);
          font-size: var(--font-size-sm);
        }

        /* Features */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
        }

        .feature-card {
          background: var(--color-black);
          padding: var(--spacing-xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
          border: 1px solid var(--color-dark-gray);
          transition: var(--transition-base);
        }

        .feature-card:hover {
          border-color: var(--color-electric-blue);
          transform: translateY(-5px);
        }

        .feature-icon {
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

        .feature-card h3 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }

        .feature-card p {
          color: var(--color-text-light);
          line-height: 1.6;
        }

        /* Portfolio */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
        }

        .portfolio-item {
          position: relative;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          background: var(--color-dark-gray);
        }

        .portfolio-image {
          position: relative;
          overflow: hidden;
        }

        .portfolio-image img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: var(--transition-base);
        }

        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          display: flex;
          align-items: flex-end;
          padding: var(--spacing-lg);
          opacity: 0;
          transition: var(--transition-base);
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        .portfolio-item:hover img {
          transform: scale(1.05);
        }

        .portfolio-content h4 {
          color: var(--color-white);
          margin-bottom: var(--spacing-xs);
        }

        .portfolio-content p {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-sm);
        }

        .portfolio-category {
          background: var(--color-electric-blue);
          color: var(--color-white);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: var(--font-size-sm);
          font-weight: 500;
        }

        /* Packages */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
        }

        .package-card {
          background: var(--color-black);
          border: 2px solid var(--color-dark-gray);
          border-radius: var(--border-radius-xl);
          padding: var(--spacing-xl);
          position: relative;
          transition: var(--transition-base);
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .package-card.popular {
          border-color: var(--color-electric-blue);
          background: linear-gradient(135deg, var(--color-black) 0%, rgba(0, 123, 255, 0.05) 100%);
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-electric-blue);
          color: var(--color-white);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: var(--font-size-sm);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .package-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .package-header h3 {
          color: var(--color-white);
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-md);
        }

        .package-price {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--color-electric-blue);
          margin-bottom: var(--spacing-sm);
        }

        .package-header p {
          color: var(--color-text-light);
          font-size: var(--font-size-sm);
        }

        .package-features {
          margin-bottom: var(--spacing-xl);
        }

        .package-features .feature-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          padding: 0.5rem 0;
        }

        .package-features .feature-icon {
          color: var(--color-electric-blue);
          font-size: var(--font-size-sm);
          flex-shrink: 0;
        }

        .package-features .feature-item span {
          color: var(--color-text-light);
          font-size: var(--font-size-sm);
        }

        .package-footer {
          text-align: center;
        }

        .btn-block {
          width: 100%;
          display: block;
          text-align: center;
        }

        /* FAQ */
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: var(--color-dark-gray);
          border-radius: var(--border-radius-md);
          margin-bottom: var(--spacing-md);
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          padding: var(--spacing-lg);
          background: none;
          border: none;
          color: var(--color-white);
          font-size: var(--font-size-lg);
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: var(--transition-fast);
        }

        .faq-question:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          background: rgba(0, 0, 0, 0.3);
        }

        .faq-answer.expanded {
          max-height: 200px;
        }

        .faq-answer p {
          padding: var(--spacing-lg);
          color: var(--color-text-light);
          line-height: 1.6;
          margin: 0;
        }

        /* CTA */
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

        .btn-lg {
          padding: 1rem 2rem;
          font-size: var(--font-size-lg);
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-sm);
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
          .intro-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
          
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .hero-content h1 {
            font-size: var(--font-size-4xl);
          }
          
          .hero-content h2 {
            font-size: var(--font-size-xl);
          }
          
          .features-grid,
          .portfolio-grid,
          .packages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ECommerce;