"use client";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { useMenuStore } from "../store/menu.store";

export default function Hero() {
  const {
    scrollTo: scrollTo,
  } = useMenuStore();

  return (
    <>
      <div id="home" className="section hero lg:px-28 lg:py-32 py-7 lg:mt-16 text-center">
        <h1
          data-aos="fade"
          className="text-gray-200
        lg:text-[64px]
        md:text-[32px]
        text-[28px]
        font-medium
        lg:leading-[72px]
        pb-6"
        >
          Crafting Memorable User Experiences Application for Business Success
        </h1>
        <div
          data-aos="fade"
          data-aos-delay="200"
          className="text-center text-gray-300 lg:text-xl md:text-lg font-normal font-['Space Grotesk'] lg:leading-7 leading-normal
        text-base mb-10"
        >
          I blend exquisite design with impeccable functionality for an
          exceptional <br />
          user experience, while keeping users captivated.
        </div>
        <div
          onClick={scrollTo("portofolio")}
          data-aos="fade-down"
          data-aos-delay="300"
          className="flex justify-center items-center float"
        >
          <div className="w-16 h-16  cursor-pointer transition-all hover:bg-[#6C4BEF] bg-white bg-opacity-20 rounded-full backdrop-blur-[2px] flex justify-center items-center">
            <ArrowDownCircleIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
