import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Globe, Clock } from "lucide-react";
import { companyInfo } from "@/data/company-info";

export default function ExecutiveWelcome() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
                Welcome to DAC Pacific
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                WE PROVIDE FASTEST & AFFORDABLE CARGO SERVICES
              </h2>
              <div className="w-16 h-1 bg-crimson rounded-full"></div>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              DAC Pacific (Dhaka Logistics Division) operates as an established, full-service international freight forwarder and multimodal logistics provider based in Bangladesh. We bridge manufacturers, exporters, and multinational trading corporations with primary global consuming markets across North America, Europe, Asia, and the Middle East.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              With deep expertise in Bangladesh Ready-Made Garments (RMG), textiles, pharmaceuticals, and perishable goods export procedures, we ensure hassle-free customs clearance, space protection during peak shipping cycles, and continuous cargo visibility from factory departure to destination port arrival.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                <span className="text-sm font-semibold text-navy">
                  Hazrat Shahjalal Airport (DAC) Dedicated Clearance
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-crimson mt-0.5 shrink-0" />
                <span className="text-sm font-semibold text-navy">
                  Chittagong Port Feeder & Liner Contracts
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
                  Bonded CFS Warehousing & Trailer Fleet
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-navy hover:bg-slate-marine text-white font-bold text-sm px-6 py-3 rounded-md transition-colors shadow-sm"
              >
                <span>Read Corporate Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-crimson hover:text-crimson-hover font-bold text-sm px-4 py-3"
              >
                <span>Speak to Dhaka Office</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Image & Operations Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Crawled Benchmark Welcome Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-surface-border group">
              <img
                src="/images/armach/welcome-img.jpg"
                alt="DAC Pacific Cargo Operations"
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold tracking-widest text-crimson uppercase block">
                  Ground Operations
                </span>
                <h4 className="text-base font-extrabold text-white">
                  Cargo Handling & Dispatch Excellence
                </h4>
              </div>
            </div>

            <div className="bg-surface-light border border-surface-border rounded-xl p-6 shadow-sm space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase">International Reach</h4>
                    <p className="text-xs text-slate-muted">Connected to 120+ global partner destinations worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-crimson/10 text-crimson flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase">Customs Compliance</h4>
                    <p className="text-xs text-slate-muted">Full compliance under Bangladesh NBR ASYCUDA World</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase">Dispatch Reliability</h4>
                    <p className="text-xs text-slate-muted">Guaranteed booking confirmations within 4 business hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3.5 border border-surface-border text-center">
                <span className="text-[11px] text-slate-muted block">Direct Operations Desk</span>
                <span className="text-sm font-extrabold text-navy block mt-0.5">
                  {companyInfo.phoneDisplay}
                </span>
                <span className="text-xs text-crimson font-medium block mt-0.5">
                  {companyInfo.inquiryEmail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
