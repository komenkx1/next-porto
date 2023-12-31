import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

type Props = {
  title: string;
  imageUrl: string;
};

export default function PortoFolioCard(props: Props) {
  return (
    <>
      <div className=" flex-col justify-start items-start gap-4 lg:inline-flex cursor-pointer group">
        <div className="w-full lg:h-[277px]">
          <Image
            width={492}
            height={277}
            className="lg:self-stretch w-full h-[277px] rounded-xl object-cover object-center"
            src={`${
              props.imageUrl ? props.imageUrl : "https://via.placeholder.com/492x277"
            }`}
            alt="project thumbnail"
          />
        </div>
        <div className="transition-all justify-between w-full items-center gap-[50px] inline-flex lg:my-0 my-5">
          <div className="transition-all w-full group-hover:text-purple-500 text-gray-300 lg:text-xl md:text-lg text-base font-medium font-['Space Grotesk'] leading-7">
            {props.title ?? 'Title'}
          </div>
          <div className="p-[12px] bg-white bg-opacity-40 rounded-[49px] backdrop-blur-[30px] justify-center items-center gap-1 flex">
            <ArrowUpRightIcon className="transition-all w-5 h-5 group-hover:w-6 group-hover:h-6" />
          </div>
        </div>
      </div>
    </>
  );
}
