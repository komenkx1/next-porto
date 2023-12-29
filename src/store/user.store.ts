import { create } from "zustand";

type UserStore = {
  user?: User;
  setUser: (user: User) => void;
};
let user: User;
export const useUserStore = create<UserStore>((set) => ({
  user: user,
  setUser: (newUser: User) => set({ user: newUser }),
}));
