import { ImageResponse } from "@vercel/og";
import { getJobBySlug } from "@/app/lib/getJobs";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return new Response("Not Found", { status: 404 });
  }

  // Load the font file from the local public directory
  const fontPath = path.join(process.cwd(), "public/fonts/Satoshi-Regular.ttf");
  const fontData = fs.readFileSync(fontPath);

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
          fontFamily: "Satoshi, sans-serif",
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
      fonts: [
        {
          name: "Satoshi",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
