import { create } from "zustand";

type Menu = {
  title: string;
  link: string;
};

type MenuStore = {
  menu: Menu[];
  menuExpanded: boolean;
  setMenu: (menu: Menu[]) => void;
  expandMenu: () => void;
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
  menuExpanded: false,
  setMenu: (newMenu: Menu[]) => set({ menu: newMenu }),
  expandMenu: () => {
    set((state) => ({ menuExpanded: !state.menuExpanded }));
  },
}));
