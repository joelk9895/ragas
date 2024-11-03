import Link from "next/link";
import { getAllJobs } from "../lib/getJobs";
import { Job } from "../types/job";

export default async function Careers() {
  const jobs: Job[] = getAllJobs();

  return (
    <main className="flex flex-col items-center w-screen overflow-x-hidden h-fit bg-black text-white p-4 pb-32 ">
      <Link
        href="/"
        className="self-start mb-6 text-yellow-400 text-sm sm:text-base hover:underline"
      >
        ← Back to Home
      </Link>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 mt-24 md:mt-32">
        Careers
      </h1>
      <section className="flex flex-col gap-4 md:gap-8 w-[90vw] md:w-[60vw] my-10 md:my-20">
        <p className="text-base md:text-lg text-center">
          Engineering Genius Anysphere is an applied research lab working on
          automating coding. Our approach is to build the engineer of the
          future: a human-AI programmer that&apos;s an order of magnitude more
          effective than any one programmer. This hybrid engineer will have
          effortless control over their codebase and no low-entropy keystrokes.
          They will iterate at the speed of their judgment, even in the most
          complex systems. Using a combination of AI and human ingenuity, they
          will out-smart and out-engineer the best pure-AI system. We are a
          group of researchers and engineers. We build software and models to
          invent at the edge of what&apos;s useful and what&apos;s possible. Our
          work has already improved the lives of hundreds of thousands of
          programmers. If this excites you, we&apos;d love to hear from you. —
          Aman, Sualeh, Michael, Arvid, and the entire Anysphere team
        </p>
      </section>
      <h2 className="text-xl md:text-2xl font-semibold">Open Positions</h2>
      <div className="flex flex-col items-center gap-6 md:gap-8 mt-10 md:mt-20 w-[90vw] md:w-[50vw]">
        {jobs.map((job) => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="flex flex-col md:flex-row items-center md:items-baseline justify-between min-w-[100%]"
          >
            <h2 className="text-lg md:text-2xl font-semibold text-center">
              {job.title}
            </h2>
            <div className="text-gray-400 mt-1 md:mt-0 flex flex-col md:flex-row items-center md:space-x-2">
              <span className="text-yellow-400">{job.location}</span>
              <span className="hidden md:inline">•</span>{" "}
              <span className="text-yellow-200">{job.salary}</span>
              <span className="hidden md:inline">•</span>
              <span>{job.equity}</span>
              <div className="flex md:hidden flex-col space-y-1">
                <span className="border-t border-gray-600 w-full" />
                <span className="border-t border-gray-600 w-full" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
