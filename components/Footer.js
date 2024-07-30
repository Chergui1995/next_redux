
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css'; // Importer le fichier CSS module pour les styles

const Footer = () => {
  return (
    <footer className={`${styles.footer} text-center mt-4`}>
      <p>&copy; {new Date().getFullYear()} Chergui Fares</p>
      <p>
        <Link legacyBehavior  href="https://github.com/your-github">
          <a target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
        </Link>
        {' | '}
        <Link legacyBehavior   href="https://linkedin.com/in/your-linkedin">
          <a target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
