"use client";

import { ThemeProvider } from "next-themes";
import Script from "next/script";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XP4W8CY7B6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XP4W8CY7B6');
        `}
      </Script>

      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
          {children}
        </main>
      </ThemeProvider>
    </>
  );
}
