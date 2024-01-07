import Image from "next/image";
import { PhoneArrowUpRightIcon } from "@heroicons/react/16/solid";

const SkeletonLoading = () => (
  <div className="flex-col w-full justify-start items-start gap-4 lg:inline-flex cursor-pointer group">
    <div className="w-full lg:h-[277px] bg-gray-300 animate-pulse rounded-xl"></div>
    <div className="transition-all justify-between w-full items-center gap-[50px] inline-flex lg:my-0 my-5">
      <div className="transition-all h-10 rounded-lg w-full bg-gray-300 group-hover:text-purple-500 text-gray-300 lg:text-xl md:text-lg text-base font-medium font-['Space Grotesk'] leading-7 animate-pulse">

      </div>
      <div className="p-[12px] bg-gray-300 bg-opacity-40 rounded-[49px] backdrop-blur-[30px] justify-center items-center gap-1 flex animate-pulse">
        <PhoneArrowUpRightIcon className="transition-all w-5 h-5 group-hover:w-6 group-hover:h-6" />
      </div>
    </div>
  </div>
);

export default SkeletonLoading;
