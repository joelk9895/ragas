import { tenorsans } from "../stack/stack";
import { Badge } from "./badge";

export default function Hero() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center absolute z-50">
      <Badge />
      <h1
        className={`${tenorsans.className} md:text-[8rem] text-[6rem] font-medium text-white leading-none mb-5 md:mb-10`}
      >
        ragas
      </h1>
      <div className="flex gap-2 mb-0 md:mb-5">
        <button className=" bg-yellow-400 w-fit text-black p-2 rounded-md text-[0.8rem]">
          Read Docs
        </button>
        <button className=" border-slate-500 border-[0.5px] w-fit text-white p-2 rounded-md backdrop-blur-[1px] text-[0.8rem]">
          Contact Us
        </button>
      </div>
    </div>
  );
}
