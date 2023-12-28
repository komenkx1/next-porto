import { useMenuStore } from "@/store/menu.store";
function useExpandMenu() {
  return () =>
    useMenuStore.setState((state) => ({
      menuExpanded: !state.menuExpanded,
    }));
}

function setActiveMenu(link: string) {
  useMenuStore.setState((state) => ({
    menu: state.menu.map((item) =>
      item.link === link
        ? { ...item, isActive: true }
        : { ...item, isActive: false }
    ),
  }));
}

function useSetActiveMenu() {
  return (link: string) => setActiveMenu(link);
}

function useScrollTo() {
  return (link: string) =>
    (event: any): void => {
      event.preventDefault();
      setActiveMenu(link);

      useMenuStore.setState((state) => ({
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
        const offset = 100;
        const targetPosition = targetElement.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    };
}

export { useExpandMenu, useScrollTo, useSetActiveMenu };
