import React from "react";
import { EvervaultCard, Icon } from "./component/featureCard";

export function EvervaultCardDemo() {
  return (
    <section className="w-screen h-fit p-10 bg-black flex flex-col items-center gap-10 mt-10">
      <h2 className="text-white text-3xl font-bold">features</h2>
      <div className="flex gap-10 flex-wrap">
        <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Metrics" />

          <h2 className="text-white  mt-4 text-sm font-light">
            Intuitive and explainable metrics to quantify performance of your
            LLM app
          </h2>
          <p className="text-sm border font-light border-white/[0.2]  rounded-full mt-4 text-white px-2 py-0.5">
            Watch me hover
          </p>
        </div>
        <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Synthetic Data" />

          <h2 className="text-white  mt-4 text-sm font-light">
            Reduce developer time to evaluate by 90% generating synthetic test
            datasets
          </h2>
          <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Watch me hover
          </p>
        </div>
        <div className="border border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

          <EvervaultCard text="Online Monitoring" />

          <h2 className="text-white mt-4 text-sm font-light">
            Custom smaller models for monitor the quality of LLM application in
            production
          </h2>
          <p className="text-sm border font-light border-white/[0.2] rounded-full mt-4 text-white px-2 py-0.5">
            Watch me hover
          </p>
        </div>
      </div>
    </section>
  );
}
