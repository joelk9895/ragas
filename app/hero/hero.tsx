"use client";
import { useState } from "react";
import { tenorsans } from "../stack/stack";
import { useRouter } from "next/navigation";

export default function Hero() {
  const [isSecondSvgVisible, setIsSecondSvgVisible] = useState(false);
  const [isFirstSvgVisible, setIsFirstSvgVisible] = useState(false);

  const handleParentClick = () => {
    navigator.clipboard.writeText("pip install ragas");
    setIsSecondSvgVisible(true);
    setIsFirstSvgVisible(false);
    setTimeout(() => setIsSecondSvgVisible(false), 1000);
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center absolute z-50">
      <h1
        className={`${tenorsans.className} md:text-[8rem] text-[5rem] font-medium text-white leading-none mb-5 md:mb-5`}
      >
        ragas
      </h1>
      <div
        className="flex items-center text-slate-300 mt-5 rounded-lg tracking-widest font-extralight text-sm"
        onClick={handleParentClick}
        onMouseEnter={() => setIsFirstSvgVisible(true)}
        onMouseLeave={() => setIsFirstSvgVisible(false)}
      >
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-4 w-4"
        >
          <path d="M505.068 478.203l-53.167-53.167..." fill="#ffd469" />
        </svg>
        <p>~ pip install ragas</p>
        <div className="relative p-0 ml-1">
          {isFirstSvgVisible ? (
            <svg
              className="-top-[5px] absolute m-0"
              height="15"
              viewBox="0 0 24 24"
              width="15"
            >
              <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z" />
            </svg>
          ) : null}
          {isSecondSvgVisible ? (
            <svg
              className="-top-[5px] absolute m-0"
              height="15"
              viewBox="0 0 24 24"
              width="15"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          ) : null}
        </div>
      </div>
    </div>
  );
}
