import api from "@/libs/api";
import { useTagStore } from "@/store/tag.store";
import { useMutation, useQuery } from "@tanstack/react-query";

function useGetTag() {
  const setTag = useTagStore((state) => state.setTag);

  return useQuery({
    queryKey: ["tags"],
    queryFn: () => {
      return api.get("/tag").then((response) => {
        const tags = response.data.data;
        setTag(tags);
        return tags;
      });
    },
  });
}

function useSaveTag() {
  const queryClient = useGetTag();

  return useMutation({
    mutationKey: ["tag-store"],
    mutationFn: (tag: any) => {
      return api.post("/tag", tag).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useUpdateTag() {
  const queryClient = useGetTag();

  return useMutation({
    mutationKey: ["tag-update"],
    mutationFn: (tag: any) => {
      return api.put(`/tag/${tag.id}`, tag.value).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useDeleteTag() {
  const queryClient = useGetTag();

  return useMutation({
    mutationKey: ["tag-delete"],
    mutationFn: (id: number) => {
      return api.delete(`/tag/${id}`).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

export { useGetTag, useSaveTag, useUpdateTag, useDeleteTag };
