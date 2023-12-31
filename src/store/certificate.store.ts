import { create } from "zustand";
type CertificateStore = {
  certificate: Certificate[];
  setCertificate: (category: Certificate[]) => void;
};

const certificate: Certificate[] = [];

export const useCertificateStore = create<CertificateStore>((set) => ({
  certificate: certificate,
  setCertificate: (newCertificate: Certificate[]) =>
    set({ certificate: newCertificate }),
}));
