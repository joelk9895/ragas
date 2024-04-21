import { Icon } from "../features/component/featureCard";

export default function Careers() {
  return (
    <section className="md:w-[50vw] w-[90vw] text-center">
      <h2 className="text-white font-bold text-3xl text-left">Career</h2>
      <p className="text-white text-md font-light mt-4 text-left">
        Midjourney is an independent research lab exploring new mediums of
        thought and expanding the imaginative powers of the human species.
        <br /> <br /> We are a small self-funded team focused on design, human
        infrastructure, and AI. We have 11 full-time staff and an incredible set
        of advisors.
      </p>
      <h3 className="text-white font-medium text-2xl mt-10 md:text-left mb-5">
        Founders
      </h3>
      <div className="flex flex-col items-center md:flex-row gap-5 text-white mb-10">
        <div className="flex flex-col border w-fit h-fit border-white/[0.2] p-10 relative">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
          <h4 className="text-lg font-bold">Shahul ES</h4>
          <p className="text-sm font-regular text-gray-400">
            kaggle Grandmaster
            <br />
            previously @ Amplyfi
          </p>
        </div>
        <div className="flex flex-col border w-fit h-fit border-white/[0.2] p-10 relative">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
          <h4 className="text-lg font-bold">Jithin James</h4>
          <p className="text-sm font-light text-gray-400">
            chief maintainer
            <br />
            previously @ BentoML
          </p>
        </div>
      </div>
    </section>
  );
}
