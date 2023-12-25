"use client";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { useCategoryStore } from "../store/categories";
import { useMemo } from "react";
import PortoFolioCard from "./PortofolioCard";

export default function Portofolio() {
  const { categories: categories } = useCategoryStore();

  const futureCategory = useMemo(() => {
    return categories.filter((category) => category.isFutured === true);
  }, [categories]);
  return (
    <>
      <div className="ttile">
        <h3
          className="
            text-gray-200
            lg:text-[40px]
            md:text-[30px]
            text-2xl
            font-bold
            leading-[48px]
            lg:text-start md:text-start text-center
            "
        >
          My Work
        </h3>
        <div className="header lg:text-start md:text-start text-center lg:flex md:flex justify-between items-center">
          <span
            className="
        text-gray-300
        lg:text-xl
        md:text-lg
        text-base
        font-normal
        font-['Space
        Grotesk']
        leading-7
        w-[600px]
        "
          >
            Here are some of my design works that showcase my design skills and
            expertise. Click on each project to see
          </span>
          <div className="catagory flex gap-3 justify-center lg:my-0 my-5">
            {futureCategory.map((category, index) => {
              const isLastIndex: boolean = index === futureCategory.length - 1;
              return (
                <span key={index} className="flex gap-2">
                  {!isLastIndex ? (
                    <GlobeAltIcon className="w-5 h-5" color="#EAB308" />
                  ) : (
                    <DevicePhoneMobileIcon
                      className="w-5 h-5"
                      color="#3B82F6 "
                    />
                  )}{" "}
                  {category.title}
                </span>
              );
            })}
          </div>
        </div>
        <div className="content my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <PortoFolioCard />
          <PortoFolioCard />
          <PortoFolioCard />
        </div>
      </div>
    </>
  );
}
