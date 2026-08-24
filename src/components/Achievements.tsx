import styles from './Achievements.module.css'

function Achievements() {
  const achievements = [
    'Key Achievement 1 -- Successfully delivered a large-scale OTT application with React & TypeScript.',
    'Key Achievement 2 -- Improved performance of a client project by 40% through optimized front-end code.'
  ]

  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Achievements</h2>
        <ul className={styles.list}>
          {achievements.map((item, index) => (
            <li key={index} className={styles.item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Achievements
