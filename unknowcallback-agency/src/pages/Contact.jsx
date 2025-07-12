import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaLine,
  FaPaperPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      file: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          file: null
        });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Office Address',
      info: '48/91 ต.ขุนทะเล อ.เมือง จ.สุราษฎร์ธานี 10270',
      link: null
    },
    {
      icon: <FaPhone />,
      title: 'Phone Number',
      info: '+66 (0) 77-123-456',
      link: 'tel:+66077123456'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Address',
      info: 'hello@unknowcallback.com',
      link: 'mailto:hello@unknowcallback.com'
    },
    {
      icon: <FaLine />,
      title: 'Line ID',
      info: '@unknowcallback',
      link: 'https://line.me/ti/p/@unknowcallback'
    }
  ];

  const socialLinks = [
    { icon: <FaLine />, href: '#', label: 'Line' },
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content text-center"
          >
            <h1>Get in Touch</h1>
            <p className="hero-description">
              พร้อมที่จะเริ่มต้นโปรเจกต์ของคุณ? ติดต่อเราได้ทุกช่องทาง
              เราจะตอบกลับภายใน 24 ชั่วโมง
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-info"
            >
              <h2>Get in Touch</h2>
              <p className="contact-description">
                เรายินดีที่จะรับฟังความต้องการของคุณ และให้คำปรึกษาฟรี
                เพื่อหาแพ็กเกจที่เหมาะสมที่สุด
              </p>

              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="contact-item"
                  >
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-content">
                      <h4>{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="contact-link">
                          {item.info}
                        </a>
                      ) : (
                        <p>{item.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-media">
                <h4>Follow Us</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="social-link"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="contact-form-wrapper"
            >
              <div className="contact-form">
                <h2>Send Us a Message</h2>
                <p className="form-description">
                  กรอกข้อมูลด้านล่าง และเราจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>

                {isSubmitted ? (
                  <div className="success-message">
                    <FaCheckCircle className="success-icon" />
                    <h3>ส่งข้อความเรียบร้อย!</h3>
                    <p>ขอบคุณที่ติดต่อเรา เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">ชื่อ - นามสกุล *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="กรอกชื่อ - นามสกุล"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">อีเมล *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="กรอกอีเมล"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">เบอร์โทรศัพท์ *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="กรอกเบอร์โทรศัพท์"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">บริษัท/เว็บไซต์</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="กรอกชื่อบริษัทหรือเว็บไซต์"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">ข้อความ *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        placeholder="บอกเราเกี่ยวกับโปรเจกต์ของคุณ..."
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label htmlFor="file">แนบไฟล์ (ไม่บังคับ)</label>
                      <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="file-input"
                      />
                      <p className="file-note">
                        รองรับไฟล์: PDF, DOC, DOCX, JPG, PNG (สูงสุด 10MB)
                      </p>
                    </div>

                    <div className="form-footer">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="loading-spinner"></div>
                            กำลังส่ง...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            ส่งข้อความ
                          </>
                        )}
                      </button>
                      <p className="recaptcha-text">
                        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4987823147143!2d99.33627647584193!3d9.125884988733847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305370cb36aab5a7%3A0x2e3f9b9a4b7e5f5c!2sSurat%20Thani%2C%20Thailand!5e0!3m2!1sen!2sth!4v1703123456789!5m2!1sen!2sth"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Unknowcallback Office Location"
          ></iframe>
        </div>
      </section>

      <style jsx>{`
        .contact-page {
          padding-top: 0;
        }

        /* Hero Section */
        .contact-hero {
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

        /* Contact Section */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-3xl);
          align-items: start;
        }

        /* Contact Info */
        .contact-info h2 {
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-2xl);
        }

        .contact-description {
          color: var(--color-text-light);
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-xl);
          line-height: 1.6;
        }

        .contact-details {
          margin-bottom: var(--spacing-xl);
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .contact-icon {
          background: var(--color-electric-blue);
          color: var(--color-white);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          flex-shrink: 0;
        }

        .contact-content h4 {
          color: var(--color-white);
          margin-bottom: var(--spacing-xs);
          font-size: var(--font-size-lg);
        }

        .contact-content p {
          color: var(--color-text-light);
          margin: 0;
          font-size: var(--font-size-base);
        }

        .contact-link {
          color: var(--color-text-light);
          text-decoration: none;
          transition: var(--transition-fast);
          display: block;
        }

        .contact-link:hover {
          color: var(--color-electric-blue);
        }

        .social-media h4 {
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
        }

        .social-links {
          display: flex;
          gap: var(--spacing-md);
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: var(--color-dark-gray);
          color: var(--color-white);
          border-radius: 50%;
          text-decoration: none;
          transition: var(--transition-base);
          font-size: 1.1rem;
        }

        .social-link:hover {
          background: var(--color-electric-blue);
          transform: translateY(-2px);
        }

        /* Contact Form */
        .contact-form-wrapper {
          background: var(--color-dark-gray);
          border-radius: var(--border-radius-xl);
          padding: var(--spacing-xl);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-form h2 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
          font-size: var(--font-size-2xl);
        }

        .form-description {
          color: var(--color-text-light);
          margin-bottom: var(--spacing-xl);
          font-size: var(--font-size-base);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }

        .form-group {
          margin-bottom: var(--spacing-md);
        }

        .form-group label {
          display: block;
          color: var(--color-white);
          margin-bottom: var(--spacing-xs);
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          background: var(--color-black);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius-md);
          color: var(--color-white);
          font-size: var(--font-size-base);
          transition: var(--transition-base);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-electric-blue);
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--color-text-muted);
        }

        .file-input {
          padding: 0.5rem !important;
        }

        .file-note {
          color: var(--color-text-muted);
          font-size: var(--font-size-sm);
          margin-top: var(--spacing-xs);
        }

        .form-footer {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: var(--font-size-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-sm);
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid var(--color-white);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .recaptcha-text {
          color: var(--color-text-muted);
          font-size: var(--font-size-xs);
          text-align: center;
          line-height: 1.4;
        }

        /* Success Message */
        .success-message {
          text-align: center;
          padding: var(--spacing-xl);
          background: rgba(40, 167, 69, 0.1);
          border: 1px solid rgba(40, 167, 69, 0.3);
          border-radius: var(--border-radius-md);
        }

        .success-icon {
          color: #28a745;
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .success-message h3 {
          color: var(--color-white);
          margin-bottom: var(--spacing-sm);
        }

        .success-message p {
          color: var(--color-text-light);
          margin: 0;
        }

        /* Map Section */
        .map-section {
          background: var(--color-dark-gray);
          padding: 0;
        }

        .map-container {
          position: relative;
          width: 100%;
          height: 450px;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .map-container iframe {
          width: 100%;
          height: 100%;
          filter: grayscale(100%) contrast(1.2);
          transition: var(--transition-slow);
        }

        .map-container:hover iframe {
          filter: grayscale(0%) contrast(1);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }

          .hero-content h1 {
            font-size: var(--font-size-3xl);
          }

          .hero-description {
            font-size: var(--font-size-base);
          }

          .contact-form-wrapper {
            padding: var(--spacing-lg);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-info h2,
          .contact-form h2 {
            font-size: var(--font-size-xl);
          }

          .map-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .contact-form-wrapper {
            padding: var(--spacing-md);
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;