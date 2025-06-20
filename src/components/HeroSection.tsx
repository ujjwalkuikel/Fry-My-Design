import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 sm:pt-24">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Social Proof */}
            <div className="inline-flex items-center gap-2 bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-full px-4 py-2 mb-6">
              <div className="flex -space-x-2">
                {[
                  "from-red-400 to-purple-500",
                  "from-emerald-400 to-teal-500",
                  "from-yellow-400 to-orange-500",
                  "from-blue-400 to-pink-500",
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 bg-gradient-to-r ${gradient} rounded-full border-2 border-white dark:border-zinc-900`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-lime-700 dark:text-lime-300">
                8,247+ engineers already joined
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 dark:from-lime-400 dark:to-cyan-400">
                  From Potato to Pro
                </span>
              </div>
              <div className="text-balance">Master System Design</div>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Master system design with interactive, AI-powered feedback. Build
              architecture diagrams that would impress FAANG interviewers.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-2/3 sm:max-w-none mx-auto lg:mx-0">
              <Link href="#">
                <div className="relative inline-block group w-full sm:w-auto">
                  <div className="absolute inset-0 rounded-xl p-[2px] bg-[conic-gradient(from_0deg,_lime,_cyan,_blue,_magenta,_red,_orange,_lime)] animate-spin-slow blur-sm opacity-80 group-hover:blur-md" />
                  <button className="relative z-10 bg-zinc-900 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg w-full sm:w-auto whitespace-nowrap">
                    Coming Soon
                  </button>
                </div>
              </Link>

              <Link href="#how-it-works">
                <button className="bg-gradient-to-r from-lime-500 to-green-500 hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-gray-200 dark:border-zinc-700 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  See How It Works
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image - Mobile Optimized */}
          <div className="flex-1 mt-8 lg:mt-0 w-full max-w-xs sm:max-w-md lg:max-w-xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 via-cyan-500/20 to-purple-500/20 blur-2xl rounded-xl transform scale-110" />
            <div className="relative bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-2xl shadow-lime-900/20">
              <div className="h-6 sm:h-8 bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700 flex items-center px-3 sm:px-4">
                <div className="flex space-x-1.5 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="p-2 sm:p-0">
                <Image
                  src="/system-design-mockup.png"
                  alt="SystemSloth Interface"
                  width={800}
                  height={500}
                  className="w-full rounded-b-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
