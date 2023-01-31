import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

export interface ProjectCover {
  id: string;
  imageSource: string;
  projectName: string;
}

const Home: NextPage = () => {
  const projects: ProjectCover[] = [
    {
      id: `biblioteca-arenys`,
      imageSource: `/photos/biblioteca-arenys/Concurs Biblioteca d'Arenys de Mar (finalista).jpg`,
      projectName: `Concurs Biblioteca d'Arenys de Mar (finalista)`
    },
    {
      id: `cel-obert`,
      imageSource: `/photos/cel-obert/Festival A Cel Obert 2018(1).jpg`,
      projectName: `Festival A Cel Obert 2018`
    },
    {
      id: `clarisses`,
      imageSource: `/photos/clarisses/Exposicio Clarisses- passat, present i futur (2018)(1).jpg`,
      projectName: `Exposicio Clarisses- passat, present i futur (2018)`
    },
    {
      id: `espai-ciencia`,
      imageSource: `/photos/espai-ciencia/Stands Espai Ciencia (Salo de l'Ensenyament 2018)(1).jpg`,
      projectName: `Stands Espai Ciencia (Salo de l'Ensenyament 2018)`
    }
  ];

  const [currentProject, updateProject] = useState(projects[0]);
  const router = useRouter();


  useInterval(()=>{
    const currentIndex = projects.findIndex(project => project.id === currentProject.id);
    const isLastItem = currentIndex === projects.length - 1;
    
    isLastItem ? updateProject(projects[0]) : updateProject(projects[currentIndex + 1]);
  }, 4000);

  return (
    <>
      <div className={styles.logo_backdrop}></div>
      <div className={styles.logo_container}>
        <Image className={styles.logo_container_img} src='/logos/midori_logomaster.png' alt='midori logo' layout='fill'/>
      </div>
      <div className={styles.title_container}>
        <p className={styles.title_container_text}>{currentProject.projectName}</p>
      </div>
      <div className={styles.image_container}>
        <Image onClick={()=>router.push('/projecte?id=' + currentProject.id)} className={styles.image_container_img} src={currentProject.imageSource} alt='project image' layout='fill'/>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home

function useInterval (callback: () => void, delay: number) {
  const savedCallback = useRef<any>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
