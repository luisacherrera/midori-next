import { NextPage } from "next";
import Image from 'next/image';
import { MenuList, Project } from "../../models";
import styles from './Menu.module.scss';
import { MouseEvent, MouseEventHandler, useState } from "react";

interface MenuProps {
  currentProjectId: string | string[] | undefined;
  projects: Project[];
  onItemSelected: CallableFunction;
}

const Menu: NextPage<MenuProps> = ({currentProjectId, projects, onItemSelected}: MenuProps) => {
  const menuCategories: MenuList = projects.reduce((acc: MenuList, curr: Project)=>{
    if (acc[curr.category]) {
        acc[curr.category].push({
            id: curr.id,
            projectName: curr.projectName
        })
    } else {
        acc[curr.category] = [{
            id: curr.id,
            projectName: curr.projectName
        }]
    }
    return acc
}, {} as MenuList);

  const handleNavigation = (id: string, event: MouseEvent) => {
    event.stopPropagation();
    onItemSelected(id);
  };

  const [openCategories, setCategories] = useState<string[]>([]);

  const handleOpenCategories = (category: string) => {
    openCategories.includes(category) ? 
      setCategories(openCategories.filter(open => open !== category)) : 
      setCategories([...openCategories, category]);
  }

  return (
    <>
      <div className={styles.wrapper}>
        {
          Object.keys(menuCategories).map((category, i) =>
            <ul 
              onClick={()=>handleOpenCategories(category)} 
              className={ openCategories.includes(category) ? `${styles.menu_list} ${styles.menu_list_open}` : `${styles.menu_list}`}
              key={i}>
              <span>
                {category}
                <div className={styles.menu_list_show_more}>
                  <Image src="/icons/show_more.png" alt="show more" layout="fill"/>
                </div>
              </span>
              {
                menuCategories[category].map(project =>
                  <li 
                    onClick={(event)=>handleNavigation(project.id, event)} 
                    key={project.id}
                    className={ project.id === currentProjectId ? `${styles.selected}` : '' }
                  >
                    {project.projectName}
                  </li>
                )
              }
            </ul>
          )
        }
      </div>
    </>
  )
}

export default Menu;