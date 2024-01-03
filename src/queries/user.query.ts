import api from "@/libs/api";
import { useUserStore } from "@/store/user.store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
function useSaveUser() {
  const queryClient = useGetUser()

  return useMutation({
    mutationKey: ["user-store"],
    mutationFn: (user: any) => {
      return api.post("/user", user).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch()
    },
  });
}

function useUpdateUser() {
  const queryClient = useGetUser()

  return useMutation({
    mutationKey: ["user-update"],
    mutationFn: (user: any) => {
      return api.put(`/user/${user.id}`, user.value).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch()
    },
  });
}

function useDeleteUser() {
  const queryClient = useGetUser()

  return useMutation({
    mutationKey: ["user-delete"],
    mutationFn: (id: number) => {
      return api.delete(`/user/${id}`).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch()
    },
  });
}

function useSaveSetActiveUser() {
  const queryClient = useGetUser()

  return useMutation({
    mutationKey: ["user-set-active"],
    mutationFn: (data: any) => {
      return api.post(`/user/set-active-user/${data.id}`, data).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch()
    },
  });
}

export {
  useGetUserActive,
  useGetUser,
  useSaveUser,
  useDeleteUser,
  useUpdateUser,
  useSaveSetActiveUser,
};
