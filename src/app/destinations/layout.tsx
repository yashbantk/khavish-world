import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations - Khavish World",
  description: "Explore our curated collection of premium destinations around the world. From exotic beaches to cultural cities, find your perfect getaway.",
  keywords: "destinations, travel, luxury, vacation, places to visit, travel guide",
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


