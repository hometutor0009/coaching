"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a nav link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(`.${styles.nav}`);
      const menuButton = document.querySelector(`.${styles.menuButton}`);
      
      if (nav && menuButton && 
          !nav.contains(event.target) && 
          !menuButton.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>besttutor</Link>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="#home" className={styles.navLink} onClick={closeMenu}>Home</Link></li>
            <li><Link href="#subjects" className={styles.navLink} onClick={closeMenu}>Subjects</Link></li>
            <li><Link href="#testimonials" className={styles.navLink} onClick={closeMenu}>Testimonials</Link></li>
            <li><Link href="#contact" className={`${styles.ctaButton} ${styles.primary}`} onClick={closeMenu}>Contact Me</Link></li>
          </ul>
        </nav>
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuIcon}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;