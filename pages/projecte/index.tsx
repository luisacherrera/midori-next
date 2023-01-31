/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from 'next/image';
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import styles from "./Projecte.module.scss"

export interface Project {
  id: string;
  projectName: string;
  content: ProjectItem[];
}

export interface ProjectItem { 
  image: string;
  description?: string 
}

const Projecte: NextPage = () => {
  const projects: Project[] = [
    {
      id: `biblioteca-arenys`,
      content: [
        {
          image: `/photos/biblioteca-arenys/Concurs Biblioteca d'Arenys de Mar (finalista).jpg`,
          description: 'Pokem ipsum dolor sit amet Minccino Nidoqueen Cacnea Thunder Badge Elekid Pupitar. Hydro Pump Volcarona Silver Slowking Pidgey Chikorita Wailmer.'
        },
        {
          image: `/photos/biblioteca-arenys/Concurs Biblioteca d'Arenys de Mar (finalista)(2).jpg`,
        }
      ],
      projectName: `Concurs Biblioteca d'Arenys de Mar (finalista)`
    },
    {
      id: `cel-obert`,
      content: [
        {
          image: `/photos/cel-obert/Festival A Cel Obert 2018(1).jpg`,
        },
        {
          image: `/photos/cel-obert/Festival A Cel Obert 2018(2).jpg`,
          description: 'Mirror Move Fire Red Zangoose Hypno Slowbro Ferrothorn Golem. Splash Trapinch Golurk Rayquaza Swablu Corsola Weepinbell. Pokemon Hippowdon Gliscor Duosion Nidoking Lunatone Pignite. Hydro Pump Team Rocket Steelix Octillery Rotom Prinplup Archeops. Mineral Badge Unown Sandslash Pawniard Dugtrio Heatran Slowbro.'
        }
      ],
      projectName: `Festival A Cel Obert 2018`
    },
    {
      id: `clarisses`,
      content: [
        {
          image: `/photos/clarisses/Exposicio Clarisses- passat, present i futur (2018)(1).jpg`,
          description: 'Dragon Whimsicott Wynaut a wild Pokemon appeared Ash Swadloon Keldeo.'
        },
        {
          image: `/photos/clarisses/Exposicio Clarisses- passat, present i futur (2018)(2).jpg`,
        }
      ],
      projectName: `Exposicio Clarisses- passat, present i futur (2018)`
    },
    {
      id: `espai-ciencia`,
      content: [
        {
          image: `/photos/espai-ciencia/Stands Espai Ciencia (Salo de l'Ensenyament 2018)(1).jpg`,
          description: 'very small pene'
        },
        {
          image: `/photos/espai-ciencia/Stands Espai Ciencia (Salo de l'Ensenyament 2018)(2).jpg`,
        },
        {
          image: `/photos/espai-ciencia/Stands Espai Ciencia (Salo de l'Ensenyament 2019).jpg`,
          description: 'tonto el que llegue hasta aqui'
        }
      ],
      projectName: `Stands Espai Ciencia (Salo de l'Ensenyament 2018)`
    }
  ]

  const router = useRouter();
  const { id } = router.query;

  const currentProject = projects.find((project) => project.id === id);

  const handleNavigation = (id: string) => {
    router.push({
      query:{ id }
    });

    window.scrollTo({
      top: document.getElementById('dummy-span')?.offsetTop,
      behavior: "smooth"
    })
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.side_content}>
          <div onClick={()=>router.push('/')} className={styles.logo_container}>
            <Image className={styles.logo_container_img} src='/logos/midori_logomaster.png' alt='midori logo' layout='fill'/>
          </div>
          <ul className={styles.menu_list}>
            {
              projects.map(project =>
                <li 
                  onClick={()=>handleNavigation(project.id)} 
                  key={project.id}
                  className={ project.id === id ? `${styles.selected}` : '' }
                >
                  {project.projectName}</li>
              )
            }
          </ul>
        </div>
        <ul className={styles.image_container}>
          <span id="dummy-span"></span>
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