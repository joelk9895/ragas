import { Job } from "@/app/types/job";
import { getJobBySlug } from "@/app/lib/getJobs";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
    <main className="flex flex-col items-center w-screen overflow-x-hidden h-fit bg-black text-white p-6 pt-60 pb-32">
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-400 mb-8">
        {job.location} • {job.date}
      </p>
      <div className="prose prose-invert prose-lg max-w-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{job.content}</ReactMarkdown>
      </div>
    </main>
  );
}
