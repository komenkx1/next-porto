import api from "@/libs/api";
import { useCategoryStore } from "@/store/categories.store";
import { useQuery } from "@tanstack/react-query";

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

export { useGetCategory };
