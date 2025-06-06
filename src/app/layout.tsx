import "./globals.css";

export const metadata = {
  title: "FryMyDesign",
  description: "System design playground",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  );
}