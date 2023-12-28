import { create } from "zustand";

type Category = {
  title: string;
  isFutured?: boolean;
};

type Tag = {
  title: string;
};

type Portofolio = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: Category;
  tags: Tag[];
};

type PortofolioStore = {
  portofolio: Portofolio[];
  loadMorePortofolio: (portofolio: Portofolio[]) => void;
  setPortofolio: (portofolio: Portofolio[]) => void;
};

const portofolio: Portofolio[] = [
  {
    title: "Mobile App 1",
    description: "This is a mobile app description",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
    category: {
      title: "Mobile",
      isFutured: true,
    },
    tags: [
      {
        title: "React Native",
      },
      {
        title: "TypeScript",
      },
    ],
  },
  {
    title: "Web App 1",
    description: "This is a web app description",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
    category: {
      title: "Web",
      isFutured: true,
    },
    tags: [
      {
        title: "React",
      },
      {
        title: "TypeScript",
      },
    ],
  },
  {
    title: "Web App 2",
    description: "This is a web app description",
    image: "https://via.placeholder.com/150",
    link: "https://www.google.com",
    category: {
      title: "Web",
      isFutured: true,
    },
    tags: [
      {
        title: "React",
      },
      {
        title: "TypeScript",
      },
    ],
  },
];

export const usePortofolioStore = create<PortofolioStore>((set) => ({
  portofolio: portofolio,
  setPortofolio: (newPortofolio: Portofolio[]) =>
    set({ portofolio: newPortofolio }),
  loadMorePortofolio: (newPortofolio: Portofolio[]) => {
    set((state) => ({ portofolio: [...state.portofolio, ...newPortofolio] }));
  },
}));
