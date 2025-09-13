import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khavish World - Premium Travel Experiences",
  description: "Discover the world with Khavish World. Luxury travel packages, premium accommodations, and unforgettable experiences across the globe.",
  keywords: "travel, luxury, premium, vacation, destinations, packages, booking",
  authors: [{ name: "Khavish World" }],
  openGraph: {
    title: "Khavish World - Premium Travel Experiences",
    description: "Discover the world with Khavish World. Luxury travel packages, premium accommodations, and unforgettable experiences across the globe.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
