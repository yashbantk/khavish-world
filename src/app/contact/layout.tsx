import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Khavish World",
  description: "Get in touch with Khavish World for personalized travel planning. Contact our travel experts for custom packages and 24/7 support.",
  keywords: "contact us, travel planning, customer service, travel experts, support, booking",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

