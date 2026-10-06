import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/common/SmoothScrollProvider";
import { CustomCursor } from "@/components/common/CustomCursor";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { generateJsonLd } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agrovia.au"),
  title: "Agrovia Consulting — Your Crop Comes First | North Queensland Agronomy",
  description:
    "Independent agronomy consulting and agricultural research/field-trial capability servicing growers across Bowen and Burdekin, North Queensland.",
  keywords: [
    "Agronomist North Queensland",
    "Agronomist Bowen",
    "Agronomist Burdekin",
    "Crop consulting Queensland",
    "Agricultural research Queensland",
    "Field trials North Queensland",
    "Agrovia Consulting",
  ],
  authors: [{ name: "Agrovia Consulting" }],
  openGraph: {
    title: "Agrovia Consulting — Your Crop Comes First",
    description:
      "Independent agronomy and agricultural research supporting growers across North Queensland.",
    url: "https://agrovia.au",
    siteName: "Agrovia Consulting",
    locale: "en_AU",
    type: "website",
  },
  alternates: {
    canonical: "https://agrovia.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="antialiased font-sans bg-[#0a110c] text-[#e2e8e4]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
