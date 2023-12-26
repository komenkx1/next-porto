interface HeaderSectionProps {
  title: string;
  description: string;
  children? : React.ReactNode
}

export default function HeaderSection({
  title,
  description,
  children,
}: HeaderSectionProps) {
  return (
    <>
      <h3
        className="
            text-gray-200
            lg:text-[40px]
            md:text-[30px]
            text-2xl
            font-bold
            leading-[48px]
            lg:text-start md:text-start text-center
            "
      >
        {title}
      </h3>
      <div className="header lg:text-start md:text-start text-center lg:flex md:flex justify-between items-center">
        <span
          className="
        text-gray-300
        lg:text-xl
        md:text-lg
        text-base
        font-normal
        font-['Space
        Grotesk']
        leading-7
        w-[600px]
        "
        >
          {description}
        </span>
        <div className="catagory flex gap-3 justify-center lg:my-0 my-5">
            {children}
        </div>
      </div>
    </>
  );
}
