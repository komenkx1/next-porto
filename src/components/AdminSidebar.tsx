"use client";
import {
  DocumentArrowUpIcon,
  DocumentIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { title } from "process";
import { useMemo } from "react";
export default function AdminSidebar() {
  const path = usePathname();
  const menu = [
    { title: "Dashboard", path: "/admin" },
    { title: "Users", path: "/admin/user" },
    { title: "Portofolios", path: "/admin/portofolios" },
    { title: "Certificates", path: "/admin/certificates" },
    { title: "Contacts", path: "/admin/contacts" },
  ];

  const getMenuIcon = () => {
    // eslint-disable-next-line react/display-name
    return (path: string) => {
      switch (path) {
        case "/admin":
          return <HomeIcon className="w-5 h-5" color="blue" />;
        case "/admin/user":
          return <UserIcon className="w-5 h-5" color="blue" />;
        case "/admin/portofolios":
          return <DocumentIcon className="w-5 h-5" color="blue" />;
        case "/admin/certificates":
          return <DocumentArrowUpIcon className="w-5 h-5" color="blue" />;
        case "/admin/contacts":
          return <PhoneIcon className="w-5 h-5" color="blue" />;
        default:
          return null; // or some default icon if needed
      }
    };
  };
  const menuIcon = useMemo(() => getMenuIcon(), [path]);
  return (
    <>
      <div className="bg-white sidebar border-r-2  w-[300px] h-screen p-5">
        <div className="sidebar-header  border-b-2 p-3">
          <div className="sidebar-title text-[30px] text-center">
            <b>Admin</b>
          </div>
        </div>
        <div className="sidebar-menu p-3">
          <ul>
            {menu.map((item, index) => (
              <Link href={item.path} key={index}>
                <li
                  className={`${
                    item.path == path
                      ? "bg-slate-400 rounded-lg text-white"
                      : ""
                  } p-3 hover:bg-slate-400 hover:rounded-lg cursor-pointer transition-all flex items-center gap-2`}
                >
                  {menuIcon(item.path)}
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
