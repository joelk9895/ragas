import { Icon } from "../features/component/featureCard";

export default function Careers() {
  return (
    <section className="md:w-[50vw] w-[90vw] text-center mb-10">
      <h2 className="text-white font-bold text-3xl text-left">Careers</h2>
      <p className="text-white text-md font-light mt-4 text-left">
        We are a small team focused on innovating on state of the art research
        in AI to provide value to our users. We are always in lookout for
        passionate individuals who shares similar vision.
        <br />
        <br /> Write to us on{" "}
        <a
          href="mailto:founders@explodinggradients.com"
          className="italic font-bold underline"
        >
          founders@explodinggradients.com.
        </a>{" "}
        We are looking to hearing from you.
      </p>
    </section>
  );
}
