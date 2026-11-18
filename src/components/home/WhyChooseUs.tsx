import React from "react";
import { Shield, Zap, Globe2, Headphones, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "Extensive Carrier Contracts",
      desc: "Contracted tier-1 rate tiers with major global airlines and ocean shipping lines providing priority bookings even during constrained peak export quarters.",
      icon: <Globe2 className="w-6 h-6 text-crimson" />,
    },
    {
      title: "Speedy Customs Clearance",
      desc: "Licensed customs brokers operating on ASYCUDA World at Dhaka airport and Chittagong port, ensuring proper classification and rapid consignment release.",
      icon: <Zap className="w-6 h-6 text-crimson" />,
    },
    {
      title: "Strict Cargo Security",
      desc: "Round-the-clock physical and electronic monitoring across bonded CFS warehousing facilities, container stuffing terminals, and inland transit routes.",
      icon: <Shield className="w-6 h-6 text-crimson" />,
    },
    {
      title: "Dedicated Account Support",
      desc: "Direct single-point-of-contact logistics managers in Dhaka coordinating shipment schedules, status updates, and customized documentation requirements.",
      icon: <Headphones className="w-6 h-6 text-crimson" />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
            Competitive Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            WHY PARTNER WITH DAC PACIFIC?
          </h2>
          <div className="w-16 h-1 bg-crimson mx-auto rounded-full"></div>
          <p className="text-slate-muted text-base">
            We provide dependable, end-to-end supply chain execution that mitigates shipping delays, simplifies documentation, and ensures predictable freight pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-light border border-surface-border rounded-xl p-6 hover:border-slate-marine/30 transition-all space-y-4 hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-lg bg-white border border-surface-border flex items-center justify-center shadow-xs">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-navy">{item.title}</h3>
              <p className="text-sm text-slate-muted leading-relaxed">{item.desc}</p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-marine">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Operational Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
