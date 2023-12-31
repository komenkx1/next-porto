import api from "@/libs/api";
import { usePortofolioStore } from "@/store/portofolio.store";
import { useQuery } from "@tanstack/react-query";

function useGetPortofolio() {
  const setPortofolio = usePortofolioStore((state) => state.setPortofolio);
  const page = usePortofolioStore.getState().page;
  return useQuery({
    queryKey: ["portofolio"],
    queryFn: () => {
      return api
        .get("/portofolio", {
          params: {
            page: page,
            pageSize: 3,
          },
        })
        .then((response) => {
          const portofolios = response.data;
          const currentPage = Number(portofolios.currentPage);
          if (currentPage=== 1) {
            setPortofolio(portofolios.data);
          }
          return portofolios;
        });
    },
  });
}

export { useGetPortofolio };
