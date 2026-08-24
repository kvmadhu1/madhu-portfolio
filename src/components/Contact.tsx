import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact</h2>
        <div className={styles.icons}>
          <a href="mailto:your.email@example.com" className={styles.icon}>
            📧 Email
          </a>
          <a href="https://www.linkedin.com/in/madhu-k-v-56a3705a/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            💼 LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            🖥 GitHub
          </a>
          <span className={styles.icon}>📍 Bengaluru, India</span>
        </div>
        <a href="mailto:your.email@example.com" className={styles.button}>
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Contact
