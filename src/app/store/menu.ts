import { create } from "zustand";

type Menu = {
  title: string;
  link: string;
};

type MenuStore = {
  menu: Menu[];
  setMenu: (menu: Menu[]) => void;
};

const menu: Menu[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Portofolio",
    link: "/portofolio",
  },
  {
    title: "Resources",
    link: "/resource",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

export const useMenuStore = create<MenuStore>((set) => ({
  menu: menu,
  setMenu: (newMenu: Menu[]) => set({ menu: newMenu }),
}));
