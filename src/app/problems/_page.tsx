// app/problems/[id]/page.tsx
"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

const db = getFirestore(app);

export default function ProblemDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [problem, setProblem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  console.log("Loaded Problem ID:", id);

  useEffect(() => {
    async function fetchProblem() {
      const docRef = doc(db, "problems", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProblem(docSnap.data());
      }
      setLoading(false);
    }
    fetchProblem();
  }, [id]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!problem) return <div className="text-white p-8">Problem not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white p-6 flex flex-col md:flex-row gap-6">
      {/* Left Sidebar */}
      <div className="md:w-1/4 bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-6 h-fit">
        <h1 className="text-2xl font-bold mb-4 text-lime-400">
          {problem.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
          {problem.details}
        </p>
        <div className="space-y-2">
          <div className="text-sm">
            <strong>Difficulty:</strong> {problem.difficulty}
          </div>
          <div className="text-sm">
            <strong>Categories:</strong> {problem.categories?.join(", ")}
          </div>
          <div className="text-sm">
            <strong>Companies:</strong> {problem.companies?.join(", ")}
          </div>
          <div className="text-sm">
            <strong>Estimated Time:</strong> {problem.estimatedTimeMin} min
          </div>
        </div>
      </div>

      {/* Center Canvas */}
      <div className="md:w-2/4 bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-6 flex flex-col justify-center items-center">
        <div className="text-gray-400">[Canvas Area Placeholder]</div>
      </div>

      {/* Right AI Feedback */}
      <div className="md:w-1/4 bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-lg p-6 h-fit">
        <h2 className="text-xl font-bold mb-4 text-lime-400">AI Feedback</h2>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          {/* Feedback will be populated here after user submits design */}
          [AI feedback area placeholder]
        </div>
      </div>
    </div>
  );
}
