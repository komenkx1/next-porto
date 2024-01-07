import Image from "next/image";
import Fancybox from "./Fancybox";

type ImageCertificateProps = {
  imageUrl?: string;
};
export default function ImageCertificate(props: ImageCertificateProps) {
  return (
    <>
      <div className=" flex-col justify-start items-start gap-4 lg:inline-flex cursor-pointer group mx-1">
        <div className="w-full lg:h-[300px]">
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <a
              data-fancybox="gallery"
              href={`${
                props.imageUrl
                  ? props.imageUrl
                  : "https://via.placeholder.com/570x300"
              }`}
            >
              <Image
                fill
                className="w-[570px] h-[300px] rounded-xl object-cover object-center"
                src={`${
                  props.imageUrl
                    ? props.imageUrl
                    : "https://via.placeholder.com/570x300"
                }`}
                alt="Placeholder"
              />
            </a>
          </Fancybox>
        </div>
      </div>
    </>
  );
}
