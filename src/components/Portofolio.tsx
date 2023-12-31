"use client";
import {
  ArrowDownCircleIcon,
  ArrowRightCircleIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useCategoryStore } from "@/store/categories.store";
import { useEffect, useMemo, useState } from "react";
import PortoFolioCard from "./PortofolioCard";
import HeaderSection from "./HeaderSection";
import Button from "./Button";
import { usePortofolioStore } from "@/store/portofolio.store";
import { useLoadMorePortofolio } from "../hooks/portofolio";
import { useGetCategory } from "@/queries/category.query";
import { useGetPortofolio } from "@/queries/portofolio.query";

export default function Portofolio() {
  const [isSearch, setSearch] = useState(false);
  const { isLoading: isLoadingCategory } = useGetCategory();
  const [isMaxPage, setMaxPage] = useState(false);
  const {
    portofolio: portofolio,
    page: page,
    setPage: setPage,
    resetPortofolio: resetPortofolio,
  } = usePortofolioStore();
  const [searchInput, setSearchInput] = useState("");
  const [perPageParams, setPerPage] = useState(3);
  const [searchParams, setSearchParams] = useState("");
  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
    setTimeout(() => {
      setSearchParams((prevSearchInput) => prevSearchInput = e.target.value);
    }, 1500);
  };
  const { isLoading: isLoadingPortofolio, refetch: refetch } = useGetPortofolio(
    {
      page: page,
      title: searchParams,
      pageSize: perPageParams,
    }
  );
  const addDataPagin = useLoadMorePortofolio();
  const { categories: categories } = useCategoryStore();

  const loadMorePortofolio = () => {
    try {
      const currentPage = page;
      setPage(currentPage + 1);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isSearch && searchInput != "") {
      resetPortofolio();
      setPerPage(100);
    } else {
      setSearchInput("");
      setPerPage(3);
    }
    console.log(searchParams);

    refetch().then((res) => {
      if (page > 1) {
        addDataPagin(res.data?.data ?? []);
      }

      page == res.data?.totalPages ? setMaxPage(true) : setMaxPage(false);
    });
  }, [page, searchParams, isSearch]);

  const futureCategory = useMemo(() => {
    return categories.filter((category) => category.isFutured === true);
  }, [categories]);

  return (
    <>
      <div className="section ttile" id="portofolio">
        <div data-aos="fade-left">
          <HeaderSection
            title="My Work"
            description="Here are some of myapp works that showcase my programming skills and expertise. Click on each project to see"
          >
            {futureCategory.map((category, index) => {
              const isLastIndex: boolean = index === futureCategory.length - 1;
              return (
                <span
                  key={index}
                  data-aos="fade-right"
                  className={`!transition-all flex gap-2 items-center ${
                    isSearch
                      ? "invisible absolute"
                      : "block aos-init aos-animate"
                  }`}
                >
                  {!isLastIndex ? (
                    <GlobeAltIcon className="w-5 h-5" color="#EAB308" />
                  ) : (
                    <DevicePhoneMobileIcon
                      className="w-5 h-5"
                      color="#3B82F6 "
                    />
                  )}{" "}
                  {category.name}
                </span>
              );
            })}
            <span
              onClick={() => {
                setSearch((prevState) => !prevState);
              }}
              data-aos="fade-right"
              className={`!transition-all hover:bg-white cursor-pointer hover:p-2 rounded-md hover:text-black flex gap-2 items-center ${
                isSearch ? "invisible absolute" : "block aos-init aos-animate"
              }`}
            >
              <MagnifyingGlassIcon className="w-5 h-5" color="#3B82F6" />
              Search
            </span>
            <div
              data-aos="fade-left"
              className={`${
                !isSearch
                  ? "invisible absolute"
                  : "flex items-center gap-2 aos-init aos-animate"
              }`}
            >
              <input
                value={searchInput}
                onChange={(e) => handleSearch(e)}
                type="text"
                placeholder="Search Item"
                className={`text-black w-full p-3 rounded-lg focus:outline-2 focus:outline-purple-500 ${
                  !isSearch
                    ? "invisible absolute"
                    : "block aos-init aos-animate"
                }`}
              />
              <div
                onClick={() => {
                  setSearch((prevState) => !prevState);
                }}
                className={`!transition-all bg-white cursor-pointer p-2 rounded-md text-black flex gap-2 items-center`}
              >
                <XMarkIcon className="w-5 h-5" color="black" />
              </div>
            </div>
          </HeaderSection>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="content my-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center"
        >
          {portofolio.map((portofolio, index) => {
            return (
              <PortoFolioCard
                title={portofolio.title}
                imageUrl={portofolio.image}
                key={index}
                data-aos="fade-up"
              />
            );
          })}
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center lg:py-8 md:py-6 pb-5"
        >
          {!isMaxPage ? (
            <Button title="More This Way" onClick={() => loadMorePortofolio()}>
              <ArrowDownCircleIcon className="w-6 h-6 text-slate-50" />
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
