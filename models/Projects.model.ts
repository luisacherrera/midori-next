export interface ProjectCover {
  id: string;
  imageSource: string;
  projectName: string;
}

export interface Project {
  id: string;
  projectName: string;
  category: string;
  content: ProjectItem[];
}

export interface ProjectItem {
  image: string;
  description?: string;
}

export interface MenuList {
  [key: string]: MenuItem[];
}

export interface MenuItem {
  id: string;
  projectName: string;
}
