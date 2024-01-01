import { create } from "zustand";

type UserStore = {
  user?: User;
  users?: User[];
  setUser: (user: User) => void;
  setUsers: (users: User[]) => void;
};
let user: User;
export const useUserStore = create<UserStore>((set) => ({
  user: user,
  users: [],
  setUsers: (newUsers: User[]) => set({ users: newUsers }),
  setUser: (newUser: User) => set({ user: newUser }),
}));
