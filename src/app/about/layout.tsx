import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Khavish World",
  description: "Learn about Khavish World's mission to provide premium travel experiences. Discover our story, values, and commitment to luxury travel.",
  keywords: "about us, travel company, luxury travel, mission, values, team, story",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


