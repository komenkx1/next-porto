export default function Word() {
  return (
    <>
      <div
        id="resource"
        className="section title w-full text-center lg:mb-10 md:mb-8 mb-5 mt-3"
      >
        <h1
          data-aos="fade-down"
          className="
          text-gray-200
            lg:text-[40px]
            md:text-[30px]
            text-2xl
            font-bold
            leading-[48px]
            lg:mb-5
            md:mb-3
            mb-2
        "
        >
          Kind Words
        </h1>
        <span
          data-aos="fade-down"
          data-aos-delay="200"
          className="text-gray-300
        lg:text-xl
        font-normal
        lg:text-start md:text-lg text-normal
        leading-7"
        >
          Some Quotes For You
        </span>
      </div>
      <div className="lg:grid grid-rows-1 grid-flow-col gap-4">
        <div
          className="col-span-2 first flex flex-col"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="flex-1 pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" text-gray-300 lg:text-xl md:text-lg text-normal font-normal font-['Space Grotesk'] leading-7">
                Programmers seem to be changing the world. It would be a relief,
                for them and for all of us, if they knew something about it.
              </div>
              <div className="text-gray-300 text-2xl font-bold font-['Space Grotesk'] leading-normal">
                Ellen Ullman
              </div>
            </div>
          </div>
          <div className="flex-1 pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" text-gray-300 lg:text-xl md:text-lg text-normal font-normal font-['Space Grotesk'] leading-7">
                No matter which field of work you want to go in, it is of great
                importance to learn at least one programming language.
              </div>
              <div className="text-gray-300 text-2xl font-bold font-['Space Grotesk'] leading-normal">
                Ram Ray
              </div>
            </div>
          </div>
        </div>
        <div
          className="row-span-2 second flex flex-1"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <div className="pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" h-[300px] text-gray-300 lg:text-xl md:text-lg text-normal font-normal font-['Space Grotesk'] leading-7">
                Programming today is a race between software engineers striving
                to build bigger and better idiot-proof programs and the Universe
                trying to produce bigger and better idiots. So far, the Universe
                is winning.
              </div>
              <div className="text-gray-300 text-2xl font-bold font-['Space Grotesk'] leading-normal">
                Rick Cook
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
