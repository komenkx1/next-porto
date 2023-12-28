import { create } from "zustand";
type CategoryStore = {
  categories: Category[];
};

const menu: Category[] = [
  {
    title: "Web",
    isFutured: true,
  },
  {
    title: "Mobile",
    isFutured: true,
  },
  {
    title: "Desktop",
    isFutured: false,
  },
  {
    title: "Javascript",
    isFutured: false,
  },
  {
    title: "Laravel",
    isFutured: false,
  },
  {
    title: "Other",
    isFutured: false,
  },
];

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: menu,
}));
