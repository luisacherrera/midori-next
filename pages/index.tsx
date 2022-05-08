import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const imageSource = `/photos/biblioteca-arenys/Concurs Biblioteca d'Arenys de Mar (finalista).jpg`;
  const projectName = `Concurs Biblioteca d'Arenys de Mar (finalista)`

  return (
    <>
      <div className={styles.logo_backdrop}></div>
      <div className={styles.logo_container}>
        <Image className={styles.logo_container_img} src='/logos/midori_logomaster.png' alt='midori logo' layout='fill'/>
      </div>
      <div className={styles.title_container}>
        <p className={styles.title_container_text}>{projectName}</p>
      </div>
      <div className={styles.image_container}>
        <Image className={styles.image_container_img} src={imageSource} alt='project image' layout='fill'/>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
