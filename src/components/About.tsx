import { useState } from 'react'
import styles from './About.module.css'

function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.text}>
          I am a Front-End Developer with over 6 years of experience specializing in React, 
          TypeScript, and modern web technologies. I enjoy building responsive, user-friendly 
          applications and have worked on projects ranging from OTT platforms to enterprise solutions.
        </p>

        {expanded && (
          <p className={styles.text}>
            My focus is on creating clean, maintainable code and delivering engaging user experiences. 
            I am passionate about continuous learning and exploring new tools in the web development ecosystem. 
            Outside of work, I enjoy exploring new technologies, contributing to open-source, and traveling.
          </p>
        )}

        <button 
          className={styles.readMoreBtn} 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </section>
  )
}

export default About
