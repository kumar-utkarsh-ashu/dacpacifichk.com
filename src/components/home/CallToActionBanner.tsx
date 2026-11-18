import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company-info";

export default function CallToActionBanner() {
  return (
    <section className="bg-surface-light py-16 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy via-slate-marine to-navy-dark rounded-2xl p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
              Start Shipping With DAC Pacific
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Ready to Streamline Your International Logistics?
            </h3>
            <p className="text-sm sm:text-base text-slate-soft leading-relaxed">
              Connect with our Dhaka operational team today for rate inquiries, vessel schedules, customs advisory, or dedicated freight space allocations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact#inquiry"
              className="w-full sm:w-auto text-center bg-crimson hover:bg-crimson-hover text-white font-bold text-sm px-7 py-3.5 rounded-md shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-md border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-crimson" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
