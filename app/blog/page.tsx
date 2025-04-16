import BlogCard from "@/components/BlogCard";

const posts = [
  { title: "Winter Driving Tips", slug: "winter-driving-tips" },
  { title: "How to Pass Your Road Test", slug: "pass-road-test" },
];

export default function BlogIndexPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {posts.map((post) => (
        <BlogCard key={post.slug} title={post.title} slug={post.slug} />
      ))}
    </div>
  );
}
