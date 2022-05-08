import { NextPage } from "next";
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <>
      <div className={styles.footer_wrapper}>
        <a className={styles.footer_wrapper_email} href="mailto:info@midoriarquitectura.com">info@midoriarquitectura.com</a>
        <a className={styles.footer_wrapper_instagram_logo} href="https://www.instagram.com/midori_arquitectura/">
          <div className={styles.footer_wrapper_instagram_logo_container}>
            <Image src="/logos/instagram.jpg" alt="instagram logo" layout="fill"/>
          </div>
        </a>
      </div>
    </>
  )
}

export default Footer;