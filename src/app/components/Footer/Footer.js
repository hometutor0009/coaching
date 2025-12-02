"use client";

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerHeading}>TutorPro</h3>
            <p>Personalized home tutoring services to help you achieve academic excellence.</p>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className={styles.socialIcon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className={styles.socialIcon} />
              </a>
            </div>
          </div>
          {/* Rest of your footer content */}
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} TutorPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;