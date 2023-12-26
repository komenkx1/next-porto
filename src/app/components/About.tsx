"use client";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const contactImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      const { clientX, clientY } = e;
      const rect = contactImageRef.current ?  contactImageRef.current.getBoundingClientRect() : null;

      // Menemukan titik tengah elemen
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Menghitung perbedaan antara posisi kursor dan titik tengah
      const diffX = clientX - (rect.left + centerX);
      const diffY = clientY - (rect.top + centerY);

      // Menyimpan posisi kursor
      setCursorPosition({ x: diffX, y: diffY });
    };

    // Menambahkan event listener untuk mousemove
    document.addEventListener("mousemove", handleMouseMove);

    // Membersihkan event listener pada pembongkaran komponen
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <div id="about" className="section lg:grid md:grid grid-cols-2 lg:my-10">
        <div
          id="contactImage"
          className="contatct flex justify-center items-center"
        >
          <div
            ref={contactImageRef}
            className="hover-effect cursor-pointer group mx-2 p-14 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
          >
            <div className="image">
              <div
                style={{
                  backgroundImage: `url(/mangwahyu.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "200px",
                  height: "200px",
                }}
                className="w-[200px] rounded-xl object-cover object-center"
              ></div>
            </div>
            <div className="contact-profile text-center w-full">
              <p
                className="
            text-gray-200
            text-[32px]
            font-bold
            font-['Space
            Grotesk']
            leading-10"
              >
                Mang Wahyu
              </p>
              <p
                className="text-gray-300
                        text-xl
                        font-normal
                        Grotesk']
                        leading-7"
              >
                Programmer
              </p>
            </div>
          </div>
        </div>
        <div className="desc lg:text-start md:text-start text-center lg:my-0 md:my-0 my-7">
          <h3
            className="text-gray-200
            lg:text-[40px]
            md:text-[30px]
            text-2xl
            font-bold
            leading-[48px]
            lg:mb-5
            md:mb-3
            mb-2"
          >
            About me
          </h3>
          <span
            className="
        text-gray-300
        lg:text-xl
        md:text-lg
        text-normal
        
        font-normal
        font-['Space
        Grotesk']
        leading-7
        "
          >
            {`Growing up in a small village without access to the internet or the
            latest technology sparked my curiosity for computers. I began
            learning Photoshop in a photo studio where I paid for. My love for
            gaming led me to play FPS video games like PUBG and Valorant, which
            taught me valuable skills in making critical decisions under`}
          </span>
          <div className="lg:my-7 md:my-5 my-3">
            <Button title="Contact me" />
          </div>
        </div>
      </div>
      <style jsx>{`
        /* ... (kode lainnya) */

        .hover-effect {
          transition: transform 0.3s;
        }

        .hover-effect:hover {
          transform: perspective(1000px) rotateX(${cursorPosition.y / 10}deg) 
            rotateY(${cursorPosition.x / 10}deg);
          backface-visibility: hidden;
        }
        .contatct {
          transform-style: preserve-3d;
        }
      `}</style>
    </>
  );
}
