import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C³V — Software Agency",
  description: "We build software that moves. C³V is a forward-thinking software agency delivering web, mobile, and AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
