import React from "react";
import Link from "next/link";
import {
  Compass,
  Target,
  Shield,
  Globe2,
  CheckCircle2,
  Building,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "@/data/company-info";

export const metadata = {
  title: "About Us | DAC Pacific - Dhaka Logistics Division",
  description: "Company overview, vision, mission, core values, and international freight forwarding network of DAC Pacific Dhaka division.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header Banner */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-navy-light/40">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
              Corporate Profile & Network
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              About DAC Pacific
            </h1>
            <p className="text-base sm:text-lg text-slate-soft leading-relaxed">
              Serving as a reliable gateway between Bangladesh manufacturing hubs and international consuming markets through disciplined freight forwarding execution.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Corporate Overview */}
      <section id="overview" className="py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
                  Company Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Strategic Freight Forwarding From Dhaka, Bangladesh
                </h2>
                <div className="w-14 h-1 bg-crimson rounded-full"></div>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                DAC Pacific (Dhaka Logistics Division) was established with a singular focus: to provide exporters, importers, and international forwarders with a dependable, transparent logistics partner based directly in Bangladesh.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Headquartered in Dhaka in close proximity to Hazrat Shahjalal International Airport (DAC), our operational division coordinates air cargo dispatches, ocean container shipments via Chittagong port, bonded CFS warehousing, and full-scale customs brokerage. We understand the high-stakes requirements of Ready-Made Garments (RMG), knitwear, leather, and consumer goods supply chains where meeting sailing dates and flight departures is non-negotiable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-navy">
                    Specialized RMG & Fast Fashion Air Consolidations
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-navy">
                    Direct Feeder Connections via Chittagong Port
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-navy">
                    Licensed ASYCUDA Customs Brokers
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-navy">
                    Transparent Rate Structures & No Hidden Fees
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-surface-light border border-surface-border rounded-xl p-8 shadow-sm space-y-6">
                <div className="rounded-lg overflow-hidden h-40 border border-surface-border relative shadow-xs">
                  <img
                    src="/images/armach/container-banner.jpg"
                    alt="DAC Pacific Dhaka Logistics Operations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent"></div>
                  <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white uppercase tracking-wider">
                    Dhaka Division Operations Gateway
                  </span>
                </div>

                <div className="flex items-center gap-3 border-b border-surface-border pb-4">
                  <Building className="w-8 h-8 text-crimson" />
                  <div>
                    <h3 className="text-lg font-bold text-navy">Dhaka Division Credentials</h3>
                    <p className="text-xs text-slate-muted">Operational center parameters</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex justify-between py-1.5 border-b border-surface-border">
                    <span className="font-semibold text-navy">Operational Hub</span>
                    <span>Uttara, Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-border">
                    <span className="font-semibold text-navy">Airport Proximity</span>
                    <span>10 Mins from DAC Cargo Terminal</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-border">
                    <span className="font-semibold text-navy">Sea Port Gateway</span>
                    <span>Chittagong Port & Mongla Port</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-surface-border">
                    <span className="font-semibold text-navy">Customs Clearance</span>
                    <span>Airport, Seaport & Kamalapur ICD</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold text-navy">Operations Desk</span>
                    <span className="text-crimson font-bold">{companyInfo.phoneDisplay}</span>
                  </div>
                </div>

                <Link
                  href="/contact#inquiry"
                  className="block text-center w-full bg-crimson hover:bg-crimson-hover text-white font-bold text-sm py-3 rounded-md shadow-sm transition-colors"
                >
                  CONTACT DHAKA OFFICE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision and Mission */}
      <section id="vision" className="py-20 bg-surface-light border-y border-surface-border scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
              Strategic Direction
            </span>
            <h2 className="text-3xl font-extrabold text-navy">
              OUR VISION & MISSION
            </h2>
            <div className="w-14 h-1 bg-crimson mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white border border-surface-border rounded-xl p-8 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                <Compass className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy">Our Vision</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To be the logistics partner of choice for Bangladesh international commerce, recognized globally for operational agility, uncompromising cargo integrity, and tech-enabled supply chain transparency.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                  <span>Benchmark standards in Bangladesh cargo forwarding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                  <span>Expanding multimodal connectivity across Southeast Asia</span>
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="bg-white border border-surface-border rounded-xl p-8 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-lg bg-crimson/10 text-crimson flex items-center justify-center">
                <Target className="w-6 h-6 text-crimson" />
              </div>
              <h3 className="text-xl font-bold text-navy">Our Mission</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                To empower our commercial clients with reliable freight schedules, cost-optimized transport routes, and flawless customs brokerage, eliminating operational bottlenecks so their businesses can trade with confidence.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                  <span>Deliver 100 percent on-time booking confirmations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-crimson shrink-0" />
                  <span>Ensure zero regulatory demurrage through proactive customs management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section id="values" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
              Operational Principles
            </span>
            <h2 className="text-3xl font-extrabold text-navy">
              OUR CORE VALUES
            </h2>
            <div className="w-14 h-1 bg-crimson mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-surface-light border border-surface-border rounded-xl p-6 space-y-3"
              >
                <div className="w-10 h-10 rounded-md bg-white border border-surface-border flex items-center justify-center shadow-xs">
                  <Shield className="w-5 h-5 text-crimson" />
                </div>
                <h3 className="text-base font-bold text-navy">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global Network */}
      <section id="network" className="py-20 bg-navy text-white border-t border-navy-light/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
                Worldwide Forwarding Connections
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                INTERNATIONAL FREIGHT FORWARDING NETWORK
              </h2>
              <p className="text-base text-slate-soft leading-relaxed">
                As part of an established international logistics alliance, DAC Pacific provides frictionless cargo handover across 120+ ports and airports worldwide. We collaborate with accredited agents in key trading partner regions.
              </p>

              <div className="space-y-3 text-sm text-slate-soft">
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-crimson shrink-0" />
                  <span>North America: New York, Los Angeles, Chicago, Toronto, Vancouver</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-crimson shrink-0" />
                  <span>Europe: Frankfurt, London Heathrow, Rotterdam, Hamburg, Milan</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-crimson shrink-0" />
                  <span>Middle East: Dubai (DXB/DWC), Doha, Riyadh, Jeddah</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe2 className="w-5 h-5 text-crimson shrink-0" />
                  <span>Asia-Pacific: Singapore, Hong Kong, Shanghai, Tokyo, Bangkok</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact#inquiry"
                  className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-hover text-white font-bold text-sm px-6 py-3.5 rounded-md shadow-md transition-colors"
                >
                  <span>INQUIRE ABOUT GLOBAL ROUTING</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-navy-dark/80 border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                  Network Operational Pillars
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
                    <span className="text-2xl font-black text-crimson">120+</span>
                    <h4 className="text-xs font-bold text-white uppercase">Destinations</h4>
                    <p className="text-xs text-slate-400">Direct & transshipment links</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
                    <span className="text-2xl font-black text-crimson">45+</span>
                    <h4 className="text-xs font-bold text-white uppercase">Carrier Alliances</h4>
                    <p className="text-xs text-slate-400">Airlines and ocean liners</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
                    <span className="text-2xl font-black text-crimson">24/7</span>
                    <h4 className="text-xs font-bold text-white uppercase">Dispatch Control</h4>
                    <p className="text-xs text-slate-400">Flight & sailing monitoring</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 space-y-1">
                    <span className="text-2xl font-black text-crimson">100%</span>
                    <h4 className="text-xs font-bold text-white uppercase">Compliance</h4>
                    <p className="text-xs text-slate-400">ASYCUDA World certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
