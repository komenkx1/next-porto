import api from "@/libs/api";
import { useTagStore } from "@/store/tag.store";
import { useQuery } from "@tanstack/react-query";

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

export { useGetTag };
