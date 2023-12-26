import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <>
      <div className="lg:grid md:grid grid-cols-2 lg:my-10">
        <div data-aos="fade-left" data-aos-delay="200" className="contatct flex justify-center items-center">
          <div className="cursor-pointer group mx-2 p-14 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
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
        <div data-aos="fade-right" data-aos-delay="200" className="desc lg:text-start md:text-start text-center lg:my-0 md:my-0 my-7">
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
    </>
  );
}
