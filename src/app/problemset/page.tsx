// app/problems/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "@/lib/firebase";
import type { Problem } from "@/lib/types";

const db = getFirestore(app);

export default function ProblemSetPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  useEffect(() => {
    async function fetchProblems() {
      const snapshot = await getDocs(collection(db, "problems"));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Problem));
      setProblems(data);
      setLoading(false);
    }
    fetchProblems();
  }, []);

  // Unique categories and difficulties for filters
  const categories = Array.from(new Set(problems.flatMap((p) => p.categories || [])));
  const difficulties = Array.from(new Set(problems.map((p) => p.difficulty)));

  // Filtered and searched problems
  const filtered = problems.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.companies && p.companies.join(" ").toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category === "all" || (p.categories && p.categories.includes(category));
    const matchesDifficulty = difficulty === "all" || p.difficulty === difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">System Design Interview Questions</h1>
        <p className="text-gray-600 mb-6">
          Practice the most common system design questions asked in top tech interviews!
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <input
            type="text"
            placeholder="Search questions/companies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[220px] px-4 py-2 border border-gray-300 rounded-lg"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="all">Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="all">Difficulty</option>
            {difficulties.map((diff) => (
              <option key={diff} value={diff}>{diff}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow border">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-gray-500 font-semibold">Company</th>
                <th className="py-3 px-4 text-gray-500 font-semibold">Title</th>
                <th className="py-3 px-4 text-gray-500 font-semibold">Category</th>
                <th className="py-3 px-4 text-gray-500 font-semibold">Difficulty</th>
                {/* <th className="py-3 px-4 text-gray-500 font-semibold">Status</th> */}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    No problems found.
                  </td>
                </tr>
              ) : (
                filtered.map((prob) => (
                  <tr
                    key={prob.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">
                      {/* You can use a company logo here if you have one */}
                      {prob.companies?.[0] || "-"}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/problems/${prob.id}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {prob.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4">{prob.categories?.[0] || "-"}</td>
                    <td className="py-3 px-4">
                      <span
                        className={
                          prob.difficulty === "Easy"
                            ? "text-green-600 font-semibold"
                            : prob.difficulty === "Medium"
                            ? "text-yellow-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {prob.difficulty}
                      </span>
                    </td>
                    {/* <td className="py-3 px-4">
                      {prob.solved ? (
                        <span className="text-green-600">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td> */}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
