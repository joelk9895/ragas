"use client";
import { useState } from "react";
import { tenorsans } from "../stack/stack";
import { Github } from "./github";
import { Discord } from "./discord";
import { useRouter } from "next/navigation";
import Preloader from "../preloader/preloader";

export default function Hero() {
  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  const [isSecondSvgVisible, setIsSecondSvgVisible] = useState(false);
  const [isFirstSvgVisible, setIsFirstSvgVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const isValidCompanyEmail = (email: string) => {
    const companyDomains = [
      "gmail.com",
      "icloud.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "protonmail.com",
      "zoho.com",
      "yandex.com",
      "mail.com",
      "gmx.com",
      "tutanota.com",
      "fastmail.com",
      "hushmail.com",
      "runbox.com",
      "mailfence.com",
    ];

    const domain = email.split("@")[1];
    return companyDomains.includes(domain);
  };
  const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number
  ): ((...args: Parameters<F>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout>;

    return function (this: any, ...args: Parameters<F>) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };
  const router = useRouter();
  const handleEmailChange = debounce((email: string) => {
    if (isValidCompanyEmail(email)) {
      setEmailError("Please enter a valid company email address.");
    } else {
      setEmailError("");
    }
  }, 1000);

  const handleClose = () => {
    setCardVisible(false);
    setEmailError("");
  };
  const handleParentClick = () => {
    // Copy text to clipboard
    const textToCopy = "pip install ragas";
    navigator.clipboard.writeText(textToCopy);
    // Show second SVG
    setIsSecondSvgVisible(true);
    setIsFirstSvgVisible(false);
    // Hide second SVG after 1 second
    setTimeout(() => {
      setIsSecondSvgVisible(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center absolute z-50">
      <Preloader />
      <div className="flex gap-1">
        <Discord />
        <Github />
      </div>
      <h1
        className={`${tenorsans.className} md:text-[8rem] text-[5rem] font-medium text-white leading-none mb-5 md:mb-5`}
      >
        ragas
      </h1>
      <div className="flex gap-2 mb-0 md:mb-5">
        <button
          className=" bg-yellow-400 w-fit text-black p-2 rounded-md text-[0.8rem]"
          onClick={() => handleRedirect("http://docs.ragas.io/en/stable")}
        >
          Docs
        </button>
        <button
          className=" border-slate-500 border-[0.5px] w-fit text-white p-2 rounded-md backdrop-blur-[1px] text-[0.8rem]"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </button>
      </div>
      <div
        className=" flex items-center text-slate-300 mt-5 rounded-lg tracking-widest font-extralight text-sm"
        onClick={handleParentClick}
        onMouseEnter={() => setIsFirstSvgVisible(true)}
        onMouseLeave={() => setIsFirstSvgVisible(false)}
      >
        <svg
          enable-background="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1 h-4 w-4"
        >
          <path
            d="m505.068 478.203-53.167-53.167c-.995-1.917-2.292-3.717-3.9-5.325l-288.335-288.335.003-.001-126.444-126.443c-10.535-10.536-28.55-3.074-28.55 11.826v149.764l1.207-.274-1.207 325.509c0 4.354 1.772 8.195 4.477 10.519 2.325 2.705 6.165 4.477 10.519 4.477l324.079-1.202-.273 1.202h149.764c14.901 0 22.363-18.014 11.827-28.55zm-209.982-58.557h-196.189c-3.929 0-7.115-3.185-7.115-7.115v-196.189c0-6.339 7.664-9.513 12.146-5.031l196.189 196.189c4.482 4.482 1.308 12.146-5.031 12.146z"
            fill="#ffd469"
          ></path>
          <path
            d="m225.325 266.345c-2.161-2.161-2.161-5.664 0-7.825l30.742-30.742 7.825 7.825-30.742 30.742c-2.161 2.16-5.665 2.16-7.825 0zm44.98 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm13.743 37.156 30.742-30.743-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.162 5.664 2.162 7.825.001zm37.156 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825 0zm13.742 37.156 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0zm37.156 13.743 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0zm13.743 37.155 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825 0zm37.155 13.743 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm-342.545-319.132 30.742-30.742-7.825-7.825-30.742 30.741c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825.001zm37.155 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm13.743 37.156 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0zm37.156 13.742 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.16 2.161 5.664 2.161 7.825 0zm13.742 37.156 30.742-30.742-7.825-7.825-30.742 30.742c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.665 2.161 7.825 0zm37.156 13.743 19.036-19.036-7.825-7.825-19.036 19.036c-2.161 2.161-2.161 5.664 0 7.825 2.161 2.161 5.664 2.161 7.825 0z"
            fill="#aa8f4d"
          ></path>
        </svg>{" "}
        <p>~ pip install ragas</p>
        <div className="relative p-0 ml-1">
          {isFirstSvgVisible ? (
            <svg
              className="-top-[5px] absolute m-0"
              fill="none"
              height="15"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="15"
            >
              <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
            </svg>
          ) : null}
          {isSecondSvgVisible ? (
            <svg
              className="-top-[5px] absolute m-0"
              fill="none"
              height="15"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
