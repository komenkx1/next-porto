export default function Word() {
  return (
    <>
      <div className="title w-full text-center mb-10">
        <h3
          className="
        text-gray-200
        text-[40px]
        font-bold
        font-['Space
        Grotesk']
        leading-[48px]
        mb-5
        "
        >
          Kind Words
        </h3>
        <span
          className="text-gray-300
        text-xl
        font-normal
        font-['Space
        Grotesk']
        leading-7"
        >See what my clients have to say about working with me</span>
      </div>
      <div className="lg:grid  grid-rows-1 grid-flow-col gap-4">
        <div className="col-span-2 first flex flex-col">
          <div className="flex-1 pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" text-gray-300 text-xl font-normal font-['Space Grotesk'] leading-7">
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
              <div className=" text-gray-300 text-xl font-normal font-['Space Grotesk'] leading-7">
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
        <div className="row-span-2 second flex flex-1">
          <div className="pl-10 pr-[23px] py-10 my-5 bg-gray-800 bg-opacity-40 rounded-xl border border-gray-500 backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-9 flex">
              <div className=" text-gray-300 text-xl font-normal font-['Space Grotesk'] leading-7">
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