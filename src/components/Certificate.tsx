"use client";
import { useRef } from "react";
import HeaderSection from "./HeaderSection";
import SliderCarousel from "./Slider";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useCertificateStore } from "@/store/certificate.store";
import { useGetCertificate } from "@/queries/certificate.query";

export default function Certificate() {
  const { isLoading: isCertificateLoading, data: certificateData } =
    useGetCertificate();
  const { certificate: certificate } = useCertificateStore();
  const sliderRef = useRef<any>(null);
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.goToPrevSlide();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.goToNextSlide();
    }
  };
  return (
    <>
      <div
        id="certificates"
        className="section py-10"
        data-aos="fade"
        data-aos-delay="200"
      >
        <HeaderSection
          title="Certificate"
          description="
          Here my certificate that I have earned from various courses and 
          training that I have attended."
        >
          <ArrowLeftIcon
            className="w-5 h-5 text-white cursor-pointer"
            onClick={goToPrevSlide}
          />
          <ArrowRightIcon
            className="w-5 h-5 text-white cursor-pointer"
            onClick={goToNextSlide}
          />
        </HeaderSection>
        
        {!isCertificateLoading ? (
          <SliderCarousel sliderData={certificate} ref={sliderRef} />
        ) : (
          <div className="flex justify-center items-center"></div>
        )}
      </div>
    </>
  );
}
