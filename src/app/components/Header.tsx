"use client";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { useMenuStore } from "../store/menu";

export default function Header() {
  const { menu: menu } = useMenuStore();
  return (
    <div className=" h-24 justify-center items-center flex">
      <div className="w-[160.25px] h-24 px-1 py-8 flex-col justify-start items-start gap-1 flex">
        <div className="w-[152.25px] h-8 relative">
          <p>Mang Wahyu</p>
        </div>
      </div>
      <div className="grow shrink basis-0 h-24 flex justify-center items-center">
        {menu.map((item, index) => {
          const isLastItem = index === menu.length - 1;
          return (
            <div
              key={index}
              className="flex justify-center items-center gap-6 "
            >
              <div className="text-violet-100 text-base font-medium font-['Space Grotesk'] leading-normal cursor-pointer hover:bg-white hover:text-black hover:p-2 hover:rounded-md transition-all">
                {item.title}
              </div>
              {!isLastItem ? (
                <div className="w-6 h-[0px] origin-top-left rotate-[-80deg] border border-gray-400 mt-6"></div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-32 justify-end items-center gap-2 flex group cursor-pointer transition-all">
        <div className="transition-all group-hover:bg-[#6C4BEF] group-hover:border-black px-3.5 py-[15px] rounded-[74px] border border-gray-300 flex-col justify-center items-center gap-1 inline-flex">
        <EnvelopeIcon className="w-4 h-4" strokeWidth={2} />
        </div>
        <div className="text-gray-300 text-base font-medium font-['Space Grotesk'] leading-normal">
          Let’s Talk
        </div>
      </div>
    </div>
  );
}
