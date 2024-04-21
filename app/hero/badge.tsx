"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Badge = () => {
  return (
    <a
      href="https://github.com/"
      target="__blank"
      className="bg-slate-900 no-underline group cursor-pointer relative  shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block md:-bottom-5"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(255,204,0,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex items-center z-10 rounded-full bg-zinc-950 py-0 px-2 md:py-1 md:px-4 ring-1 ring-white/10">
        <Image
          src="/GitHub_Logo_White.png"
          width={40}
          height={16}
          className="w-8 h-3"
          alt="github"
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          className="m-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          ></motion.path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-yellow-400/0 via-yellow-400 to-yellow-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </a>
  );
};
