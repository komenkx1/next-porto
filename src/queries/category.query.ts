import api from "@/libs/api";
import { useCategoryStore } from "@/store/categories.store";
import { useMutation, useQuery } from "@tanstack/react-query";

function useGetCategory() {
  const setCategory = useCategoryStore((state) => state.setCategory);

  return useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return api.get("/category").then((response) => {
        const categories = response.data.data;
        setCategory(categories);
        return categories;
      });
    },
  });
}

function useSaveCategory() {
  const queryClient = useGetCategory();

  return useMutation({
    mutationKey: ["category-store"],
    mutationFn: (category: any) => {
      return api.post("/category", category).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useUpdateCategory() {
  const queryClient = useGetCategory();

  return useMutation({
    mutationKey: ["category-update"],
    mutationFn: (category: any) => {
      return api
        .put(`/category/${category.id}`, category.value)
        .then((response) => {
          return response.data;
        });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useDeleteCategory() {
  const queryClient = useGetCategory();

  return useMutation({
    mutationKey: ["category-delete"],
    mutationFn: (id: number) => {
      return api.delete(`/category/${id}`).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

export {
  useGetCategory,
  useSaveCategory,
  useUpdateCategory,
  useDeleteCategory,
};
