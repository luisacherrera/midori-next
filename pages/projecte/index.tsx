/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../../components/Footer";
import projectes from "../../lib/projectes";
import { Project } from "../../models";
import styles from "./Projecte.module.scss";
import Menu from "../../components/Menu";

const Projecte: NextPage = () => {
  const projects: Project[] = projectes;

  const router = useRouter();
  const { id } = router.query;

  const [showMenu, updateShowMenu] = useState(false);

  const currentProject = projects.find((project) => project.id === id);

  const handleNavigation = (id: string) => {
    router.push({
      query:{ id }
    });

    window.scrollTo({
      top: document.getElementById('dummy-span')?.offsetTop,
      behavior: "smooth"
    })

    updateShowMenu(!showMenu)
  };

  const handleMenuVisibility = () => updateShowMenu(!showMenu)

  return (
    <>
      <div className={styles.wrapper}>
        <div onClick={()=>handleMenuVisibility()} className={styles.logo_backdrop_mobile}>
          <h2>+prOjectes</h2>
        </div>
        {
          showMenu && 
          <div className={styles.menu_list_mobile}>
            <div onClick={()=>router.push('/')} className={styles.logo_home}>
              <Image className={styles.logo_home_img} src='/logos/midori_logomaster.png' alt='midori logo' layout='fill'/>
            </div>
            <Menu currentProjectId={id} projects={projects} onItemSelected={handleNavigation}/>
          </div>
        }

        <div className={styles.side_content}>
          <div onClick={()=>router.push('/')} className={styles.logo_container}>
            <Image className={styles.logo_container_img} src='/logos/midori_logomaster.png' alt='midori logo' layout='fill'/>
          </div>
          <Menu currentProjectId={id} projects={projects} onItemSelected={handleNavigation}/>
        </div>
        <ul className={styles.image_container}>
          {
            currentProject?.content.map((item, i) =>
              <li key={i}>
                <img className={styles.image_container_img} src={item.image} alt='project image'/>
                {
                  item.description && <p>{item.description}</p>
                }
              </li>  
            )
          }
        </ul>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Projecte