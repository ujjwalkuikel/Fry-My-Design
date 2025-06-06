// app/(auth)/login/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/canvas");
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/canvas");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white flex items-center justify-center px-6 transition-colors duration-300">
      <div className="bg-gray-100 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 rounded-2xl shadow-lg p-8 md:p-12 w-full max-w-md relative">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-purple-500 via-cyan-500 to-lime-500 blur-3xl opacity-30 rounded-full z-0" />

        <h1 className="text-3xl font-bold text-center mb-6 z-10 relative">
          Log in to your account
        </h1>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full bg-white text-black dark:bg-zinc-200 dark:text-black font-semibold py-3 rounded-lg hover:bg-gray-100 transition mb-6 z-10 relative"
        >
          <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <form
          onSubmit={handleEmailLogin}
          className="flex flex-col gap-4 z-10 relative"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="px-4 py-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 bg-white dark:bg-zinc-800 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-400 hover:to-green-400 text-black font-bold py-3 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-lime-500 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
