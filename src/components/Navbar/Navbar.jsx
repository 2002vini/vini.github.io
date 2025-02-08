import React, { useState } from "react";
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.navbarLogo}>
          MyPortfolio
        </a>
        <button className={styles.navbarToggle} onClick={toggleMenu}>
          <span className={styles.hamburger}></span>
        </button>
        <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.open : ""}`}>
          <li className={styles.navbarItem}>
            <button onClick={() => scrollToSection("education")} className={styles.navbarLink}>
              Education
            </button>
          </li>
          <li className={styles.navbarItem}>
            <button onClick={() => scrollToSection("projects")} className={styles.navbarLink}>
              Projects
            </button>
          </li>
          <li className={styles.navbarItem}>
            <button onClick={() => scrollToSection("footer")} className={styles.navbarLink}>
              Contact
            </button>
          </li>
          <li className={styles.navbarItem}>
            <button onClick={() => scrollToSection("experience")} className={styles.navbarLink} >
              Experience
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
