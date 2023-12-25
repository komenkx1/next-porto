import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";

export default function Hero() {
  return (
    <>
      <div className="hero lg:px-28 lg:py-32 py-7 text-center">
        <h1
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
        <div className="text-center text-gray-300 lg:text-xl md:text-lg font-normal font-['Space Grotesk'] lg:leading-7 leading-normal
        text-base mb-10">
          I blend exquisite design with impeccable functionality for an
          exceptional <br />
          user experience, while keeping users captivated.
        </div>
        <div className="flex justify-center items-center float">
          <div className="w-16 h-16  cursor-pointer transition-all hover:bg-[#6C4BEF] bg-white bg-opacity-20 rounded-full backdrop-blur-[2px] flex justify-center items-center">
            <ArrowDownCircleIcon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
