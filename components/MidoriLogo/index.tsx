import { NextPage } from "next";
import Image from 'next/image';
import styles from './MidoriLogo.module.scss';

interface LogoProps {
  hasBackdrop?: boolean;
}

const MidoriLogo: NextPage<LogoProps> = ({hasBackdrop = true}: LogoProps) => {

  return (
    <>
      {hasBackdrop && <div className={styles.logo_backdrop}></div>}
      <div className={styles.logo_container}>
        <Image className={styles.logo_container_img} src='/logos/midori_logomaster.png' alt='midori logo' layout='fill'/>
      </div>
    </>
  )
}

export default MidoriLogo;