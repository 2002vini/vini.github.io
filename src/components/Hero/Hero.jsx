import React from "react";
import styles from"./Hero.module.css"; // Import the CSS file for styling
import { getImageUrl } from "../../utils";
import { useState } from "react";
export const Hero = () => {
   
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        
        <div className={styles.heroText}>
        <div className={styles.heroHeading}>
          <h1>Hi!</h1>
          <h1>I am Vini Hundlani</h1>
          <h1>A Software Developer</h1>
        </div>
        <div className={styles.heroSubheading}>
          <p>
            I'm a passionate developer focused on creating engaging and dynamic
            digital experiences. Welcome to my portfolio!
          </p>
        
          <a href="mailto:hundlanivini2002@gmail.com" className={styles.heroButton}>
            Contact Me
          </a>
        </div>
        </div>

        <div className={styles.heroImage}>
          <img src="/assets/hero/heroImage.png" alt="Hero" />
        </div>
       <div className={styles.topBlur}></div>
       <div className={styles.bottomBlur}></div>

      </div>
    </section>
  );
};

export default Hero;
