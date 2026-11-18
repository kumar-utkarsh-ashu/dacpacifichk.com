import React from "react";
import { companyInfo } from "@/data/company-info";

export default function StatsCounter() {
  return (
    <section className="bg-navy py-16 text-white border-y border-navy-light/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {companyInfo.stats.map((stat, idx) => (
            <div key={idx} className="pt-4 lg:pt-0 px-4 space-y-2">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-crimson block tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">
                {stat.label}
              </h4>
              <p className="text-xs text-slate-300">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
