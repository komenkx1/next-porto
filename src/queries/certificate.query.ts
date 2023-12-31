import api from "@/libs/api";
import { useCertificateStore } from "@/store/certificate.store";
import { useQuery } from "@tanstack/react-query";

function useGetCertificate() {
  const setCertificate = useCertificateStore((state) => state.setCertificate);

  return useQuery({
    queryKey: ["certificate"],
    queryFn: () => {
      return api.get("/certificate").then((response) => {
        const certificate = response.data.data;
        setCertificate(certificate);
        console.log(certificate);
        return certificate;
      });
    },
  });
}

export { useGetCertificate };
