"use client";
import { Provider } from "@/components/Provider";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";
import { NextUIProvider } from "@nextui-org/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
