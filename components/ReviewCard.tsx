export default function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 dark:text-gray-200">
      “{text}” <span className="block mt-1 font-semibold">— {name}</span>
    </blockquote>
  );
}