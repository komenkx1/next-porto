import Image from "next/image";

export default function ImageCertificate() {
  return (
    <>
      <div className=" flex-col justify-start items-start gap-4 lg:inline-flex cursor-pointer group mx-2">
        <div className="w-full lg:h-[300px]">
          <Image
            width={570}
            height={300}
            className="w-[570px] h-[300px] rounded-xl object-cover object-center"
            src="https://via.placeholder.com/492x977"
            alt="Placeholder"
          />
        </div>
      </div>
    </>
  );
}
