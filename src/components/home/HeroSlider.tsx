"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Plane, Ship, Truck, ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  tagline: string;
  heading: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  bgGradient: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    tagline: "INTERNATIONAL AIR CARGO SOLUTIONS",
    heading: "MAKE YOUR BUSINESS SOAR HIGH",
    description: "Scheduled and charter air freight connecting Dhaka (DAC) directly to European, North American, and Asian commercial gateways with rapid customs transit.",
    icon: <Plane className="w-8 h-8 text-crimson" />,
    image: "/images/armach/slider01.jpg",
    bgGradient: "from-navy-dark/95 via-navy/90 to-slate-marine/80",
    primaryCtaText: "EXPLORE AIR FREIGHT",
    primaryCtaLink: "/services#air-freight",
    secondaryCtaText: "REQUEST A QUOTE",
    secondaryCtaLink: "/contact#inquiry",
  },
  {
    id: 2,
    tagline: "GLOBAL CONTAINER LINER LOGISTICS",
    heading: "AN OCEAN OF POSSIBILITIES",
    description: "Cost-effective FCL and LCL containerized ocean freight from Chittagong and Mongla ports with dedicated carrier space agreements worldwide.",
    icon: <Ship className="w-8 h-8 text-crimson" />,
    image: "/images/armach/slider02.jpg",
    bgGradient: "from-[#081C33]/95 via-navy/90 to-[#184E77]/80",
    primaryCtaText: "EXPLORE OCEAN FREIGHT",
    primaryCtaLink: "/services#ocean-freight",
    secondaryCtaText: "TRACK CARRIER",
    secondaryCtaLink: "/tracking",
  },
  {
    id: 3,
    tagline: "SUPPLY CHAIN & INLAND INTEGRATION",
    heading: "WE HANDLE WITH CARE",
    description: "Secure bonded warehousing, Container Freight Station (CFS) operations, and heavy trailer fleets bridging Bangladesh industrial corridors to major ports.",
    icon: <Truck className="w-8 h-8 text-crimson" />,
    image: "/images/armach/slider03.jpg",
    bgGradient: "from-navy/95 via-[#103A63]/90 to-slate-marine/80",
    primaryCtaText: "INLAND & WAREHOUSING",
    primaryCtaLink: "/services#warehousing-inland",
    secondaryCtaText: "CONTACT DHAKA TEAM",
    secondaryCtaLink: "/contact",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden min-h-[520px] md:min-h-[580px] lg:min-h-[640px] flex items-center bg-navy-dark">
      {/* Background Image from Crawled Benchmark */}
      <div className="absolute inset-0 z-0">
        <img
          src={active.image}
          alt={active.heading}
          className="w-full h-full object-cover object-center transition-all duration-1000 transform scale-105"
        />
        {/* Dynamic Dark Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${active.bgGradient} backdrop-blur-[1px]`}></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      </div>

      {/* Slide Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest text-slate-soft uppercase">
            {active.icon}
            <span>{active.tagline}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            {active.heading}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-soft leading-relaxed max-w-2xl drop-shadow-xs">
            {active.description}
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href={active.primaryCtaLink}
              className="bg-crimson hover:bg-crimson-hover text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-md shadow-lg transition-all hover:shadow-crimson/30 flex items-center gap-2 group"
            >
              <span>{active.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href={active.secondaryCtaLink}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-md border border-white/30 backdrop-blur-sm transition-all"
            >
              {active.secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute right-4 bottom-8 sm:right-8 sm:bottom-12 z-20 flex items-center space-x-3">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 z-20 flex items-center space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide ? "w-8 bg-crimson" : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
