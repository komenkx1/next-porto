import api from "@/libs/api";
import { usePortofolioStore } from "@/store/portofolio.store";
import { useQuery } from "@tanstack/react-query";

function useGetPortofolio(param: portofolioParams) {
  const setPortofolio = usePortofolioStore((state) => state.setPortofolio);
  const setMaxPage = usePortofolioStore((state) => state.setMaxPage);
  const page = usePortofolioStore.getState().page;
  return useQuery({
    queryKey: ["portofolio", param],
    queryFn: () => {
      return api
        .get("/portofolio", {
          params: param,
        })
        .then((response) => {
          const portofolios = response.data;
          const currentPage = Number(portofolios.currentPage);
          if (currentPage === 1) {
            setPortofolio(portofolios.data);
          }
          page == response.data?.totalPages ? setMaxPage(true) : setMaxPage(false);

          return portofolios;
        });
    },
  });
}

export { useGetPortofolio };
