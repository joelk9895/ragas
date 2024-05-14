import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [loadingText, setLoadingText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const progressBarRef = useRef(null);
  let progressBarInterval: string | number | NodeJS.Timeout | undefined;

  useEffect(() => {
    const simulateInstallation = () => {
      setLoadingText("Collecting ragas");
      progressBarInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + 20;
          } else {
            clearInterval(progressBarInterval);
            setFinalText("Successfully installed ragas");
            setTimeout(() => {
              setFadeOut(true);
            }, 500);
            return 100;
          }
        });
      }, 200);
    };

    simulateInstallation();

    return () => clearInterval(progressBarInterval);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      gsap.to(progressBarRef.current, {
        display: "none",
        delay: 0.3,
        duration: 0.5,
      });
      gsap.to(progressBarRef.current, {
        opacity: 0,
        duration: 0.1,
      });
    }
  }, [fadeOut]);

  return (
    <section
      className="fixed top-0 left-0 w-screen h-screen inset-0 z-[100] bg-black flex flex-col items-center justify-center md:text-lg text-sm"
      ref={progressBarRef}
    >
      <div className="flex md:w-[500px] w-[300px] px-2 py-3 bg-gray-600 rounded-t-lg ">
        <div className="flex gap-2">
          <div className="bg-red-500 rounded-full w-2 h-2"></div>
          <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
          <div className="bg-green-500 rounded-full w-2 h-2"></div>
        </div>
      </div>
      <div className="flex flex-col md:w-[500px] w-[300px]  min-h-[350px] bg-black rounded-b-lg text-white font-mono p-4 border-[0.1px] border-slate-600 md:text-lg text-xs ">
        <p>user@ragas ~ % pip install ragas</p>
        <div className="mt-2">
          <span>
            {loadingText && (
              <>
                {loadingText}
                <span className="animate-pulse">...</span>
              </>
            )}
          </span>
          <div className="h-3 bg-black rounded mt-1">
            <div
              className="h-full bg-white rounded"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>{finalText}</span>
        </div>
      </div>
    </section>
  );
}
