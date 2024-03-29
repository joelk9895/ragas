"use client";
import { useState, useEffect } from "react";
import Nav from "../nav/Nav";
import Clients from "../clients/Clients";
import Circle from "./Components/SvgCircle";

export default function Hero() {
  const [count, setCount] = useState(1205);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.ceil(Math.random() * 1000));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex min-h-screen w-screen flex-col items-center justify-center relative overflow-hidden">
        <Nav />
        <h1 className="text-center text-4xl w-[80vw] md:w-full md:text-6xl font-medium">
          Open Source Evaluation
          <br />
          Framework
          <br />
          for rag applications
        </h1>
        <h2 className="text-gr p-12 text-xl font-thin text-gray-700">
          Processing{" "}
          <span className="font-normal dark:text-gray-400">{count}</span>{" "}
          evaluations monthly
        </h2>
        <div className="flex space-x-4">
          <button className="cursor-pointer rounded-md bg-yellow-400 px-4 py-2 text-black">
            Get Demo
          </button>
          <button className=" rounded-md border-[0.5px] border-gray-500 bg-transparent px-4 py-2 dark:text-yellow-400">
            Read Docs
          </button>
        </div>
        <Circle />
        {/* <h2 className="font-regular mb-7 mt-56 text-2xl">
          Engineers in these companies use Ragas
        </h2> */}
        <Clients />
      </section>
    </>
  );
}
