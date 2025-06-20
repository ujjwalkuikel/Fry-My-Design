"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic design components",
      "5 design saves",
      "Basic AI feedback",
      "PNG exports",
    ],
    buttonText: "Get Started",
    buttonLink: "/signup",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    features: [
      "All design components",
      "Unlimited design saves",
      "Advanced AI feedback",
      "PDF & SVG exports",
      "Premium interview questions",
    ],
    buttonText: "Start Pro Trial",
    buttonLink: "/signup",
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    features: [
      "Everything in Pro",
      "5 team members",
      "Collaborative design",
      "Team library & templates",
      "Priority support",
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    highlight: false,
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 mr-2 text-lime-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

function PlanCard({
  name,
  price,
  features,
  buttonText,
  buttonLink,
  highlight,
}: any) {
  return (
    <div
      className={clsx(
        "relative rounded-xl p-6 sm:p-8 transition-shadow border",
        "bg-white dark:bg-zinc-800 hover:shadow-lg",
        highlight
          ? "border-2 border-lime-500 md:scale-105"
          : "border-gray-200 dark:border-zinc-700"
      )}
    >
      {highlight && (
        <div className="absolute top-2 md:top-0 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 bg-lime-500 text-black px-3 py-0.5 rounded-full text-xs font-semibold">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black dark:text-white">
        {name}
      </h3>
      <div className="mb-4 sm:mb-6">
        <span className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
          {price}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">/month</span>
      </div>
      <ul className="space-y-2 mb-6 text-sm sm:text-base">
        {features.map((f: string) => (
          <li
            key={f}
            className="flex items-center text-gray-600 dark:text-gray-300"
          >
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
      <Link href={buttonLink}>
        <button
          className={clsx(
            "w-full font-semibold text-sm sm:text-base px-4 py-2 sm:py-3 rounded-lg transition-colors duration-200",
            highlight
              ? "bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-400 hover:to-green-400 text-black"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-gray-800 dark:text-white"
          )}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default function PricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.clientWidth,
          behavior: "smooth",
        });

        const endReached =
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 1;

        if (endReached) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="pricing"
      className="py-24 bg-gray-50 dark:bg-zinc-900/50 relative"
    >
      <div className="absolute right-10 top-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 dark:from-lime-400 dark:to-cyan-400">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Start for free, upgrade when you're ready. No hidden fees.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div
          ref={scrollRef}
          className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory px-1 -mx-1 pb-6 pt-8"
        >
          {plans.map((plan) => (
            <div
              className="snap-center shrink-0 w-[85%] sm:w-[80%]"
              key={plan.name}
            >
              <PlanCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
