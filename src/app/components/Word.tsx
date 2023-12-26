export default function Word() {
  return (
    <>
      <div id="resource" className="section title w-full text-center lg:mb-10 md:mb-8 mb-5 mt-3">
        <h3
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
        </h3>
        <span
         data-aos="fade-down" data-aos-delay="200"
          className="text-gray-300
        lg:text-xl
        font-normal
        lg:text-start md:text-lg text-normal
        leading-7"
        >
          See what my clients have to say about working with me
        </span>
      </div>
      <div className="lg:grid grid-rows-1 grid-flow-col gap-4">
        <div className="col-span-2 first flex flex-col" data-aos="fade-left" data-aos-delay="400">
          <div className="flex-1 pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" text-gray-300 lg:text-xl md:text-lg text-normal font-normal font-['Space Grotesk'] leading-7">
                His quality of work is excellent! I prefer Mehedi in every
                important work of design. He is working fast, clean and present
                great usability results.
              </div>
              <div className="text-gray-300 text-2xl font-bold font-['Space Grotesk'] leading-normal">
                Harald Pfeifer
              </div>
            </div>
          </div>
          <div className="flex-1 pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" text-gray-300 lg:text-xl md:text-lg text-normal font-normal font-['Space Grotesk'] leading-7">
                His quality of work is excellent! I prefer Mehedi in every
                important work of design. He is working fast, clean and present
                great usability results.
              </div>
              <div className="text-gray-300 text-2xl font-bold font-['Space Grotesk'] leading-normal">
                Harald Pfeifer
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-2 second flex flex-1" data-aos="fade-right" data-aos-delay="600">
          <div className="pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" h-[300px] text-gray-300 lg:text-xl md:text-lg text-normal font-normal font-['Space Grotesk'] leading-7">
                His quality of work is excellent! I prefer Mehedi in every
                important work of design. He is working fast, clean and present
                great usability results.
              </div>
              <div className="text-gray-300 text-2xl font-bold font-['Space Grotesk'] leading-normal">
                Harald Pfeifer
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
