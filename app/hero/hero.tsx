import { tenorsans } from "../stack/stack";
import { Badge } from "./badge";

export default function Hero() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center absolute z-50">
      <Badge text="github" />
      <h1
        className={`${tenorsans.className} text-[8rem] font-medium text-white leading-none mb-10`}
      >
        ragas
      </h1>
      <div className="flex gap-2 mb-5">
        <button className=" bg-yellow-400 w-fit text-black p-2 rounded-md">
          Read Docs
        </button>
        <button className=" border-slate-500 border-[0.5px] w-fit text-white p-2 rounded-md backdrop-blur-[1px]">
          Contact Us
        </button>
      </div>
    </div>
  );
}
