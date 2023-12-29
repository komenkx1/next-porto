import api from "@/libs/api";
import { useUserStore } from "@/store/user.store";
import { useQuery } from "@tanstack/react-query";

function useGetUser() {
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
          const user = response.data.data[0];
          setUser(user);
          return user;
        });
    },
  });
}

export { useGetUser };
