import React from "react";

export default function PartnerLogos() {
  const partners = [
    { name: "Global Shipping Partner 01", image: "/images/armach/partner_logo01.jpg" },
    { name: "Global Shipping Partner 02", image: "/images/armach/partner_logo02.jpg" },
    { name: "Global Shipping Partner 03", image: "/images/armach/partner_logo03.jpg" },
    { name: "Global Shipping Partner 04", image: "/images/armach/partner_logo04.jpg" },
  ];

  return (
    <section className="py-14 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-muted block">
          Trusted Carrier Alliances & Interline Partners
        </span>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-opacity">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="p-3 bg-surface-light rounded-lg border border-surface-border/80 shadow-2xs hover:shadow-xs transition-shadow flex items-center justify-center h-16 w-36"
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
