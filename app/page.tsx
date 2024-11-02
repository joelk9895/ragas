import path from "path";
import fs from "fs";
import About from "./about/about";
import Careers from "./career/career";
import Client from "./client/client";
import { EvervaultCardDemo } from "./features/features";
import Footer from "./footer/footer";
import Design from "./hero/design";
import Hero from "./hero/hero";
import Investors from "./investors/investors";
import Nav from "./nav/nav";
import StackImage from "./stack/stack";
import Tweets from "./tweets/tweet";
import { tweets } from "./tweets/tweets";
import Preloader from "./preloader/preloader";

export default function Home() {
  const jobsDirectory = path.join(process.cwd(), "app/data/jobs");
  const jobFiles = fs.readdirSync(jobsDirectory);
  const jobCount = jobFiles.length;

  return (
    <main className="flex flex-col items-center w-screen overflow-x-hidden h-fit bg-black">
      <Preloader />
      <Nav jobCount={jobCount} />
      <Design />
      <Hero />
      <EvervaultCardDemo />
      <StackImage />
      <About />
      <Client />
      <Tweets tweetsList={tweets} />
      <Careers />
      <Investors />
      <Footer />
    </main>
  );
}
