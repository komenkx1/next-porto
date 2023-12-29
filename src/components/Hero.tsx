"use client";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { useScrollTo } from "../hooks/menu";
import { useGetUser } from "@/queries/user.query";
import { useUserStore } from "@/store/user.store";

export default function Hero() {
  const { isLoading: isLoadingUser } = useGetUser();
  const { user: user } = useUserStore();
  const scrollTo = useScrollTo();

  return (
    <>
      <div
        id="home"
        className="section hero lg:px-28 lg:py-32 py-7 lg:mt-16 text-center"
      >
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
          {isLoadingUser ? "Loading..." : user?.jargon?.primary_text}
        </h1>
        <div
          data-aos="fade"
          data-aos-delay="200"
          className="text-center text-gray-300 lg:text-xl md:text-lg font-normal font-['Space Grotesk'] lg:leading-7 leading-normal
        text-base mb-10"
        >
          {isLoadingUser ? "Loading..." : user?.jargon?.secondary_text}
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
