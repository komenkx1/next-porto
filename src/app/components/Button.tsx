import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
interface Buttonprops {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
export default function Button({ title, onClick, children }: Buttonprops) {
  return (
    <>
      <div
        onClick={onClick}
        className="button cursor-pointer lg:col-span-3 md:col-span-2"
      >
        <div className=" w-52 h-14 px-8 py-4 hover:bg-transparent transition-all bg-violet-600 rounded-xl border border-white justify-center items-center gap-2 inline-flex">
          <div className="text-center text-slate-50 text-base font-medium font-['Space Grotesk'] leading-normal">
            {title}
          </div>
          {children ? (
            children
          ) : (
            <ArrowRightCircleIcon className="w-6 h-6 text-slate-50" />
          )}
        </div>
      </div>
    </>
  );
}
