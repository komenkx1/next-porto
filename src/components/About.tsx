"use client";
import Image from "next/image";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "@/store/user.store";
import { useGetUserActive } from "@/queries/user.query";
import { useDisclosure } from "@nextui-org/react";
import ModalComp from "./Modal";
export default function About() {
  const [isCardClicked, setCardClicked] = useState(false);
  const {
    isOpen: isOpenModalDetail,
    onOpen: openModalDetail,
    onClose: closeModalDetail,
  } = useDisclosure();

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const contactImageRef = useRef<HTMLDivElement | null>(null);
  const { isLoading: isLoadingUser } = useGetUserActive();
  const { user: user } = useUserStore();

  const handleCardClick = () => {
    setCardClicked(!isCardClicked); // Toggle card click state
  };

  const aboutData = [
    {
      title: "Education",
      item: [
        {
          title: "SD N 3 Saba",
          date: "2007 - 2013",
        },
        {
          title: "SMP Widya Suara Sukawati",
          date: "2013 - 2016",
        },
        {
          title: "SMK N 1 Mas Ubud",
          date: "2016 - 2019",
        },
        {
          title: "Universitas Udayana",
          date: "2019 - 2023",
        },
      ],
    },

    {
      title: "Experience",
      item: [
        {
          title: "Technology Colaboration",
          date: "2020 - Present",
        },
        {
          title: "Simpul Technology",
          date: "2023 - Present",
        },
        {
          title: "Pt. Laksita Emi Saguna",
          date: "2022 - 2023",
        },
      ],
    },
    {
      title: "Apprecation",
      item: [
        {
          title:
            "Favorite winner of the BKFT 55 photography competition Fakultas Teknik UNUD 2020",
          date: " 2020",
        },
        {
          title:
            "Best graduate of the SIB Dicoding Studi Independen Bersertifikat Program",
          date: "2022",
        },
      ],
    },
    {
      title: "Organization",
      item: [
        {
          title: "BEM PM UNIVERSITAS UDAYANA (Head Of Web Developer Division)",
          date: "2020 - 2021",
        },
        {
          title:
            "Technology Artisan Universitas Udayana (Head Of Design & Publication Division)",
          date: "2020 - 2021",
        },
        {
          title:
            "Himpunan Mahasiswa Teknologi Informasi Universitas Udayana (Member of Publication & Documentation Division)",
          date: "2019 - 2020",
        },
      ],
    },
  ];
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const rect = contactImageRef?.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
      };

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
          className={`contatct flex justify-center items-center ${
            isCardClicked ? "enlarged" : ""
          }`} // Add class for enlarged state
          onClick={handleCardClick} // Handle card click
        >
          <div
            ref={contactImageRef}
            className={`hover-effect cursor-pointer shadow shadow-gray-600 group mx-2 p-14 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-900 ${
              isCardClicked ? "enlarged-card" : ""
            }`}
          >
            <div className="image">
              <div
                style={{
                  backgroundImage: `url(${user?.profileImage})`,
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
                capitalize 
            text-gray-200
            text-[32px]
            font-bold
            font-['Space
            Grotesk']
            leading-10"
              >
                {isLoadingUser ? "Loading..." : user?.name}
              </p>
              <p
                className="capitalize text-gray-300
                        text-xl
                        font-normal
                        Grotesk']
                        leading-7"
              >
                {isLoadingUser ? "Loading..." : user?.title}
              </p>
            </div>
          </div>
        </div>
        <div className="desc lg:text-start md:text-start text-center lg:my-0 md:my-0 my-7">
          <h1
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
          </h1>
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
            {isLoadingUser ? "Loading..." : user?.description}
          </span>
          <div className="lg:my-7 md:my-5 my-3">
            <Button onClick={openModalDetail} title="Learn More" />
          </div>
        </div>
      </div>
      <ModalComp
        title="Information Details"
        isOpen={isOpenModalDetail}
        onOpen={openModalDetail}
        onClose={closeModalDetail}
        size="xl"
        theme="glass"
      >
        <div className="">
          {aboutData.map((item, index) => {
            return (
              <div key={index} className="item-info text-justify">
                <h3 className="font-bold">{item.title}</h3>
                <hr className="my-3" />
                <ul className="text-white text-justify">
                  {item.item.map((itemCHild, index) => {
                    return (
                      <li key={index} className="my-2 text-justify flex">
                        <div className="mr-2">- </div>{" "}
                        <span>
                          {itemCHild.title} - ({itemCHild.date})
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <hr className="my-3" />
              </div>
            );
          })}
        </div>
      </ModalComp>
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
          cursor: pointer;
        }

        .enlarged {
          transform: scale(1.2) translate(0%, -50%);
          z-index: 1000;
          position: relative;
        }

        .enlarged-card {
          transform: scale(1.2) translate(0%, -50%);
          z-index: 1000;
          position: relative;
        }
      `}</style>
    </>
  );
}
