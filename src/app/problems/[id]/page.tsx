// app/problems/[id]/page.tsx
import ProblemClientPage from "@/components/ProblemClientPage";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ProblemClientPage id={id} />;
}
