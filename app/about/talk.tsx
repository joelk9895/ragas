"use client";
import { useRouter } from "next/navigation";

export function TalktoFounder() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/contact")}>talk to founders</button>
  );
}
