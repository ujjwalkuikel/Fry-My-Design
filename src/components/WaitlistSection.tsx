"use client";

import React, { useState } from "react";

export default function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    const res = await fetch("/api/submitEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <section
      id="early-access"
      className="scroll-mt-24 bg-zinc-100 dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-900 py-16 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 dark:from-lime-400 dark:to-cyan-400">
            Be the First to Get Access
          </span>
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Join 8,000+ engineers who are already leveling up with SystemSloth.
        </p>
      </div>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mx-auto"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-72 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:outline-none transition-all"
          />
          <button
            type="submit"
            className="w-1/2 sm:w-auto bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
          >
            Join Waitlist
          </button>
        </form>
      ) : (
        <p className="text-green-600 dark:text-green-400 font-medium text-lg">
          🎉 You’ve been added to the waitlist!
        </p>
      )}
    </section>
  );
}
