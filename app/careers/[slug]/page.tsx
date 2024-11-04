import { Job } from "@/app/types/job";
import { getJobBySlug, getAllJobs } from "@/app/lib/getJobs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface JobPageProps {
  params: { slug: string };
}

export default function JobPage({ params }: JobPageProps) {
  const job: Job | null = getJobBySlug(params.slug);

  if (!job) {
    notFound();
    return null;
  }

  return (
    <main className="flex flex-col items-center w-screen overflow-x-hidden h-fit bg-black text-white p-4 sm:p-6 pt-32 pb-20 sm:pb-32">
      <Link
        href="/careers"
        className="self-start mb-6 text-yellow-400 text-sm sm:text-base hover:underline"
      >
        ← Back to Careers
      </Link>
      <h1 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center sm:text-left max-w-2xl">
        {job.title}
      </h1>
      <p className="text-gray-400 mb-6 sm:mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center sm:space-x-2">
        <span className="text-yellow-400">{job.location}</span>
        <span className="hidden sm:inline">•</span> <span>{job.salary}</span>
        <span className="hidden sm:inline">•</span>
        <span>{job.equity}</span>
      </p>
      <hr className="border-gray-700 w-full max-w-2xl mb-6" />
      <div className="prose prose-invert prose-lg max-w-2xl text-sm sm:text-base leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.content}</ReactMarkdown>
      </div>
    </main>
  );
}

// Use `generateStaticParams` instead of `generateStaticPaths`
export async function generateStaticParams() {
  const jobs = getAllJobs();

  return jobs.map((job) => ({
    slug: job.slug,
  }));
}
