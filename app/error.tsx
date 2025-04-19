"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="text-center py-20">
      <h2 className="text-2xl font-semibold text-red-600">
        Something went wrong!
      </h2>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        An unexpected error occurred while loading the page.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </section>
  );
}
