import Link from 'next/link';

export default function BlogCard({ title, slug }: { title: string; slug: string }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Link href={`/blog/${slug}`} className="text-blue-600 underline">Read more</Link>
    </div>
  );
}