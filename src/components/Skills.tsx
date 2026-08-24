import styles from './Skills.module.css'

function Skills() {
  const skills = [   
    'React JS', 'Redux', 'React Hooks', 'TypeScript', 'JavaScript(ES6+)', 'HTML5', 'CSS3'
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              <span className={styles.skillName}>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
