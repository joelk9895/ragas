import { Icon } from "../features/component/featureCard";

export default function About() {
  return (
    <section className="md:w-[50vw] w-[90vw] text-center">
      <h2 className="text-white font-bold text-3xl lowercase">About Us</h2>
      <p className="text-white text-md font-light mt-4">
        We are a group of passionate individuals who are leveraging cutting-edge
        research and pragmatic engineering practices to empower the visionaries
        who are redefining the possibilities of LLMs, with the right tools.
      </p>
      <h3 className="text-white font-medium text-2xl mt-10 mb-5">Founders</h3>
      <div className="flex flex-col items-center md:flex-row justify-center gap-5 text-white mb-10">
        <div className="flex flex-col border min-w-[220px] w-fit h-fit border-white/[0.2] p-10 relative">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
          <h4 className="text-lg font-bold">Shahul</h4>
          <p className="text-sm font-regular text-gray-400">
            Applied AI research
            <br />
            Kaggle GM
          </p>
        </div>
        <div className="flex flex-col border min-w-[220px] w-fit h-fit border-white/[0.2] p-10 relative">
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
      <p className="text-white text-md font-medium mt-4 text-center">
        For support or questions regarding ragas please{" "}
        <a
          className="font-thin italic underline text-yellow-200"
          href="https://discord.gg/WhPbAP7d"
        >
          join discord
        </a>{" "}
        as questions in <span className="italic font-black">#questions</span>{" "}
        chatroom.
      </p>
      <p className="text-white text-lg font-medium mt-1 mb-10 text-center">
        For enterprise features and collaborations{" "}
        <a href="" className="font-thin  text-yellow-200">
          email us
        </a>{" "}
        or{" "}
        <a href="" className="font-thin  text-yellow-200">
          talk to founder.
        </a>
      </p>
    </section>
  );
}
