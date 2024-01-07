import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";

export default function HeroLoading() {
  return (
    <>
      <div
        id="home"
        className={`section hero lg:px-28 lg:py-32 py-7 text-center ${"animate-pulse"} w-full d-flex justify-center text-center`}
      >
        <div
          data-aos="fade"
          className={`text-gray-200 lg:mt-16 my-3 lg:text-[64px] md:text-[32px] text-[28px] font-medium lg:leading-[72px] pb-6 ${"bg-gray-300 h-16 rounded-xl animate-pulse"}`}
        >
        </div>
        <div
          data-aos="fade"
          data-aos-delay="200"
          className={`text-center text-gray-300 lg:text-xl rounded-lg md:text-lg font-normal font-['Space Grotesk'] lg:leading-7 leading-normal text-base mb-10 ${"bg-gray-300 h-12 animate-pulse"}`}
        >
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className={`flex justify-center items-center float ${"opacity-50 pointer-events-none"}`}
        >
          <div className="w-16 h-16 cursor-pointer transition-all hover:bg-[#6C4BEF] bg-white bg-opacity-20 rounded-full backdrop-blur-[2px] flex justify-center items-center">
            <ArrowDownCircleIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      ;
    </>
  );
}
