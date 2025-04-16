import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function HomePage() {
  return (
    <section className="text-center space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Welcome to BD Driving School
        </h1>
        <p className="text-lg">
          Learn to drive with confidence. Book your first lesson today!
        </p>
      </div>
      <YouTubeEmbed videoId="dQw4w9WgXcQ" />
    </section>
  );
}
