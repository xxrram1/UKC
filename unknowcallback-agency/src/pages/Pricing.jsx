import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaArrowRight } from 'react-icons/fa';

const Pricing = () => {
  const packages = [
    {
      name: 'WordPress Custom Design',
      price: '฿45,000+',
      description: 'เหมาะสำหรับธุรกิจขนาดเล็กและกลาง',
      popular: false,
      features: [
        'Custom Design ตามต้องการ',
        'เว็บไซต์ 5-10 หน้า',
        'Responsive Design',
        'SEO Ready',
        'SSL Certificate',
        'Admin Panel',
        'ดูแลระบบ 1 ปี',
        'Training การใช้งาน'
      ],
      buttonText: 'เลือกแพ็กเกจ',
      buttonLink: '/contact'
    },
    {
      name: 'E-Commerce Full System',
      price: '฿70,000+',
      description: 'เหมาะสำหรับธุรกิจที่ต้องการขายสินค้าออนไลน์',
      popular: true,
      features: [
        'ทุกอย่างจากแพ็กเกจแรก',
        'ระบบจัดการสินค้า',
        'ระบบสมาชิก',
        'ระบบชำระเงิน',
        'ระบบจัดส่งสินค้า',
        'ระบบรายงาน',
        'ระบบคูปองส่วนลด',
        'ระบบรีวิวสินค้า',
        'Mobile App พื้นฐาน'
      ],
      buttonText: 'เลือกแพ็กเกจ',
      buttonLink: '/contact'
    },
    {
      name: 'Custom Application',
      price: 'Starts at ฿150,000+',
      description: 'สำหรับโปรเจกต์ที่ซับซ้อนและต้องการความเฉพาะเจาะจง',
      popular: false,
      features: [
        'ปรึกษาโปรเจกต์ฟรี',
        'วิเคราะห์ความต้องการ',
        'ออกแบบ UI/UX เฉพาะ',
        'พัฒนาตามความต้องการ',
        'ระบบฐานข้อมูลขั้นสูง',
        'API Integration',
        'Security ระดับสูง',
        'Performance Optimization',
        'Support 24/7'
      ],
      buttonText: 'ติดต่อเพื่อขอใบเสนอราคา',
      buttonLink: '/contact'
    }
  ];

  const additionalServices = [
    {
      service: 'Domain Registration',
      price: '฿800/ปี'
    },
    {
      service: 'Web Hosting',
      price: '฿2,400/ปี'
    },
    {
      service: 'SSL Certificate',
      price: '฿1,200/ปี'
    },
    {
      service: 'Monthly Maintenance',
      price: '฿3,000/เดือน'
    },
    {
      service: 'Content Updates',
      price: '฿1,500/ครั้ง'
    },
    {
      service: 'SEO Optimization',
      price: '฿15,000/เดือน'
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>Pricing Plans</h1>
            <p className="hero-description">
              แพ็กเกจราคาที่เหมาะสมกับทุกขนาดธุรกิจ
              พร้อมบริการครบวงจรที่ตอบโจทย์ทุกความต้องการ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="pricing-table section">
        <div className="container">
          <div className="pricing-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`pricing-card ${pkg.popular ? 'popular' : ''}`}
              >
                {pkg.popular && (
                  <div className="popular-badge">
                    <FaStar />
                    Most Popular
                  </div>
                )}
                
                <div className="pricing-header">
                  <h3>{pkg.name}</h3>
                  <div className="price">
                    <span className="price-amount">{pkg.price}</span>
                  </div>
                  <p className="price-description">{pkg.description}</p>
                </div>

                <div className="features-list">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <FaCheck className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pricing-footer">
                  <Link 
                    to={pkg.buttonLink} 
                    className={`btn ${pkg.popular ? 'btn-primary' : 'btn-outline'} btn-block`}
                  >
                    {pkg.buttonText}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services section bg-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>Additional Services</h2>
            <p>บริการเสริมอื่นๆ ที่คุณอาจต้องการ</p>
          </motion.div>

          <div className="services-grid">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="service-item"
              >
                <div className="service-content">
                  <h4>{service.service}</h4>
                  <div className="service-price">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-header text-center"
          >
            <h2>Frequently Asked Questions</h2>
            <p>คำถามที่พบบ่อยเกี่ยวกับแพ็กเกจและบริการ</p>
          </motion.div>

          <div className="faq-list">
            {[
              {
                question: 'ราคาที่แสดงรวมภาษีมูลค่าเพิ่มแล้วหรือไม่?',
                answer: 'ราคาที่แสดงยังไม่รวมภาษีมูลค่าเพิ่ม 7% สำหรับลูกค้าที่ต้องการใบกำกับภาษีเต็มรูปแบบ'
              },
              {
                question: 'ระยะเวลาดำเนินการของแต่ละแพ็กเกจเป็นอย่างไร?',
                answer: 'แพ็กเกจ WordPress ใช้เวลา 2-3 สัปดาห์, E-Commerce ใช้เวลา 4-6 สัปดาห์, และ Custom Application ขึ้นอยู่กับความซับซ้อน'
              },
              {
                question: 'มีการรับประกันผลงานหรือไม่?',
                answer: 'เรามีการรับประกันผลงาน 1 ปี และให้บริการดูแลระบบฟรี 1 ปีเต็มหลังจากส่งมอบงาน'
              },
              {
                question: 'สามารถแก้ไขหรือเพิ่มเติมฟีเจอร์ภายหลังได้หรือไม่?',
                answer: 'ได้ครับ เราให้บริการแก้ไขและเพิ่มเติมฟีเจอร์ภายหลัง โดยมีค่าใช้จ่ายตามความซับซ้อนของงาน'
              },
              {
                question: 'มีการอบรมการใช้งานระบบหรือไม่?',
                answer: 'ทุกแพ็กเกจรวมการอบรมการใช้งานระบบ และเรามี Manual การใช้งานภาษาไทยให้ด้วย'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="faq-item"
              >
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
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
            <h2>ยังไม่แน่ใจว่าแพ็กเกจไหนเหมาะกับคุณ?</h2>
            <p>ปรึกษาฟรีกับทีมงานของเรา เราจะช่วยแนะนำแพ็กเกจที่เหมาะสมที่สุด</p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              ปรึกษาฟรี <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .pricing-page {
          padding-top: 0;
        }

        /* Hero Section */
        .pricing-hero {
          background: linear-gradient(135deg, var(--color-black) 0%, var(--color-dark-gray) 100%);
          padding: var(--spacing-3xl) 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: var(--font-size-4xl);
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
        }

        .hero-description {
          font-size: var(--font-size-lg);
          color: var(--color-text-light);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Pricing Table */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
          margin-top: var(--spacing-xl);
        }

        .pricing-card {
          background: var(--color-dark-gray);
          border: 2px solid var(--color-dark-gray);
          border-radius: var(--border-radius-xl);
          padding: var(--spacing-xl);
          position: relative;
          transition: var(--transition-base);
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
        }

        .pricing-card.popular {
          border-color: var(--color-electric-blue);
          background: linear-gradient(135deg, var(--color-dark-gray) 0%, rgba(0, 123, 255, 0.05) 100%);
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

        .pricing-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .pricing-header h3 {
          color: var(--color-white);
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-md);
        }

        .price {
          margin-bottom: var(--spacing-sm);
        }

        .price-amount {
          font-size: var(--font-size-3xl);
          font-weight: 700;
          color: var(--color-electric-blue);
        }

        .price-description {
          color: var(--color-text-light);
          font-size: var(--font-size-sm);
        }

        .features-list {
          margin-bottom: var(--spacing-xl);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          padding: 0.5rem 0;
        }

        .feature-icon {
          color: var(--color-electric-blue);
          font-size: var(--font-size-sm);
          flex-shrink: 0;
        }

        .feature-item span {
          color: var(--color-text-light);
          font-size: var(--font-size-sm);
        }

        .pricing-footer {
          text-align: center;
        }

        .btn-block {
          width: 100%;
          display: block;
          text-align: center;
        }

        /* Additional Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-md);
          margin-top: var(--spacing-xl);
        }

        .service-item {
          background: var(--color-black);
          border: 1px solid var(--color-dark-gray);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
          transition: var(--transition-base);
        }

        .service-item:hover {
          border-color: var(--color-electric-blue);
          transform: translateY(-2px);
        }

        .service-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .service-content h4 {
          color: var(--color-white);
          margin: 0;
        }

        .service-price {
          color: var(--color-electric-blue);
          font-weight: 600;
          font-size: var(--font-size-lg);
        }

        /* FAQ */
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: var(--color-dark-gray);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
          margin-bottom: var(--spacing-md);
        }

        .faq-item h4 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }

        .faq-item p {
          color: var(--color-text-light);
          margin: 0;
          line-height: 1.6;
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
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-content h1 {
            font-size: var(--font-size-3xl);
          }
          
          .hero-description {
            font-size: var(--font-size-base);
          }
          
          .services-grid {
            grid-template-columns: 1fr;
          }
          
          .service-content {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--spacing-sm);
          }
        }
      `}</style>
    </div>
  );
};

export default Pricing;