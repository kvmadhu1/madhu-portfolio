import styles from './Hero.module.css'
function Hero (){

    return (
        <>
        <div id='home' className={styles.hero}>
            <div className= {styles.content}>
            <h1 className= {styles.title}>Madhu k v</h1>
            <h2 className= {styles.subtitile}>Specialist | Front-End Developement | React</h2>
            <h3>Welcome to my portfolio</h3>
            <a href='#projects' className={styles.ctaButton}>VIEW MY WORK</a>

            </div>
        </div>
        </>
    )
}
export default Hero