import { NextPage } from "next";
import { MenuList, Project } from "../../models";
import styles from './Menu.module.scss';

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

  const handleNavigation = (id: string) => {
    onItemSelected(id)
  };

  return (
    <>
      <div>
        {
          Object.keys(menuCategories).map((category, i) =>
            <ul className={styles.menu_list} key={i}>
              {category}
              {
                menuCategories[category].map(project =>
                  <li 
                    onClick={()=>handleNavigation(project.id)} 
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

Menu.getInitialProps


export default Menu;