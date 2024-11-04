// app/api/og/[slug]/route.ts
import { ImageResponse } from "@vercel/og";
import { getJobBySlug } from "@/app/lib/getJobs";

export const runtime = "edge";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return new Response("Not Found", { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            color: "#FFD700",
          }}
        >
          {job.title}
        </h1>
        <p
          style={{
            fontSize: "30px",
            maxWidth: "800px",
            textAlign: "center",
            color: "#B0B0B0",
          }}
        >
          {job.location} • {job.salary} • {job.equity}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
