import { create } from "zustand";

type PortofolioStore = {
  portofolio: Portofolio[];
  page: number;
  pageSize: number;
  isMaxPage: boolean;
  setMaxPage: (isMaxPage: boolean) => void;
  setPortofolio: (portofolio: Portofolio[]) => void;
  setPage: (page: number) => void;
  resetPortofolio: () => void;
};

const portofolio: Portofolio[] = [];

export const usePortofolioStore = create<PortofolioStore>((set) => ({
  portofolio: portofolio,
  page: 1,
  pageSize: 3,
  isMaxPage: false,
  setMaxPage: (isMaxPage: boolean) => set({ isMaxPage: isMaxPage }),
  setPage: (newPage: number) => set({ page: newPage }),
  setPortofolio: (newPortofolio: Portofolio[]) =>
    set({ portofolio: newPortofolio }),
  resetPortofolio: () => set({ portofolio: [], page: 1 }),
}));
