import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Job } from "../types/job";

const jobsDirectory = path.join(process.cwd(), "app/data/jobs");

export function getAllJobs(): Job[] {
  const jobFiles = fs.readdirSync(jobsDirectory);

  return jobFiles.map((filename) => {
    const filePath = path.join(jobsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title as string,
      location: data.location as string,
      salary: data.salary as string,
      equity: data.equity as string,
      content,
      slug: filename.replace(".md", ""),
    };
  });
}

export function getJobCount(): number {
  return fs.readdirSync(jobsDirectory).length;
}

export function getJobBySlug(slug: string): Job | null {
  slug = slug.replace(/%20/g, " ");
  const filePath = path.join(jobsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    title: data.title as string,
    location: data.location as string,
    salary: data.salary as string,
    equity: data.equity as string,
    content,
    slug,
  };
}
