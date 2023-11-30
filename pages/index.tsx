import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Footer from '../components/Footer';
import projectesPortada from '../lib/portada';
import { ProjectCover } from '../models';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const projects: ProjectCover[] = projectesPortada;

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
