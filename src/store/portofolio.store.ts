import { create } from "zustand";

type PortofolioStore = {
  portofolio: Portofolio[];
  page: number;
  pageSize: number;
  setPortofolio: (portofolio: Portofolio[]) => void;
  setPage: (page: number) => void;
};

const portofolio: Portofolio[] = [];

export const usePortofolioStore = create<PortofolioStore>((set) => ({
  portofolio: portofolio,
  page: 1,
  pageSize: 3,
  setPage: (newPage: number) => set({ page: newPage }),
  setPortofolio: (newPortofolio: Portofolio[]) =>
    set({ portofolio: newPortofolio }),
}));
