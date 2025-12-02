"use client";

import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone className={styles.icon} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <FaWhatsapp className={styles.icon} />,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
    },
    {
      icon: <FaEnvelope className={styles.icon} />,
      title: 'Email',
      value: 'info@coaching.com',
      link: 'mailto:info@coaching.com',
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="sectionTitle">Contact Us</h2>
        <div className={styles.contactGrid}>
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.iconContainer}>
                {item.icon}
              </div>
              <h3 className={styles.contactTitle}>{item.title}</h3>
              <p className={styles.contactValue}>{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;