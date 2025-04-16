import ReviewCard from "@/components/ReviewCard";

export default function ReviewsPage() {
  const reviews = [
    { name: "Aisha", text: "Excellent instruction! Highly recommend." },
    { name: "Jamal", text: "Passed my test on the first try." },
    { name: "Maria", text: "Flexible schedule and friendly instructors." },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Reviews</h1>
      {reviews.map((review, index) => (
        <ReviewCard key={index} name={review.name} text={review.text} />
      ))}
    </div>
  );
}
