"use client";
import {
  ArrowRightCircleIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { useCategoryStore } from "../store/categories";
import { useMemo } from "react";
import PortoFolioCard from "./PortofolioCard";
import HeaderSection from "./HeaderSection";

export default function Portofolio() {
  const { categories: categories } = useCategoryStore();

  const futureCategory = useMemo(() => {
    return categories.filter((category) => category.isFutured === true);
  }, [categories]);
  return (
    <>
      <div className="ttile">
        <HeaderSection
          title="My Work"
          description="Here are some of my design works that showcase my 
            design skills and expertise. Click on each project to see"
        >
          {futureCategory.map((category, index) => {
            const isLastIndex: boolean = index === futureCategory.length - 1;
            return (
              <span key={index} className="flex gap-2">
                {!isLastIndex ? (
                  <GlobeAltIcon className="w-5 h-5" color="#EAB308" />
                ) : (
                  <DevicePhoneMobileIcon className="w-5 h-5" color="#3B82F6 " />
                )}{" "}
                {category.title}
              </span>
            );
          })}
        </HeaderSection>
        <div className="content my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center">
          <PortoFolioCard />
          <PortoFolioCard />
          <PortoFolioCard />
          <div className="button cursor-pointer lg:col-span-3 md:col-span-2 w-full flex justify-center lg:py-12 md:py-5">
            <div className=" w-52 h-14 px-8 py-4 hover:bg-transparent transition-all bg-violet-600 rounded-xl border border-white justify-center items-center gap-2 inline-flex">
              <div className="text-center text-slate-50 text-base font-medium font-['Space Grotesk'] leading-normal">
                More This Way
              </div>
              <ArrowRightCircleIcon className="w-6 h-6 text-slate-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
