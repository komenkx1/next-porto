"use client";
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCertificate from "./ImageCertificate";
type SliderProps = {
  sliderData?: any;
};
// eslint-disable-next-line react/display-name
const SliderCarousel = forwardRef((props: SliderProps, ref) => {
  const carouselRef = useRef<Slider>(null);
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.slickNext();
    }
  };

  useImperativeHandle(ref, () => ({
    goToPrevSlide,
    goToNextSlide,
  }));

  return (
    <div className="my-6">
      <Slider ref={carouselRef} {...settings}>
        {props.sliderData?.map((data: any, index: number) => {
          return (
            <div key={index}>
              <ImageCertificate imageUrl={data.thumbnail} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
});

export default SliderCarousel;
