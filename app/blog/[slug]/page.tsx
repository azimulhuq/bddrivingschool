import type { Metadata } from "next";
import { useParams } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const formattedTitle = params.slug.replace(/-/g, " ");
  return {
    title: formattedTitle,
    description: `Read more about ${formattedTitle} and get driving insights from our team.`,
  };
}

export default function BlogPostPage() {
  const { slug } = useParams();
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog: {slug}</h1>
      <p>This is a placeholder for the blog post content for “{slug}”.</p>
    </div>
  );
}
