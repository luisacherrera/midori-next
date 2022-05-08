import { NextPage } from "next";
import Image from 'next/image'


const Footer: NextPage = () => {
  return (
    <>
      <div>
        <a href="mailto:info@midoriarquitectura.com">info@midoriarquitectura.com</a>
        <a href="https://www.instagram.com/midori_arquitectura/">
          <Image src="../../public/logos/instagram.jpg" alt="instagram logo" />
        </a>
      </div>
    </>
  )
}

export default Footer;