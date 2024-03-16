import Metrics from "./Components/Metrics";
import Quality from "./Components/Quality";
import Synthetic from "./Components/Synthetic";

export default function Features() {
  return (
    <section className="flex flex-col items-center justify-start w-full h-fit pb-14 pt-14">
      <h2 className="text-3xl mb-16">Features</h2>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Metrics />
        <Synthetic />
        <Quality />
      </div>
    </section>
  );
}
