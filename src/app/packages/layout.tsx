import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Packages - Khavish World",
  description: "Discover our curated travel packages designed for luxury and adventure. From European tours to tropical getaways, find your perfect vacation.",
  keywords: "travel packages, vacation deals, luxury travel, tour packages, holiday packages",
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

