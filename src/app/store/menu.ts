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
  expandMenu: () => void;
  scrollTo: (link: string) => any;
  setActiveMenu: (link: string) => void;
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
  expandMenu: () => {
    set((state) => ({ menuExpanded: !state.menuExpanded }));
  },
  scrollTo: (link: string) => (event: any) => {
    event.preventDefault();
    set((state) => ({
      menu: state.menu.map((item) =>
        item.link === link
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      ),
    }));
    if (link === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetElement = document.getElementById(link);

    if (targetElement) {
      const offset = 100; // Adjust this offset according to your design
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  },
  setActiveMenu: (link: string) => {
    set((state) => ({
      menu: state.menu.map((item) =>
        item.link === link
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      ),
    }));
  },
}));
