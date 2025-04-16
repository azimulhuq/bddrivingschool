"use client";
import { useState } from "react";

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book a Lesson</h1>
      {submitted ? (
        <p className="text-green-600">
          Booking submitted! We’ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border p-2 rounded"
            required
          />
          <select className="border p-2 rounded" required>
            <option value="">Choose Course</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <input type="date" className="border p-2 rounded" required />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
