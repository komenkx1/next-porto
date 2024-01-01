"use client";
import { ArrowsPointingOutIcon } from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
type Props = {
  children: React.ReactNode;
};
export default function AdminHeader(props: Props) {
  const path = usePathname();
  const pageName = useMemo(() => {
    const splitPath = path.split("/");
    const pageName = splitPath[splitPath.length - 1];
    if (pageName === "admin") {
      return "Dashboard";
    }
    return pageName;
  }, [path]);
  return (
    <>
      <div className="pb-5 w-100 flex-grow">
        <div className="bg-white sidebar-header border-b-2 py-5">
          <div className="sidebar-title mx-5 flex justify-between items-center">
            <div className="">
              <b className="capitalize mt-2 text-[18px]">Admin System</b>
              <p className="text-[15px]"> Mang Wahyu Portofolio</p>
            </div>
            <ArrowsPointingOutIcon className="w-5 h-5" color="blue" />
          </div>
        </div>
        {/* //content */}
        <div className=" m-5">
          <h1><b className="capitalize text-[25px]">{pageName}</b></h1> 
          <hr className="my-3 border-gray-300" />
          {props.children}
        </div>
      </div>
    </>
  );
}
