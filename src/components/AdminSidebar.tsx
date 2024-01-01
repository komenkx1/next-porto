"use client";
import {
  DocumentArrowUpIcon,
  DocumentIcon,
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
export default function AdminSidebar() {
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
            <li className="p-3 hover:bg-slate-400 hover:rounded-lg cursor-pointer transition-all flex items-center gap-2">
              <HomeIcon className="w-5 h-5" color="blue" />
              <Link href="/admin">Dashboard</Link>
            </li>
            <li className="p-3 hover:bg-slate-400 hover:rounded-lg cursor-pointer transition-all flex items-center gap-2">
              <UserIcon className="w-5 h-5" color="blue" />
              <Link href="/admin/user">Users</Link>
            </li>
            <li className="p-3 hover:bg-slate-400 hover:rounded-lg cursor-pointer transition-all flex items-center gap-2">
              <DocumentIcon className="w-5 h-5" color="blue" />
              <a href="/admin/portofolios">Portofolios</a>
            </li>
            <li className="p-3 hover:bg-slate-400 hover:rounded-lg cursor-pointer transition-all flex items-center gap-2">
              <DocumentArrowUpIcon className="w-5 h-5" color="blue" />
              <a href="/admin/certificates">Certificates</a>
            </li>
            <li className="p-3 hover:bg-slate-400 hover:rounded-lg cursor-pointer transition-all flex items-center gap-2">
              <PhoneIcon className="w-5 h-5" color="blue" />
              <a href="/admin/contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
