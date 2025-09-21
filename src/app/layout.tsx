import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://khavishworld.com"),
  title: "Khavish World - Premium Travel Experiences",
  description: "Discover the world with Khavish World. Luxury travel packages, premium accommodations, and unforgettable experiences across the globe. 7+ years of expertise in crafting perfect journeys.",
  keywords: "travel, luxury, premium, vacation, destinations, packages, booking, Khavish World, Japan tours, European tours, travel planning, custom itineraries",
  authors: [{ name: "Khavish World" }],
  creator: "Khavish World",
  publisher: "Khavish World",
  robots: "index, follow",
  openGraph: {
    title: "Khavish World - Premium Travel Experiences",
    description: "Discover the world with Khavish World. Luxury travel packages, premium accommodations, and unforgettable experiences across the globe.",
    type: "website",
    locale: "en_US",
    url: "https://khavishworld.com",
    siteName: "Khavish World",
    images: [
      {
        url: "/logokhavishtravel-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Khavish World - Premium Travel Experiences",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khavish World - Premium Travel Experiences",
    description: "Discover the world with Khavish World. Luxury travel packages and unforgettable experiences.",
    images: ["/logokhavishtravel-removebg-preview.png"],
    creator: "@khavishworld",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/logokhavishtravel-removebg-preview.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/logokhavishtravel-removebg-preview.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logokhavishtravel-removebg-preview.png",
        color: "#D4AF37",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "msapplication-TileColor": "#D4AF37",
    "msapplication-TileImage": "/logokhavishtravel-removebg-preview.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D4AF37",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logokhavishtravel-removebg-preview.png" />
        <meta name="theme-color" content="#D4AF37" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="msapplication-TileImage" content="/logokhavishtravel-removebg-preview.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
