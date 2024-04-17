import Image from "next/image";
import { tenorsans } from "../layout";

export default function StackImage() {
  return (
    <>
      <h2 className="text-white text-3xl font-bold mt-24">
        <span className={`${tenorsans.className}`}>ragas</span> in your stack
      </h2>
      <Image
        src={"/ragasStack.png"}
        alt="Ragas stack"
        width={1000}
        height={1000}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </>
  );
}
