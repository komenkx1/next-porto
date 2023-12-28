import { create } from "zustand";

type Menu = {
  title: string;
  link: string;
  isActive: boolean;
};

type MenuStore = {
  menu: Menu[];
  menuExpanded: boolean;
  setMenu: (menu: Menu[]) => void;
};

const menu: Menu[] = [
  {
    title: "Home",
    link: "home",
    isActive: true,
  },
  {
    title: "Portofolio",
    link: "portofolio",
    isActive: false,
  },
  {
    title: "Resources",
    link: "resource",
    isActive: false,
  },
  {
    title: "Certificates",
    link: "certificates",
    isActive: false,
  },
  {
    title: "About",
    link: "about",
    isActive: false,
  },
];

export const useMenuStore = create<MenuStore>((set) => ({
  menu: menu,
  menuExpanded: false,
  setMenu: (newMenu: Menu[]) => set({ menu: newMenu }),
 
}));
