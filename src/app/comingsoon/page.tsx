"use client";
// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [activeTab, setActiveTab] = useState("interview");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(8247);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior SWE at Google",
      content:
        "SystemSloth's AI feedback helped me identify blind spots in my system design approach. Landed my L6 role after 3 weeks of practice.",
      avatar: "SC",
    },
    {
      name: "Marcus Rodriguez",
      role: "Staff Engineer at Meta",
      content:
        "The interactive diagrams and real-time feedback made complex distributed systems concepts click. Game changer for interview prep.",
      avatar: "MR",
    },
    {
      name: "Priya Patel",
      role: "Principal Engineer at Amazon",
      content:
        "Finally, a tool that understands the nuances of system design. The AI coaching feels like having a senior architect mentor you.",
      avatar: "PP",
    },
  ];

  const companies = [
    { name: "Google", logo: "/logos/google.svg", count: "2,341" },
    { name: "Meta", logo: "/logos/meta.svg", count: "1,876" },
    { name: "Amazon", logo: "/logos/amazon.svg", count: "1,923" },
    { name: "Microsoft", logo: "/logos/microsoft.svg", count: "1,654" },
    { name: "Netflix", logo: "/logos/netflix.svg", count: "743" },
    { name: "Uber", logo: "/logos/uber.svg", count: "892" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setWaitlistCount((prev) => prev + 1);
      // Here you would typically send the email to your backend
    }
  };

  const benefits = [
    {
      icon: "🎯",
      title: "Real FAANG Interview Scenarios",
      description:
        "Practice with actual system design questions from Google, Meta, Amazon, and more",
    },
    {
      icon: "🤖",
      title: "AI-Powered Instant Feedback",
      description:
        "Get detailed analysis on scalability, trade-offs, and architectural decisions in real-time",
    },
    {
      icon: "⚡",
      title: "3x Faster Learning",
      description:
        "Master distributed systems concepts with interactive diagrams and guided walkthroughs",
    },
    {
      icon: "📊",
      title: "Track Your Progress",
      description:
        "Monitor improvement across different system design domains with detailed analytics",
    },
  ];

  return (
    <div className="min-h-screen font-sans relative overflow-hidden transition-colors duration-300">
      <Head>
        <title>SystemSloth – Master System Design Interviews with AI</title>
        <meta
          name="description"
          content="The AI-powered system design coach that helps engineers land senior roles at FAANG companies. Join 8,000+ engineers already practicing."
        />
      </Head>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Enhanced Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-lime-500 dark:text-lime-400 font-bold text-2xl">
                System
                <span className="text-gray-800 dark:text-white">Sloth</span>
              </div>
              <div className="ml-4 px-2 py-1 bg-lime-100 dark:bg-lime-900/30 rounded-full text-xs font-medium text-lime-700 dark:text-lime-300">
                Early Access
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-200 hover:scale-105"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-200 hover:scale-105"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 dark:text-gray-300 hover:text-lime-500 dark:hover:text-lime-400 transition-all duration-200 hover:scale-105"
              >
                Success Stories
              </Link>
              <ThemeToggle />
              <button className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative z-10 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-full px-4 py-2 mb-8">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gradient-to-r from-lime-400 to-green-500 rounded-full border-2 border-white dark:border-zinc-900"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-lime-700 dark:text-lime-300">
                  {waitlistCount.toLocaleString()}+ engineers already joined
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-lime-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
                  Master System Design
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Land Your Dream Role
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                The AI-powered coach that transforms junior engineers into
                system design experts. Practice with real FAANG interview
                scenarios and get instant feedback that actually helps.
              </p>

              {/* Enhanced CTA Section */}
              <div className="space-y-6">
                {!isSubmitted ? (
                  <form
                    onSubmit={handleEmailSubmit}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-lime-500 to-green-600 hover:from-lime-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl transform active:scale-95"
                    >
                      Get Early Access
                    </button>
                  </form>
                ) : (
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 dark:text-green-200">
                          You're in!
                        </h3>
                        <p className="text-sm text-green-600 dark:text-green-300">
                          Check your email for exclusive early access content.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-zinc-700 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all duration-200 hover:scale-105">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Demo (2 min)
                  </button>
                  <Link
                    href="#testimonials"
                    className="text-lime-600 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 font-medium transition-colors duration-200"
                  >
                    See success stories →
                  </Link>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Trusted by engineers at:
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-60">
                  {companies.slice(0, 4).map((company) => (
                    <div key={company.name} className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-zinc-700 rounded flex items-center justify-center">
                        <span className="text-xs font-bold">
                          {company.name[0]}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-gray-800">
                {/* Mock Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">
                    SystemSloth AI Coach
                  </span>
                </div>

                {/* Interactive System Design */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-4">
                      Design a Chat System
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Load Balancer */}
                    <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-3 text-center hover:bg-blue-500/30 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-blue-500 rounded mx-auto mb-2"></div>
                      <span className="text-blue-300 text-xs">
                        Load Balancer
                      </span>
                    </div>

                    {/* API Gateway */}
                    <div className="bg-purple-500/20 border border-purple-500 rounded-lg p-3 text-center hover:bg-purple-500/30 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-2"></div>
                      <span className="text-purple-300 text-xs">
                        API Gateway
                      </span>
                    </div>

                    {/* WebSocket */}
                    <div className="bg-green-500/20 border border-green-500 rounded-lg p-3 text-center hover:bg-green-500/30 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-green-500 rounded mx-auto mb-2"></div>
                      <span className="text-green-300 text-xs">WebSocket</span>
                    </div>

                    {/* Database */}
                    <div className="bg-orange-500/20 border border-orange-500 rounded-lg p-3 text-center hover:bg-orange-500/30 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2"></div>
                      <span className="text-orange-300 text-xs">Database</span>
                    </div>

                    {/* Cache */}
                    <div className="bg-red-500/20 border border-red-500 rounded-lg p-3 text-center hover:bg-red-500/30 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-red-500 rounded mx-auto mb-2"></div>
                      <span className="text-red-300 text-xs">Redis Cache</span>
                    </div>

                    {/* Message Queue */}
                    <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-3 text-center hover:bg-yellow-500/30 transition-all duration-200 cursor-pointer">
                      <div className="w-8 h-8 bg-yellow-500 rounded mx-auto mb-2"></div>
                      <span className="text-yellow-300 text-xs">Queue</span>
                    </div>
                  </div>

                  {/* AI Feedback */}
                  <div className="bg-lime-500/10 border border-lime-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-xs text-black font-bold">AI</span>
                      </div>
                      <div className="text-sm text-lime-300">
                        <p className="font-medium mb-1">💡 Smart suggestion:</p>
                        <p>
                          Consider adding a CDN for static assets and implement
                          database sharding for scalability. Your WebSocket
                          approach is solid for real-time messaging!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-zinc-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-lime-500">97%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Success Rate
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-zinc-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">2.3x</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Faster Learning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="features"
        className="relative z-10 py-20 bg-gray-50 dark:bg-zinc-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Engineers Choose SystemSloth
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stop struggling with system design interviews. Our AI coach
              provides the personalized feedback you need to master complex
              architectures and land senior engineering roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories from Engineers
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real results from engineers who used SystemSloth to advance their
              careers
            </p>
          </div>

          <div className="relative">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentTestimonial
                      ? "bg-lime-500 scale-125"
                      : "bg-gray-300 dark:bg-zinc-600 hover:bg-gray-400 dark:hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Success Stats */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-lime-50 to-green-50 dark:from-lime-900/10 dark:to-green-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Engineers Placed at Top Companies
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company) => (
              <div key={company.name} className="text-center">
                <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    {company.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {company.count} engineers
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-lime-500 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Master System Design?
          </h2>
          <p className="text-xl text-lime-100 mb-8 max-w-2xl mx-auto">
            Join thousands of engineers who've used SystemSloth to land their
            dream roles. Early access starts Q3 2025.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-lime-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
              Get Early Access - Free
            </button>
            <button className="text-white border border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
              Schedule Demo Call
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-lime-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free practice questions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-lime-400 font-bold text-2xl mb-4">
                System<span className="text-white">Sloth</span>
              </div>
              <p className="text-gray-400">
                The AI-powered system design coach helping engineers master
                complex architectures and land senior roles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SystemSloth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
