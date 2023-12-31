import { usePortofolioStore } from "@/store/portofolio.store";

function useLoadMorePortofolio() {
  return (newPortofolio: Portofolio[]) => {
    usePortofolioStore.setState((state) => ({
      portofolio: [...state.portofolio, ...newPortofolio],
    }));
  };
}

export { useLoadMorePortofolio };
