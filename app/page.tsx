import { EvervaultCardDemo } from "./features/features";
import Design from "./hero/design";
import Hero from "./hero/hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen h-fit bg-black">
      <Design />
      <Hero />
      <EvervaultCardDemo />
    </main>
  );
}
