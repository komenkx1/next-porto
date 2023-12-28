import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "I Komang Wahyu Hadi Permana | Portfolio",
  description:
    "Explore the portfolio of I Komang Wahyu Hadi Permana, showcasing a diverse range of projects in web and mobile development. Learn about skills, experience, and achievements.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(/bg/bg-element.png)`,
          backgroundSize: "cover",
        }}
      >
        <Header />
        <div className="bg lg:px-28 px-10 mx-auto">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
