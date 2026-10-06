import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeroHeader } from "@/components/common/PageHeroHeader";

export const metadata: Metadata = {
  title: "Contact Agrovia Consulting — Bowen & Burdekin Agronomy",
  description:
    "Direct field enquiry channel for commercial growers and trial sponsors across North Queensland. Dispatches directly to dev.p@agrovia.au.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0a110c]">
      {/* Cinematic Hero with Golden Hour Wheat & Crop Field Background (Matching Uploaded Image) */}
      <PageHeroHeader
        categoryTag="DIRECT FIELD DISPATCH"
        title="Let’s Talk About"
        highlightedTitle="Your Crop."
        description="Whether you need independent commercial crop scouting in Bowen, rotation nutrition in the Burdekin, or contract field trial capability across Queensland, reach out directly."
        bgImageUrl="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
        badgeText="DISPATCH TO DEV.P@AGROVIA.AU"
        coordinates="20.0137° S, 148.2476° E"
        primaryCtaText="Send Direct Note Below"
        primaryCtaHref="#contact"
        secondaryCtaText="Direct Phone & Email"
        secondaryCtaHref="#contact"
      />

      <ContactForm />
    </div>
  );
}
