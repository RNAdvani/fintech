import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata: Metadata = {
  title: "FinLearn",
  description: "Finance Learning Platform",
};

// RootLayout.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex min-h-screen w-full flex-col lg:flex-row">
         {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
