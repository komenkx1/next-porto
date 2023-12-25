import Image from "next/image";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Word from "./components/Word";

export default function Home() {
  return (
    <>
      <Hero />
      <Portofolio />
      <Word />
     
    </>
  );
}
