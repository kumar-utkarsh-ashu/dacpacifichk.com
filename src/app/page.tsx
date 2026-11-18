import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import QuickActionStrip from "@/components/home/QuickActionStrip";
import ExecutiveWelcome from "@/components/home/ExecutiveWelcome";
import ServicesSummary from "@/components/home/ServicesSummary";
import CargoGallery from "@/components/home/CargoGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsCounter from "@/components/home/StatsCounter";
import PartnerLogos from "@/components/home/PartnerLogos";
import CallToActionBanner from "@/components/home/CallToActionBanner";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Slider with Real Benchmark Images */}
      <HeroSlider />

      {/* 2. Quick Action Strip */}
      <QuickActionStrip />

      {/* 3. Executive Welcome & Value Proposition */}
      <ExecutiveWelcome />

      {/* 4. Core Freight Services with Real Images */}
      <ServicesSummary />

      {/* 5. Cargo Gallery in Action */}
      <CargoGallery />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Key Statistics */}
      <StatsCounter />

      {/* 8. Trusted Partner Logos */}
      <PartnerLogos />

      {/* 9. Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
