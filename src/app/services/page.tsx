import React from "react";
import Link from "next/link";
import {
  Plane,
  Ship,
  FileCheck,
  Warehouse,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Logistics Services | DAC Pacific - Dhaka Freight Forwarding",
  description: "Comprehensive freight solutions including Air Freight, Ocean Container (FCL/LCL), Customs Brokerage, and Inland Warehousing in Bangladesh.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Plane":
        return <Plane className="w-8 h-8 text-crimson" />;
      case "Ship":
        return <Ship className="w-8 h-8 text-crimson" />;
      case "FileCheck":
        return <FileCheck className="w-8 h-8 text-crimson" />;
      case "Warehouse":
        return <Warehouse className="w-8 h-8 text-crimson" />;
      default:
        return <Plane className="w-8 h-8 text-crimson" />;
    }
  };

  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <section className="bg-navy py-16 sm:py-20 text-white relative overflow-hidden border-b border-navy-light/40">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
              Freight Solutions & Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Logistics Services
            </h1>
            <p className="text-base sm:text-lg text-slate-soft leading-relaxed">
              Tailored air, ocean, customs, and multimodal supply chain services engineered for reliable cargo movement from Bangladesh to global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Jump Navigation */}
      <div className="bg-surface-light border-b border-surface-border sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 overflow-x-auto text-xs sm:text-sm font-semibold whitespace-nowrap">
            <span className="text-slate-muted mr-2">Jump to:</span>
            {servicesData.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="px-3 py-1.5 rounded-full bg-white border border-surface-border hover:border-crimson hover:text-crimson text-navy transition-colors shadow-2xs"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Services Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {servicesData.map((service, index) => {
          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-36 border border-surface-border rounded-2xl p-6 sm:p-10 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left/Main Column */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-crimson-light flex items-center justify-center shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-crimson">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="bg-surface-light border border-surface-border rounded-xl p-5 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                      Key Highlights & Advantages
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-navy">
                      Capabilities & Scope of Work
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
                      {service.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-marine mt-2 shrink-0"></span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Summary Column with Real Service Image */}
                <div className="lg:col-span-4 bg-surface-light border border-surface-border rounded-xl p-6 space-y-6">
                  <div className="rounded-lg overflow-hidden h-40 border border-surface-border relative shadow-xs">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white uppercase tracking-wider">
                      {service.title} Gateway
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                      Trade Lane Coverage
                    </h4>
                    <div className="space-y-2">
                      {service.scopeCoverage.map((lane, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Globe2 className="w-3.5 h-3.5 text-crimson mt-0.5 shrink-0" />
                          <span>{lane}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-surface-border pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Direct Operational Coordination</span>
                    </div>
                    <Link
                      href={`/contact?service=${service.id}#inquiry`}
                      className="block text-center w-full bg-crimson hover:bg-crimson-hover text-white font-bold text-sm py-3 rounded-md shadow-sm transition-colors"
                    >
                      REQUEST RATE FOR THIS SERVICE
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Conversion Strip */}
      <section className="bg-navy-dark text-white py-14 border-t border-navy-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Need a Custom Multimodal Logistics Strategy?</h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Our Dhaka freight specialists can configure multi-vendor consolidation, sea-air transit, or specialized project cargo solutions tailored to your shipment deadlines.
          </p>
          <div className="pt-2">
            <Link
              href="/contact#inquiry"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-hover text-white font-bold text-sm px-6 py-3 rounded-md shadow-md transition-colors"
            >
              <span>INQUIRE WITH OUR SPECIALISTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
