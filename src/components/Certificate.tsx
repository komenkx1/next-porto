"use client";
import { useRef } from "react";
import HeaderSection from "./HeaderSection";
import SliderCarousel from "./Slider";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Certificate() {
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
      <div id="certificates" className="section py-10" data-aos="fade" data-aos-delay="200">
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
        <SliderCarousel ref={sliderRef} />
      </div>
    </>
  );
}
