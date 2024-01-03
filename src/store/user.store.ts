import { create } from "zustand";

type UserStore = {
  user?: User;
  users?: User[];
  isRefreshData?: boolean;
  setUser: (user: User) => void;
  setUsers: (users: User[]) => void;
  setRefreshData: (isRefreshData: boolean) => void;
};
let user: User;
export const useUserStore = create<UserStore>((set) => ({
  user: user,
  users: [],
  isRefreshData: false,
  setRefreshData: (isRefreshData: boolean) => set({ isRefreshData }),
  setUsers: (newUsers: User[]) => set({ users: newUsers }),
  setUser: (newUser: User) => set({ user: newUser }),
}));
