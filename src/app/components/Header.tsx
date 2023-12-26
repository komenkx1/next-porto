"use client";
import {
  Bars3BottomLeftIcon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useMenuStore } from "../store/menu";
import { useEffect, useState } from "react";

export default function Header() {
  const {
    menu: menu,
    expandMenu: expandMenu,
    menuExpanded: expandedMenu,
  } = useMenuStore();

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.getElementById("header"); // Add an id to the header div
      if (header) {
        setScrolling(scrollPosition > header.clientHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="header"
      className={`relative lg:fixed w-full top-0 z-50 transition-all ${
        scrolling ? "lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-lg lg:bg-opacity-10 lg:bg-gray-200" : ""
      }`}
    >
      <div className=" lg:px-28 px-10 mx-auto h-24 lg:justify-center justify-between items-center flex">
        <div className="lg:w-[160.25px] h-24 px-1 py-8 flex-col justify-start items-start gap-1 flex">
          <div className="w-[152.25px] h-8 relative">
            <p>Mang Wahyu</p>
          </div>
        </div>
        <div
          className="transition-all mobile-menu flex lg:hidden gap-3"
          onClick={expandMenu}
        >
          Menu
          <XMarkIcon
            className={`w-6 h-6 ${expandedMenu ? "block" : "hidden"}`}
          />
          <Bars3BottomLeftIcon
            className={`w-6 h-6 ${expandedMenu ? "hidden" : "block"}`}
          />
        </div>
        <div
          className={`menu lg:!flex lg:grow lg:shrink lg:basis-0 lg:h-24 justify-center items-center transition-all w-36 h-full top-0  z-50 p-4 lg:!relative lg:bg-transparent bg-purple-400 bg-clip-padding lg:backdrop-blur-none lg:backdrop-filter-none backdrop-filter backdrop-blur-md bg-opacity-10  ${
            expandedMenu ? "fixed left-[0px]" : "fixed lg:left-0 left-[-1000px]"
          }`}
        >
          {menu.map((item, index) => {
            const isLastItem = index === menu.length - 1;
            return (
              <div
                key={index}
                className="lg:flex justify-center items-center gap-6 "
              >
                <div className="text-violet-10 text-base font-medium font-['Space Grotesk'] leading-normal cursor-pointer hover:bg-white hover:text-black hover:p-2 hover:rounded-md transition-all lg:py-0 py-1">
                  {item.title}
                </div>
                {!isLastItem ? (
                  <div className="w-6 h-[0px] origin-top-left rotate-[-80deg] border border-gray-400 mt-6 lg:block hidden"></div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
        <div className="w-32 justify-end items-center gap-2 group cursor-pointer transition-all lg:flex hidden">
          <div className="transition-all group-hover:bg-[#6C4BEF] group-hover:border-black px-3.5 py-[15px] rounded-[74px] border border-gray-300 flex-col justify-center items-center gap-1 inline-flex">
            <EnvelopeIcon className="w-4 h-4" strokeWidth={2} />
          </div>
          <div className="text-gray-300 text-base font-medium font-['Space Grotesk'] leading-normal">
            Let’s Talk
          </div>
        </div>
      </div>
    </div>
  );
}
