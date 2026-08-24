import React from 'react'
import styles from './Experience.module.css'

function Experience() {
  const experiences = [
    {
      company: 'Tata Elxsi',
      role: 'Front-End Specialist',
      period: 'June 2022 - Present'
    },
    {
      company: 'Astri Services',
      role: 'Front-End Engineer',
      period: 'Jan 2020 - March 2022'
    }
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.role}>{exp.role}</h3>
              <p className={styles.company}>{exp.company}</p>
              <span className={styles.period}>{exp.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
