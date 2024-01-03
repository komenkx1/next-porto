import { create } from "zustand";
type TagStore = {
  tags: Tag[];
  setTag: (tag: Tag[]) => void;
};

const menu: Tag[] = [];

export const useTagStore = create<TagStore>((set) => ({
  tags: menu,
  setTag: (newTag: Tag[]) => set({ tags: newTag }),
}));
