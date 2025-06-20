"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    title: "Senior Backend Engineer, Ex-Google",
    quote:
      "SystemSloth helped me ace my system design interview at a FAANG company. The AI feedback pointed out scalability issues I completely missed!",
  },
  {
    name: "Michael T.",
    title: "Staff Engineer, Fintech Startup",
    quote:
      "I use this tool with my team for architectural planning meetings. The visual components make it easy to communicate complex ideas quickly.",
  },
  {
    name: "David L.",
    title: "Principal Engineer, E-commerce Platform",
    quote:
      "After years of struggling with whiteboard system design, this tool finally made the concepts click. Now I teach my junior engineers using SystemSloth.",
  },
  {
    name: "Lina M.",
    title: "Software Architect, HealthTech",
    quote:
      "The design canvas and AI feedback combo is killer. This replaced my whiteboard prep completely.",
  },
  {
    name: "Akash R.",
    title: "Engineering Manager, EdTech",
    quote:
      "I've made this a part of our onboarding for junior engineers. It's fun and effective.",
  },
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      renderMode: "performance",
      slides: {
        perView: 1,
        spacing: 12,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 1, spacing: 16 },
        },
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 24 },
        },
      },
    },
    []
  );

  useEffect(() => {
    if (!instanceRef.current) return;
    const slider = instanceRef.current;
    let timeout: NodeJS.Timeout;
    let mouseOver = false;

    const next = () => {
      if (mouseOver || !slider) return;
      slider.next();
      timeout = setTimeout(next, 2000);
    };

    const start = () => (timeout = setTimeout(next, 2000));
    const stop = () => clearTimeout(timeout);

    start();

    const container = sliderRef.current;
    container?.addEventListener("mouseover", () => {
      mouseOver = true;
      stop();
    });
    container?.addEventListener("mouseout", () => {
      mouseOver = false;
      start();
    });

    return () => {
      stop();
      container?.removeEventListener("mouseover", () => (mouseOver = true));
      container?.removeEventListener("mouseout", () => (mouseOver = false));
    };
  }, [instanceRef]);

  const Card = ({ name, title, quote }: (typeof testimonials)[0]) => (
    <div className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow h-full flex flex-col justify-between min-h-[200px] sm:min-h-[220px]">
      <div className="flex-1">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-300 dark:bg-zinc-700 rounded-full mr-3 sm:mr-4 flex-shrink-0" />
          <div className="min-w-0">
            <h4 className="font-semibold text-black dark:text-white text-sm sm:text-base truncate">
              {name}
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-tight">
              {title}
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="mt-3 sm:mt-4 flex text-yellow-500 text-sm sm:text-base">
        {"★★★★★".split("").map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900 relative">
      <div className="absolute left-20 bottom-20 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 dark:from-lime-400 dark:to-cyan-400">
            What Engineers Are Saying
          </h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of developers who've leveled up their system design
            skills with SystemSloth.
          </p>
        </div>

        <div className="relative">
          <div className="mx-12 sm:mx-16 lg:mx-20">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((t, i) => (
                <div key={i} className="keen-slider__slide">
                  <Card {...t} />
                </div>
              ))}
            </div>
          </div>

          {loaded && instanceRef.current && (
            <>
              <button
                onClick={() => instanceRef.current?.prev()}
                className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow-md p-1.5 sm:p-2 rounded-full hover:scale-105 transition-transform"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-zinc-800 border dark:border-zinc-700 shadow-md p-1.5 sm:p-2 rounded-full hover:scale-105 transition-transform"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        {loaded && instanceRef.current && (
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentSlide === idx
                    ? "bg-lime-500"
                    : "bg-gray-300 dark:bg-zinc-600"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
