"use client";
import { Provider } from "@/components/Provider";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import isLoggedIn from "@/middlewares/isLoggedIn";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (path.includes("/admin")) {
      isLoggedIn(null, router, () => {
        return true;
      });
    }
  }, [path]);
  return (
    <div
      style={{ color: "black", height: "100%" }}
      className="flex bg-gray-100"
    >
      <AdminSidebar />
      <AdminHeader>
        <Provider>
          <NextUIProvider>
            <div>{children}</div>
          </NextUIProvider>
        </Provider>
      </AdminHeader>
    </div>
  );
}
