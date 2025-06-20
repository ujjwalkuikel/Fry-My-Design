// ✅ no "use client"
// Make sure the file exists at src/components/ProblemClientPage.tsx or correct the import path if necessary
import ProblemClientPage from "@/components/ProblemClientPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function ProblemDetailPage({ params }: PageProps) {
  return <ProblemClientPage id={params.id} />;
}
