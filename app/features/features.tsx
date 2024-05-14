import React from "react";
import { EvervaultCard, Icon } from "./component/featureCard";

export function EvervaultCardDemo() {
  return (
    <section className="w-screen h-fit p-10 bg-black flex flex-col items-center gap-10 mt-10 z-[10]">
      <h2 className="text-white text-3xl font-bold">features</h2>
      <div className="flex gap-10 flex-wrap">
        <div className="border border-white/[0.2] flex flex-col items-start max-w-[25rem] mx-auto p-4 relative h-[20rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Metrics" />

          <h2 className="text-white  mt-4 text-sm font-light">
            automatic metrics that helps you understand the performance and
            robustness of your LLM application
          </h2>
        </div>
        <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Synthetic evaluation data" />

          <h2 className="text-white  mt-4 text-sm font-light">
            synthetically generate high quality and diverse evaluation data
            customised for your requirements.
          </h2>
        </div>
        <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[20rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Online Monitoring" />

          <h2 className="text-white mt-4 text-sm font-light">
            evaluate and ensure the quality of your LLM application in
            production. Use insights to improve your application.
          </h2>
        </div>
      </div>
    </section>
  );
}
