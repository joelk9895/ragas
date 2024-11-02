import Link from "next/link";
import { getAllJobs } from "../lib/getJobs";
import { Job } from "../types/job";

export default async function Careers() {
  const jobs: Job[] = getAllJobs();

  return (
    <main className="flex flex-col items-center w-screen overflow-x-hidden h-fit bg-black text-white p-6 pt-32">
      <h1 className="text-3xl font-bold mb-8">Careers</h1>
      <section className="flex flex-col gap-8 w-[60vw] my-20">
        <p className="text-lg">
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
      <h2 className="text-2xl font-semibold">Open Positions</h2>
      <div className="flex flex-col gap-8 mt-20">
        {jobs.map((job) => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="flex items-baseline justify-between w-[50vw]"
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-gray-400">
              <span className="text-yellow-400">{job.location}</span> •{" "}
              <span className="text-yellow-200">{job.salary}</span> •{" "}
              {job.equity}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
