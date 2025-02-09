import React from "react";
import styles from "./About.module.css";

export const About = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className={styles.aboutUs}>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.container}>
        {/* Card 1 */}
        <div className={styles.card}>
          <img src={`${baseUrl}/assets/about/backend.webp`} alt="Skill 1" className={styles.image} />
          <h3 className={styles.name}>Backend Development</h3>
          <p className={styles.description}>
            Skilled in server-side development using Node.js, Django, and databases like MongoDB, PostgreSQL, and MySQL.
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <img src={`${baseUrl}/assets/about/frontend.jpg`} alt="Skill 2" className={styles.image} />
          <h3 className={styles.name}>Frontend Development</h3>
          <p className={styles.description}>
          Expertise in building responsive and interactive user interfaces with modern frameworks like React, Vue, and Angular.
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <img src={`${baseUrl}/assets/about/competitive.png`} alt="Skill 3" className={styles.image} />
          <h3 className={styles.name}>Competitve Programming</h3>
          <p className={styles.description}>
          Proficient in solving algorithmic challenges on platforms like Codeforces, LeetCode, and HackerRank.
          </p>
        </div>
        <div className={styles.card}>
          <img src={`${baseUrl}/assets/about/system.png`} alt="Skill 4" className={styles.image} />
          <h3 className={styles.name}>Solution Architect</h3>
          <p className={styles.description}>
          AWS Certified Solutions Architect with experience in designing and implementing scalable cloud solutions.
          </p>
        </div>
      </div>
    </section>
  );
};


