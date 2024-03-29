"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { tenor_sans } from "../nav/Nav";
import Image from "next/image";

export default function Workflow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const pathlength1 = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const pathlength2 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  return (
    <div className="flex flex-col items-center mt-40 relative" ref={ref}>
      <h3 className="text-xl md:text-3xl font-medium text-yellow-400">
        Where does Ragas fit in your stack?
      </h3>
      <div className="flex flex-col gap-10 mt-16 items-center">
        <div className="h-60 w-[80vw] md:w-96 flex flex-col items-center justify-center bg-white text-black border-yellow-400 border-[0.5px]  font-medium text-xl rounded-md">
          <h4>Framework</h4>
          <div className="flex w-[90%] mt-10">
            <Image
              src="/images/Group 8.png"
              alt="Framework"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="h-60 w-[80vw] md:w-96 flex-col flex items-center justify-center bg-white text-black border-yellow-400 border-[0.5px]  font-regular text-xl rounded-md">
          <h4>LLM Model</h4>
          <div className="flex w-[90%] mt-10">
            <Image
              src="/images/LLMs.png"
              alt="Framework"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="h-60 w-[80vw] md:w-96 flex-col flex items-center justify-center bg-white text-black border-yellow-400 border-[0.5px]  font-regular text-xl rounded-md">
          <h4>Vector DB</h4>
          <div className="flex w-[90%] mt-10">
            <Image
              src="/images/DBs.png"
              alt="Framework"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className="flex h-96">
        <svg
          width="3516"
          height="3412"
          viewBox="0 0 3516 3412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-96 w-[30rem] "
        >
          <path
            d="M1724 -0.000530958V2030.07L1724 3412"
            stroke="#212121"
            strokeWidth="13"
          />
        </svg>
        <svg
          width="3516"
          height="3412"
          viewBox="0 0 3516 3412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-96 w-[30rem] absolute"
        >
          <motion.path
            d="M1724 -0.000530958V2030.07L1724 3412"
            stroke="url(#paint2_linear_195_13)"
            pathLength={pathlength1}
            strokeWidth="13"
          />
          <defs>
            <linearGradient
              id="paint0_linear_195_13"
              x1="621.75"
              y1="0.5"
              x2="621.75"
              y2="3412.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.835" stopColor="#FFCC33" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_195_13"
              x1="1877.5"
              y1="1"
              x2="1877.5"
              y2="3413"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.835" stopColor="#FFCC33" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_195_13"
              x1="1236.5"
              y1="0.99971"
              x2="1238.48"
              y2="3413"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="0.835" stopColor="#FFCC33" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className={`flex w-[80vw] md:w-60 h-60 items-center justify-center border-yellow-400 border-[0.5px] font-regular text-xl rounded-md ${tenor_sans.className}`}
      >
        <svg
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-7 w-7"
        >
          <path
            d="m505.068 478.203-53.167-53.167c-.995-1.917-2.292-3.717-3.9-5.325l-288.335-288.335.003-.001-126.444-126.443c-10.535-10.536-28.55-3.074-28.55 11.826v149.764l1.207-.274-1.207 325.509c0 4.354 1.772 8.195 4.477 10.519 2.325 2.705 6.165 4.477 10.519 4.477l324.079-1.202-.273 1.202h149.764c14.901 0 22.363-18.014 11.827-28.55zm-209.982-58.557h-196.189c-3.929 0-7.115-3.185-7.115-7.115v-196.189c0-6.339 7.664-9.513 12.146-5.031l196.189 196.189c4.482 4.482 1.308 12.146-5.031 12.146z"
            fill="#ffd469"
          />
          <path
            d="m225.325 266.345c-2.161-2.161-2.161-5.664 0-7.825l30.742-30.742 7.825 7.825-30.742 30.742c-2.161 2.16-5.665 2.16-7.825 0zm44.98 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm13.743 37.156 30.742-30.743-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.162 5.664 2.162 7.825.001zm37.156 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825 0zm13.742 37.156 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0zm37.156 13.743 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0zm13.743 37.155 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825 0zm37.155 13.743 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm-342.545-319.132 30.742-30.742-7.825-7.825-30.742 30.741c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825.001zm37.155 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm13.743 37.156 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0zm37.156 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825 0zm13.742 37.156 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm37.156 13.743 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0z"
            fill="#aa8f4d"
          />
        </svg>{" "}
        ragas
      </div>
      <div className="flex">
        <svg
          width="16"
          height="3412"
          viewBox="0 0 16 3412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-96 w-16 z-10"
        >
          <motion.path
            d="M6.99121 -0.000530958L6.99121 2030.07L6.99121 3412"
            stroke="url(#paint0_linear_302_256)"
            pathLength={pathlength2}
            strokeWidth="13"
          />
          <defs>
            <linearGradient
              id="paint0_linear_302_256"
              x1="7.5"
              y1="-0.000290444"
              x2="9.48199"
              y2="3412"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFCC33" />
              <stop offset="0.97" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="16"
          height="3412"
          viewBox="0 0 16 3412"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-96 w-16 absolute"
        >
          <path
            d="M6.99121 -0.000530958L6.99121 2030.07L6.99121 3412"
            stroke="#212121"
            strokeWidth="13"
          />
        </svg>
      </div>
      <div className="flex flex-col w-80 h-96 items-center justify-center bg-white text-black border-yellow-400 border-[0.5px]  rounded-md text-xl font-regular">
        <h3>Logging and Monitoring</h3>
        <div className="flex w-[80%] mt-10">
          <Image
            src="/images/Logging.png"
            alt="Framework"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
