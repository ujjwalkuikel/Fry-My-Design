"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "@/lib/firebase"; // or adjust path if needed

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up successfully");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      console.log("Logged in with Google");
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white p-6">
      <div className="bg-zinc-800 rounded-xl p-8 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center">Create your account</h1>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black font-medium py-3 rounded-lg"
        >
          Continue with Google
        </button>

        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-700 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-700 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-lime-500 to-green-500 text-black font-semibold py-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-lime-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
