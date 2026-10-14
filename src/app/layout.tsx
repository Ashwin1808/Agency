import type { Metadata, Viewport } from "next";
import { Caveat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-hand",
});

export const metadata: Metadata = {
  title: "nexly — Design products people use",
  description:
    "nexly is a product design studio turning complex ideas into simple, meaningful digital experiences through research, design and product thinking.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} font-sans`}>
      <body className="bg-paper text-ink">
        {children}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
