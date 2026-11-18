import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DAC Pacific | Dhaka Logistics Division - International Freight Forwarding",
  description: "Modern freight forwarding and supply chain solutions in Dhaka, Bangladesh. Air freight, ocean container logistics (FCL/LCL), licensed customs brokerage, and inland warehousing.",
  keywords: [
    "DAC Pacific",
    "Dhaka Logistics",
    "Bangladesh Freight Forwarder",
    "Air Cargo Dhaka DAC",
    "Ocean Freight Chittagong",
    "Customs Brokerage Dhaka",
    "Armach benchmark logistics",
    "dacpacifichk.com",
  ],
  metadataBase: new URL("https://dacpacifichk.com"),
  openGraph: {
    title: "DAC Pacific | Dhaka Logistics Division",
    description: "International freight logistics, air cargo, ocean shipping, customs clearance, and inland transport.",
    url: "https://dacpacifichk.com",
    siteName: "DAC Pacific Dhaka Logistics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-surface-light text-navy antialiased">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
