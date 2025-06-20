// components/ProblemClientPage.tsx
"use client";

import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

const db = getFirestore(app);

export default function ProblemClientPage({ id }: { id: string }) {
  const [problem, setProblem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div>Loading...</div>;
  if (!problem) return <div>Problem not found.</div>;

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.details}</p>
    </div>
  );
}
