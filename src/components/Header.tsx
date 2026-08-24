import styles from './Header.module.css'
import logo from '../assets/Madhu-linkedin-Photo.jpg'
function Header() {
    return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <a href='#home'><img src={logo} alt="Madhu k v Image" className={styles.logoImage} /></a>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li><a href='#achievements'>Achievements</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        {/* <li><a href='#contact'>Contact</a></li> */}
                    </ul>
                </nav>
            </header>
    )
}

export default Header