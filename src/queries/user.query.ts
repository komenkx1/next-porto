import api from "@/libs/api";
import { useUserStore } from "@/store/user.store";
import { useQuery } from "@tanstack/react-query";

function useGetUserActive() {
  const setUser = useUserStore((state) => state.setUser);
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return api
        .get("/user", {
          params: {
            is_active: true,
          },
        })
        .then((response) => {
          const user = response.data.data;
          setUser(user[0]);
          return user;
        });
    },
  });
}

function useGetUser() {
  const setUsers = useUserStore((state) => state.setUsers);
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return api.get("/user", {}).then((response) => {
        const user = response.data.data;
        setUsers(user);
        return user;
      });
    },
  });
}

export { useGetUserActive, useGetUser };
