"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ExternalLink,
  Ship,
  Plane,
  Truck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { carriersList, Carrier } from "@/data/tracking-carriers";

export default function TrackingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"all" | "ocean" | "air" | "courier">("all");

  const filteredCarriers = useMemo(() => {
    return carriersList.filter((carrier) => {
      const matchesCategory =
        selectedCategory === "all" || carrier.category === selectedCategory;
      const matchesSearch =
        carrier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        carrier.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        carrier.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryBadge = (category: Carrier["category"]) => {
    switch (category) {
      case "ocean":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Ship className="w-3 h-3" />
            <span>Shipping Line</span>
          </span>
        );
      case "air":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Plane className="w-3 h-3" />
            <span>Airline Cargo</span>
          </span>
        );
      case "courier":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Truck className="w-3 h-3" />
            <span>Express Courier</span>
          </span>
        );
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
              Quick Reference Portal
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Carrier Track & Trace Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-soft leading-relaxed">
              Instant access to official container tracking, airline air waybill (AWB) status, and express courier portals for DAC Pacific clients.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Strip */}
      <div className="bg-surface-light border-b border-surface-border sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by carrier name (e.g. Maersk, Emirates, MSC)..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-muted hover:text-navy"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === "all"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-white text-navy border border-surface-border hover:bg-slate-soft"
                }`}
              >
                All Carriers ({carriersList.length})
              </button>
              <button
                onClick={() => setSelectedCategory("ocean")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === "ocean"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-white text-navy border border-surface-border hover:bg-slate-soft"
                }`}
              >
                <Ship className="w-3.5 h-3.5" />
                <span>Shipping Lines</span>
              </button>
              <button
                onClick={() => setSelectedCategory("air")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === "air"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-white text-navy border border-surface-border hover:bg-slate-soft"
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>Airline Cargo</span>
              </button>
              <button
                onClick={() => setSelectedCategory("courier")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === "courier"
                    ? "bg-navy text-white shadow-xs"
                    : "bg-white text-navy border border-surface-border hover:bg-slate-soft"
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Couriers</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Directory Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {filteredCarriers.length === 0 ? (
          <div className="text-center py-16 bg-surface-light rounded-xl border border-surface-border space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-muted mx-auto" />
            <h3 className="text-base font-bold text-navy">No carrier found matching &quot;{searchQuery}&quot;</h3>
            <p className="text-xs text-slate-muted">Try adjusting your search query or reset the filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs font-bold text-crimson hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCarriers.map((carrier) => (
              <div
                key={carrier.id}
                className="bg-white border border-surface-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-slate-marine/30 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    {getCategoryBadge(carrier.category)}
                    <span className="text-[11px] font-mono font-bold text-slate-muted bg-surface-light px-2 py-0.5 rounded">
                      CODE: {carrier.code}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-navy group-hover:text-crimson transition-colors">
                      {carrier.name}
                    </h3>
                    <p className="text-xs text-slate-muted leading-relaxed mt-1">
                      {carrier.description}
                    </p>
                  </div>

                  <div className="bg-surface-light rounded-lg p-3 border border-surface-border">
                    <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                      Number Format Reference:
                    </span>
                    <span className="text-xs font-medium text-navy block mt-0.5">
                      {carrier.formatGuide}
                    </span>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-surface-border">
                  <a
                    href={carrier.trackingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-navy hover:bg-slate-marine text-white font-bold text-xs py-2.5 px-4 rounded-md transition-all flex items-center justify-center gap-2 group-hover:bg-crimson"
                  >
                    <span>TRACK ON OFFICIAL PORTAL</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Disclaimer Notice */}
        <div className="mt-14 bg-amber-50/60 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div className="space-y-1 text-xs text-amber-900 leading-relaxed">
            <span className="font-bold block text-sm text-amber-950">
              Carrier Tracking Portal Notice
            </span>
            <p>
              The tracking links above redirect to external portals operated independently by the respective shipping lines, airlines, and courier organizations. DAC Pacific provides this quick-reference directory for the convenience of our clients. For customized milestone reporting or local Chittagong port / Dhaka airport handling assistance, please contact your designated DAC Pacific operations coordinator directly at{" "}
              <a href="mailto:dinesh@dacpacific.com" className="font-bold underline text-amber-950">
                dinesh@dacpacific.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
