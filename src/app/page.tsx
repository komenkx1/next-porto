"use client";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Word from "../components/Word";
import Certificate from "../components/Certificate";
import About from "../components/About";
import { use, useEffect } from "react";
import { useSetActiveMenu } from "../hooks/menu";
import { useGetUser } from "@/queries/user.query";
import { useUserStore } from "@/store/user.store";
export default function Home() {
  const setActiveMenu = useSetActiveMenu();
  const getUserActive = useGetUser();
  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.querySelectorAll(".section");
      let currentSection = null;
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      targetElement.forEach((section: any) => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.id;
          setActiveMenu(currentSection);
        }

        //cek jika scroll sudah mencapai batas bawah section
        if (
          scrollPosition >=
          document.documentElement.scrollHeight - window.innerHeight
        ) {
          setActiveMenu("about");
        }
      });
    };

    // Tambahkan event listener untuk scroll pada mount komponen
    document.addEventListener("scroll", handleScroll);

    // Hapus event listener pada unmount komponen
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <>
      <Hero />
      <Portofolio />
      <Word />
      <Certificate />
      <About />
    </>
  );
}
