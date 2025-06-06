"use client";
import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@/components/canvaclaude"), {
  ssr: false,
});

export default function CanvasPage() {
  return <Canvas />;
}
