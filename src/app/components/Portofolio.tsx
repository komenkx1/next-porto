"use client";
import {
  ArrowDownCircleIcon,
  ArrowRightCircleIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import { useCategoryStore } from "../store/categories";
import { useMemo } from "react";
import PortoFolioCard from "./PortofolioCard";
import HeaderSection from "./HeaderSection";
import Button from "./Button";
import { usePortofolioStore } from "../store/portofolio";

export default function Portofolio() {
  const { categories: categories } = useCategoryStore();
  const { portofolio: portofolio, loadMorePortofolio: loadMorePortofolio } =
    usePortofolioStore();
  const portofolios = [
    {
      title: "Mobile App 1",
      description: "This is a mobile app description",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      category: {
        title: "Mobile",
        isFutured: true,
      },
      tags: [
        {
          title: "React Native",
        },
        {
          title: "TypeScript",
        },
      ],
    },
    {
      title: "Web App 1",
      description: "This is a web app description",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      category: {
        title: "Web",
        isFutured: true,
      },
      tags: [
        {
          title: "React",
        },
        {
          title: "TypeScript",
        },
      ],
    },
    {
      title: "Web App 2",
      description: "This is a web app description",
      image: "https://via.placeholder.com/150",
      link: "https://www.google.com",
      category: {
        title: "Web",
        isFutured: true,
      },
      tags: [
        {
          title: "React",
        },
        {
          title: "TypeScript",
        },
      ],
    },
  ];
  const futureCategory = useMemo(() => {
    return categories.filter((category) => category.isFutured === true);
  }, [categories]);
  return (
    <>
      <div className="section ttile" id="portofolio">
        <div data-aos="fade-left">
          <HeaderSection
            title="My Work"
            description="Here are some of my design works that showcase my 
            design skills and expertise. Click on each project to see"
          >
            {futureCategory.map((category, index) => {
              const isLastIndex: boolean = index === futureCategory.length - 1;
              return (
                <span key={index} data-aos="fade-right" className="flex gap-2 items-center">
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
            <span data-aos="fade-right" className="!transition-all hover:bg-white cursor-pointer hover:p-2 rounded-md hover:text-black flex gap-2 items-center">
              <MagnifyingGlassIcon className="w-5 h-5" color="#3B82F6" />
              Search
            </span>
          </HeaderSection>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="content my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center"
        >
          {portofolio.map((portofolio, index) => {
            return <PortoFolioCard key={index} data-aos="fade-up" />;
          })}
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center lg:py-8 md:py-6 pb-5"
        >
          <Button
            title="More This Way"
            onClick={() => loadMorePortofolio(portofolios)}
          >
            <ArrowDownCircleIcon className="w-6 h-6 text-slate-50" />
          </Button>
        </div>
      </div>
    </>
  );
}
