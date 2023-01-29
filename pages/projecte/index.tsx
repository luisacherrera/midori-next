/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Footer from "../../components/Footer";
import styles from "./Projecte.module.scss"

const Projecte: NextPage = () => {
  const imageSource = `/photos/biblioteca-arenys/Concurs Biblioteca d'Arenys de Mar (finalista).jpg`;
  const projectName = `Concurs Biblioteca d'Arenys de Mar (finalista)`

  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.menu_list}>
          <li>{projectName}</li>
          <li>{projectName}</li>
          <li>{projectName}</li>
          <li>{projectName}</li>
          <li>{projectName}</li>
        </ul>
        <ul className={styles.image_container}>
          <li><img className={styles.image_container_img} src={imageSource} alt='project image'/></li>
          <li><img className={styles.image_container_img} src={imageSource} alt='project image'/></li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Projecte