"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const companies = [
  {
    name: "Google",
    src: "/logo_google.svg",
    lightBg: "bg-gradient-to-br from-yellow-50 via-white to-green-50",
    darkBg: "bg-zinc-800",
  },
  {
    name: "Meta",
    src: "/meta_logo.svg",
    lightBg: "bg-gradient-to-br from-blue-50 via-white to-blue-100",
    darkBg: "bg-blue-950/60", // subtle blue tint
  },
  {
    name: "Amazon",
    src: "/amazon_logo.svg",
    lightBg: "bg-gradient-to-br from-yellow-50 via-white to-orange-50",
    darkBg: "bg-yellow-900/40", // subtle warm tint
  },
  {
    name: "Microsoft",
    src: "/microsoft_logo.svg",
    lightBg: "bg-gradient-to-br from-cyan-50 via-white to-blue-50",
    darkBg: "bg-zinc-800",
  },
  {
    name: "Netflix",
    src: "/netflix_logo.svg",
    lightBg: "bg-gradient-to-br from-red-50 via-white to-pink-50",
    darkBg: "bg-zinc-800",
  },
];

export default function TrustedByLogos() {
  const { theme } = useTheme();

  return (
    <section className="relative bg-gray-50 dark:bg-zinc-900 py-16 sm:py-24 transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 dark:from-lime-400 dark:to-cyan-400">
              Used by Engineers from
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands of engineers from top companies who trust us to
            master system design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          {companies.map(({ name, src, lightBg }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{
                duration: 0.4,
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer 
                ${
                  theme === "light"
                    ? `${lightBg} shadow-sm`
                    : "bg-zinc-800 shadow-md"
                }`}
            >
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20">
                <Image
                  src={src}
                  alt={`${name} logo`}
                  fill
                  className={`object-contain ${
                    theme === "dark" ? "brightness-125 contrast-125" : ""
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
