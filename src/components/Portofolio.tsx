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
import SkeletonLoading from "./loading/CardLoading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@nextui-org/react";
import ModalComp from "./Modal";
import Image from "next/image";

export default function Portofolio() {
  const [isSearch, setSearch] = useState(false);
  const { isLoading: isLoadingCategory } = useGetCategory();
  const {
    portofolio: portofolio,
    page: page,
    isMaxPage: isMaxPage,
    setPage: setPage,
    resetPortofolio: resetPortofolio,
  } = usePortofolioStore();
  const [searchInput, setSearchInput] = useState("");
  const [perPageParams, setPerPage] = useState(3);
  const [searchParams, setSearchParams] = useState("");
  const [categoryParams, setCategoryParams]: any = useState(null);
  const [isDataLoaded, setDataLoaded] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [selectedPortofolio, setSelectedPortofolio] = useState<Portofolio>();
  const setCategory = (category: number) => {
    setDataLoaded(false);
    resetPortofolio();
    if (categoryParams !== category) {
      setCategoryParams(category);
    } else {
      setCategoryParams(null);
    }
    setTimeout(() => {
      setDataLoaded(true);
    }, 1000);
  };

  const {
    isOpen: isOpenModalDetail,
    onOpen: openModalDetail,
    onClose: closeModalDetail,
  } = useDisclosure();

  const handleSearch = (e: any) => {
    setSearchInput(e.target.value);
    setDataLoaded(false);
    setTimeout(() => {
      if (perPageParams == 3) {
        setPage(1);
        setPerPage(1000);
      }

      if (e.target.value == "") {
        setPerPage(3);
        setDataLoaded(true);
      }
      setSearchParams((prevSearchInput) => (prevSearchInput = e.target.value));
    }, 1000);
  };
  const { isLoading: isLoadingPortofolio, refetch: refetch } = useGetPortofolio(
    {
      page: page,
      title: searchParams,
      pageSize: perPageParams,
      category: categoryParams,
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
    if (!isLoadingPortofolio) {
      setDataLoaded(true);
    }
  }, [isLoadingPortofolio]);
  useEffect(() => {
    if (!isSearch && searchInput != "") {
      resetPortofolio();
      setSearchInput("");
      setSearchParams("");
      setPerPage(3);
      setPage(1);
    }
  }, [isSearch]);

  useEffect(() => {
    setPerPage(3);
    //jangan jalankan loadinng ketika search
    refetch().then((res) => {
      if (page > 1) {
        addDataPagin(res.data?.data ?? []);
      }
    });
  }, [page]);

  const futureCategory = useMemo(() => {
    return categories.filter((category) => category.isFutured === true);
  }, [categories]);

  const portofolioIem = useMemo(() => {
    if (!isDataLoaded) {
      return [1, 2, 3].map((_, index) => {
        return (
          <div className="" key={index}>
            <SkeletonLoading />
          </div>
        );
      });
    } else {
      return portofolio.map((portofolio, index) => {
        return (
          <div onClick={() => hanldeOpenModalDetail(portofolio)} key={index}>
            <PortoFolioCard
              title={portofolio.title}
              imageUrl={portofolio.thumbnail}
              data-aos="fade-up"
            />
          </div>
        );
      });
    }
  }, [isDataLoaded, portofolio]);

  const hanldeOpenModalDetail = (portofolio: Portofolio) => {
    setSelectedPortofolio(portofolio);
    setModalTitle(portofolio.title);
    openModalDetail();
  };

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
                  onClick={() => setCategory(category.id)}
                  className={`!transition-all flex gap-2 items-center cursor-pointer hover:bg-white hover:text-black hover:p-2 hover:rounded-lg ${
                    category.id == categoryParams
                      ? "bg-white text-black p-2 rounded-lg"
                      : ""
                  } ${
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
          {portofolioIem}
        </div>
        <div
          data-aos="fade-up"
          className="flex justify-center lg:py-8 md:py-6 pb-5"
        >
          {!isMaxPage ? (
            <Button title="More This Way" onClick={() => loadMorePortofolio()}>
              {isLoadingPortofolio ? (
                //font awesome loader spinner
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <ArrowDownCircleIcon className="w-6 h-6 text-slate-50" />
              )}
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      <ModalComp
        title={modalTitle}
        isOpen={isOpenModalDetail}
        onOpen={openModalDetail}
        onClose={closeModalDetail}
        size="xl"
        theme="glass"
      >
        <div className="w-full flex flex-col items-center">
          <Image
            width={570}
            height={300}
            className="w-[570px] h-[300px] rounded-xl object-cover object-center mb-3"
            src={`${
              selectedPortofolio?.thumbnail ??
              "https://via.placeholder.com/570x300"
            }`}
            alt="Placeholder"
          />
        </div>
        <hr className="my-1" />
        <div className="">
          <span className="my-3 font-bold">Category & Tag</span>
          <div className="category flex">
            <span className="">
              {selectedPortofolio?.category?.name ?? "Uncategorized"}
              {" | "}{" "}
              {selectedPortofolio?.portofolioTag.map((item, index) => {
                const isLastIndex: boolean =
                  index === selectedPortofolio?.portofolioTag.length - 1;
                return (
                  <span key={index}>
                    {item.tag.name}
                    {isLastIndex ? "" : ", "}
                  </span>
                );
              }) ?? "Uncategorized"}
            </span>
          </div>
          <div className="desc my-1">
          <span className="my-3 font-bold">Description</span>
            <div dangerouslySetInnerHTML={{ __html: selectedPortofolio?.description ?? "-" }} />
          </div>
        </div>
      </ModalComp>
    </>
  );
}
