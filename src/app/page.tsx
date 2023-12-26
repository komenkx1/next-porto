import Image from "next/image";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Word from "./components/Word";
import Certificate from "./components/Certificate";
import About from "./components/About";

export default function Home() {
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
