"use client";
import { tenor_sans } from "../nav/Nav";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-screen rounded-t-2xl border-solid border-t-2 border-slate-800 flex flex-col">
      <div className="flex items-center justify-center">
        <h3
          className={`${tenor_sans.className} text-[20vw] md:text-[20vw] tracking-widest trackin md:tracking-[5rem] text-center`}
        >
          raga<span className="tracking-tighter">s</span>
        </h3>
      </div>
      <p className="text-center mb-10">Copyright {currentYear}</p>
    </footer>
  );
}
