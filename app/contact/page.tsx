"use client";
import React, { useState, useEffect } from "react";
import { Label } from "./components/label";
import { Input } from "./components/input";
import { cn } from "../utils/cn";

export default function SignupFormDemo() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const debounce = <F extends (...args: any[]) => any>(
      func: F,
      delay: number
    ): ((...args: Parameters<F>) => void) => {
      let timeoutId: NodeJS.Timeout;

      return function (this: any, ...args: Parameters<F>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    };
    const isValidEmail = (email: string) => {
      return /\S+@\S+\.\S+/.test(email);
    };
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
      return !companyDomains.includes(domain);
    };
    let timeoutId: NodeJS.Timeout;

    const checkEmailValidity = debounce((email: string) => {
      if (!isValidEmail(email)) {
        setEmailError("Please enter a valid email address.");
      } else if (!isValidCompanyEmail(email)) {
        setEmailError("Please enter a valid company email address.");
      } else {
        setEmailError("");
      }
    }, 1000);

    if (email.trim() !== "") {
      checkEmailValidity(email);
    }

    return () => clearTimeout(timeoutId);
  }, [email]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(
      `https://cal.com/shahul-ragas/30min?name=${replaceSpacesWithPercent20(
        firstname
      )}%20${replaceSpacesWithPercent20(lastname)}&email=${email.trim()}`,
      "_blank"
    );
  };
  function replaceSpacesWithPercent20(input: string): string {
    var text = input.trim();
    return text.replace(/ /g, "%20");
  }

  return (
    <section className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <h2 className="font-bold text-xl text-neutral-200">Talk to founders</h2>
        <p className="text-sm max-w-sm mt-2 text-neutral-300">
          Please provide your company email address to schedule a meeting with
          us.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="John"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Doe"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="llama@gradient.llm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Get Schedule link &rarr;
            <BottomGradient />
          </button>
          {emailError && (
            <p className="text-xs text-red-500 mt-2">{emailError}</p>
          )}
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </section>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-100 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
