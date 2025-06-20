"use client";
// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import WaitlistSection from "@/components/WaitlistSection";
import TestimonialsSection from "@/components/Testimonial";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("interview");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen font-sans bg-white dark:bg-black transition-colors duration-300">
      <Head>
        <title>SystemSloth – AI System Design Coach</title>
        <meta
          name="description"
          content="Your AI-powered system design coach. Build, learn, and master system architecture like a senior engineer."
        />
      </Head>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="flex items-center space-x-2 hover:opacity-90 transition"
            >
              <Image
                src="/logo_nobg.png"
                alt="SystemSloth Logo"
                width={150}
                height={150}
              />
              <span className="text-lime-500 dark:text-lime-400 font-bold text-2xl">
                System
                <span className="text-gray-800 dark:text-white">Sloth</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              >
                Pricing
              </Link>
              <Link
                href="#early-access"
                className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 shadow-md z-40 px-6 py-4 space-y-4 md:hidden">
            <Link
              href="#features"
              className="block text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="block text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#early-access"
              className="block bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white text-center px-4 py-3 rounded-lg font-semibold transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Waitlist Section (Handled by waitlistSection components*/}
      <WaitlistSection />

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute left-1/2 top-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 via-cyan-500 to-purple-500 dark:from-lime-400 dark:via-cyan-400 dark:to-purple-400">
              Master System Design Like Never Before
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              SystemSloth gives you the tools, feedback, and practice that
              static tutorials simply can't provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Drag-and-Drop Canvas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Interactive visual editor with pre-built components for
                databases, services, load balancers, and more. Build complex
                architectures in minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Feedback Engine</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get real-time suggestions on bottlenecks, scalability issues,
                and best practices—like having a senior engineer reviewing your
                work 24/7.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                FAANG Interview Prompts
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Practice with real-world system design questions from top tech
                company interviews. Prepare for the exact challenges you'll
                face.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Scoring
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get quantified scores on your design's scalability,
                availability, resilience, and cost-efficiency. Track your
                improvement over time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Export & Share</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Save your designs, export them as images or PDFs, and share them
                with your team or interviewers. Perfect for portfolios or
                documentation.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-100/50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 hover:border-lime-500/50 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access a library of best practices, patterns, and anti-patterns
                to boost your system design knowledge as you build.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="bg-gray-100/50 dark:bg-zinc-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-6 sm:gap-x-12 items-center text-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <span className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">
              Used by engineers from:
            </span>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-x-10 items-center">
              <Image
                src="/logo-google.svg"
                alt="Google"
                width={120}
                height={36}
              />
              <Image src="/logo-meta.svg" alt="Meta" width={120} height={36} />
              <Image
                src="/logo-amazon.svg"
                alt="Amazon"
                width={120}
                height={36}
              />
              <Image
                src="/logo-microsoft.svg"
                alt="Microsoft"
                width={120}
                height={36}
              />
              <Image
                src="/logo-netflix.svg"
                alt="Netflix"
                width={120}
                height={36}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black relative"
      >
        <div className="absolute right-0 top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-cyan-500 dark:from-lime-400 dark:to-cyan-400">
                How SystemSloth Works
              </span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Turn system design prep from passive learning into interactive
              mastery
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
            <div className="flex-1 lg:order-2">
              <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-xl">
                <div className="flex border-b border-gray-200 dark:border-zinc-700">
                  <button
                    className={`flex-1 py-4 text-center ${
                      activeTab === "interview"
                        ? "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-b-2 border-lime-500"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("interview")}
                  >
                    Interview Question
                  </button>
                  <button
                    className={`flex-1 py-4 text-center ${
                      activeTab === "canvas"
                        ? "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-b-2 border-lime-500"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("canvas")}
                  >
                    Design Canvas
                  </button>
                  <button
                    className={`flex-1 py-4 text-center ${
                      activeTab === "feedback"
                        ? "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-b-2 border-lime-500"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab("feedback")}
                  >
                    AI Feedback
                  </button>
                </div>

                <div className="p-4 h-80  ">
                  {activeTab === "interview" && (
                    <div className="h-full flex flex-col">
                      <h3 className="text-xl font-semibold mb-4">
                        Design a URL Shortening Service like TinyURL
                      </h3>
                      <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <p>Requirements:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                          <li>
                            Users can submit long URLs and get a unique short
                            link
                          </li>
                          <li>
                            System should redirect short URLs to original
                            destination
                          </li>
                          <li>Links should expire after a default timespan</li>
                        </ul>
                      </div>
                    </div>
                  )}
                  {activeTab === "canvas" && (
                    <div className="h-full bg-gray-50 dark:bg-zinc-900 rounded-lg border border-dashed border-gray-300 dark:border-zinc-700 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-gray-400 dark:text-zinc-500 mb-4">
                          Your interactive design canvas
                        </div>
                        <div className="flex justify-center gap-4">
                          <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-lg border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-500 dark:text-zinc-500">
                            DB
                          </div>
                          <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-lg border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-500 dark:text-zinc-500">
                            API
                          </div>
                          <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-lg border border-gray-300 dark:border-zinc-700 flex items-center justify-center text-gray-500 dark:text-zinc-500">
                            LB
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "feedback" && (
                    <div className="h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-lime-500 to-green-500 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold">AI Design Coach</span>
                      </div>
                      <div className="space-y-1 text-gray-700 dark:text-gray-300 text-sm bg-gray-50/50 dark:bg-zinc-900/50 p-4 rounded-lg">
                        <p>
                          <span className="text-yellow-500 dark:text-yellow-400">
                            ⚠️ Scalability concern:
                          </span>{" "}
                          Your current design might face bottlenecks when
                          handling millions of redirects.
                        </p>
                        <p>
                          <span className="text-lime-600 dark:text-lime-400">
                            ✓ Good choice:
                          </span>{" "}
                          Using Redis for caching frequently accessed URLs will
                          reduce database load.
                        </p>
                        <p>
                          <span className="text-blue-600 dark:text-blue-400">
                            💡 Suggestion:
                          </span>{" "}
                          Consider adding a CDN in front of your application
                          servers to distribute the load geographically.
                        </p>
                        <p className="text-gray-500 text-xs mt-4">
                          Overall score: 7.5/10 - Good foundation with room for
                          improvement
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step Text */}
            <div className="w-full lg:w-1/2 order-1 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-6 text-black dark:text-white">
                Build, Review, Improve
              </h3>

              <div className="space-y-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold mt-1 flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-black dark:text-white">
                        {
                          [
                            "Select an Interview Question",
                            "Design Your Solution",
                            "Get AI Feedback",
                          ][i]
                        }
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                        {
                          [
                            "Choose from our library of real FAANG system design prompts or create your own custom challenge.",
                            "Use our drag-and-drop editor with pre-built components to visually create your system architecture.",
                            "Receive instant, specific feedback on scalability, bottlenecks, and best practices from our AI coach.",
                          ][i]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/signup">
                  <button className="bg-lime-500 hover:bg-lime-400 text-black font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2 text-sm sm:text-base">
                    Try It For Free
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Pricing Section */}
      <PricingSection />

      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-lime-500 to-green-600 dark:from-lime-600 dark:to-green-700 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to level up your system design skills?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 opacity-90 max-w-2xl mx-auto">
            Join thousands of engineers who are building better systems and
            acing interviews with SystemSloth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/signup">
              <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg shadow-lg transition">
                Start Designing Free
              </button>
            </Link>

            <Link href="/demo">
              <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg flex items-center justify-center gap-2 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
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
                Watch Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="text-lime-500 dark:text-lime-400 font-bold text-2xl mb-4">
                System
                <span className="text-gray-800 dark:text-white">Sloth</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-xs">
                An AI-powered system design coach that helps engineers create
                better architectures and ace technical interviews.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Canvas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-lime-500 dark:text-gray-400 dark:hover:text-lime-400"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} SystemSloth. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
