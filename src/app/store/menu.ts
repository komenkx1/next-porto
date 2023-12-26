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
  scrollTo: (link: string) => any;
};

const menu: Menu[] = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "Portofolio",
    link: "portofolio",
  },
  {
    title: "Resources",
    link: "resource",
  },
  {
    title: "Certificates",
    link: "certificates",
  },
  {
    title: "About",
    link: "about",
  },
];

export const useMenuStore = create<MenuStore>((set) => ({
  menu: menu,
  menuExpanded: false,
  setMenu: (newMenu: Menu[]) => set({ menu: newMenu }),
  expandMenu: () => {
    set((state) => ({ menuExpanded: !state.menuExpanded }));
  },
  scrollTo: (link: string) => (event: any) => {
    event.preventDefault();

    if (link === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetElement = document.getElementById(link);
    console.log(link);

    if (targetElement) {
      const offset = 100; // Adjust this offset according to your design
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  },
}));
