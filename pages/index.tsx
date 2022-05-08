import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const imageSource = `/photos/biblioteca-arenys/Concurs Biblioteca d'Arenys de Mar (finalista).jpg`

  return (
    <div className={styles.wrapper}>
      <div className={styles.image_container}>
        <Image className={styles.image_container_img} src={imageSource} alt='project image' layout='fill'/>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
