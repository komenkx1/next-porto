import api from "@/libs/api";
import { usePortofolioStore } from "@/store/portofolio.store";
import { useMutation, useQuery } from "@tanstack/react-query";

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
          page == response.data?.totalPages
            ? setMaxPage(true)
            : setMaxPage(false);

          return portofolios;
        });
    },
  });
}

function useSavePortofolio() {
  const queryClient = useGetPortofolio({
    page: 1,
    title: "",
    pageSize: 9999999,
  });

  return useMutation({
    mutationKey: ["porto-store"],
    mutationFn: (portofolio: any) => {
      return api.post("/portofolio", portofolio).then((response) => {
        return response.data.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useUpdatePortofolio() {
  const queryClient = useGetPortofolio({
    page: 1,
    title: "",
    pageSize: 9999999,
  });

  return useMutation({
    mutationKey: ["porto-update"],
    mutationFn: (portofolio: any) => {
      return api
        .put(`/portofolio/${portofolio.id}`, portofolio.value)
        .then((response) => {
          return response.data;
        });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

export { useGetPortofolio, useSavePortofolio, useUpdatePortofolio };
