import { create } from "zustand";
type CategoryStore = {
  categories: Category[];
  setCategory: (category: Category[]) => void;
};

const menu: Category[] = [];

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: menu,
  setCategory: (newCategory: Category[]) => set({ categories: newCategory }),
}));
