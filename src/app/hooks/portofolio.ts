import { usePortofolioStore } from "../store/portofolio.store";

type Portofolio = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: Category;
  tags: Tag[];
};

type Category = {
  title: string;
  isFutured?: boolean;
};

type Tag = {
  title: string;
};

function useloadMorePortofolio() {
  return (newPortofolio: Portofolio[]) =>
    usePortofolioStore.setState((state) => ({
      portofolio: [...state.portofolio, ...newPortofolio],
    }));
}

export { useloadMorePortofolio };
