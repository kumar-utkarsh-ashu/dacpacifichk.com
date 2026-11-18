import React from "react";
import Link from "next/link";
import { Phone, Search, FileText, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company-info";

export default function QuickActionStrip() {
  return (
    <div className="bg-white border-b border-surface-border shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-surface-border">
          {/* Action 1: Instant Rate Request */}
          <div className="flex items-center gap-3.5 py-2 md:py-0 md:pr-4">
            <div className="w-10 h-10 rounded-lg bg-crimson-light text-crimson flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-navy">Request a Freight Quote</h4>
              <p className="text-xs text-slate-muted">Direct routing to Dhaka logistics team</p>
            </div>
            <Link
              href="/contact#inquiry"
              className="text-xs font-bold text-crimson hover:text-crimson-hover flex items-center gap-1 shrink-0"
            >
              <span>Submit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Action 2: Direct Carrier Tracking */}
          <div className="flex items-center gap-3.5 py-2 md:py-0 md:px-4">
            <div className="w-10 h-10 rounded-lg bg-slate-soft text-slate-marine flex items-center justify-center shrink-0">
              <Search className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-navy">Track Air / Ocean Cargo</h4>
              <p className="text-xs text-slate-muted">Direct carrier portals & AWB directory</p>
            </div>
            <Link
              href="/tracking"
              className="text-xs font-bold text-slate-marine hover:text-navy flex items-center gap-1 shrink-0"
            >
              <span>Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Action 3: Dhaka Operational Support */}
          <div className="flex items-center gap-3.5 py-2 md:py-0 md:pl-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-navy">Operational Desk</h4>
              <p className="text-xs text-slate-muted">{companyInfo.phoneDisplay}</p>
            </div>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
            >
              <span>Call Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
