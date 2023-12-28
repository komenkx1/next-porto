import { usePortofolioStore } from "@/store/portofolio.store";

function useloadMorePortofolio() {
  return (newPortofolio: Portofolio[]) =>
    usePortofolioStore.setState((state) => ({
      portofolio: [...state.portofolio, ...newPortofolio],
    }));
}

export { useloadMorePortofolio };
