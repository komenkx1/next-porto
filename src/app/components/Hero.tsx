import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";

export default function Hero() {
  return (
    <>

      <div className="hero px-28 py-24 text-center">
        <h1
          className="text-gray-200
        text-[64px]
        font-medium
        leading-[72px]
        pb-6"
        >
          Crafting Memorable User Experiences for Business Success
        </h1>
        <div className="text-center text-gray-300 text-xl font-normal font-['Space Grotesk'] leading-7 mb-10">
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
