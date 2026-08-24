import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'A short description of project one goes here.',
      image: 'https://via.placeholder.com/300x200', // replace with your project image
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'A short description of project two goes here.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'A short description of project three goes here.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ]

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a href={project.link} className={styles.button}>View Details</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
