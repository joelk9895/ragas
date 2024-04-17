import About from "./about/about";
import Client from "./client/client";
import { EvervaultCardDemo } from "./features/features";
import Design from "./hero/design";
import Hero from "./hero/hero";
import StackImage from "./stack/stack";
import Tweets from "./tweets/tweet";
import { tweets } from "./tweets/tweets";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen h-fit bg-black">
      <Design />
      <Hero />
      <EvervaultCardDemo />
      <StackImage />
      <About />
      <Client />
      <Tweets tweetsList={tweets} />
    </main>
  );
}
