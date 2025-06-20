"use client";

import { ThemeProvider } from "next-themes";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
        {children}
      </main>
    </ThemeProvider>
  );
}
