import api from "@/libs/api";
import { useCertificateStore } from "@/store/certificate.store";
import { useMutation, useQuery } from "@tanstack/react-query";

function useGetCertificate() {
  const setCertificate = useCertificateStore((state) => state.setCertificate);

  return useQuery({
    queryKey: ["certificate"],
    queryFn: () => {
      return api.get("/certificate").then((response) => {
        const certificate = response.data.data;
        setCertificate(certificate);
        return certificate;
      });
    },
  });
}

function useSaveCertificate() {
  const queryClient = useGetCertificate();

  return useMutation({
    mutationKey: ["certificate-store"],
    mutationFn: (certificate: any) => {
      return api.post("/certificate", certificate).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useUpdateCertificate() {
  const queryClient = useGetCertificate();

  return useMutation({
    mutationKey: ["certificate-update"],
    mutationFn: (certificate: any) => {
      return api
        .put(`/certificate/${certificate.id}`, certificate.value)
        .then((response) => {
          return response.data;
        });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

function useDeleteCertificate() {
  const queryClient = useGetCertificate();

  return useMutation({
    mutationKey: ["certificate-delete"],
    mutationFn: (id: number) => {
      return api.delete(`/certificate/${id}`).then((response) => {
        return response.data;
      });
    },
    onSuccess: () => {
      queryClient.refetch();
    },
  });
}

export {
  useGetCertificate,
  useSaveCertificate,
  useUpdateCertificate,
  useDeleteCertificate,
};
