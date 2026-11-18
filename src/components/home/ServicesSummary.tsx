import React from "react";
import Link from "next/link";
import { Plane, Ship, FileCheck, Warehouse, ArrowRight, Check } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesSummary() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Plane":
        return <Plane className="w-5 h-5 text-white" />;
      case "Ship":
        return <Ship className="w-5 h-5 text-white" />;
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-white" />;
      case "Warehouse":
        return <Warehouse className="w-5 h-5 text-white" />;
      default:
        return <Plane className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-20 bg-surface-light border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
            Our Logistics Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            OUR CORE FREIGHT SERVICES
          </h2>
          <div className="w-16 h-1 bg-crimson mx-auto rounded-full"></div>
          <p className="text-slate-muted text-base leading-relaxed">
            We provide an integrated spectrum of freight forwarding and supply chain solutions tailored to support Bangladesh global import and export trade.
          </p>
        </div>

        {/* Services Grid with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-surface-border overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Real Service Image with Gradient and Icon */}
                <div className="relative h-44 w-full overflow-hidden bg-navy-dark">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-white tracking-wider uppercase drop-shadow-xs">
                      {service.title}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-crimson flex items-center justify-center shrink-0 shadow-sm">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-muted leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  <div className="border-t border-surface-border pt-3 space-y-1.5">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-crimson mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/services#${service.id}`}
                  className="w-full text-center bg-surface-light group-hover:bg-navy group-hover:text-white text-navy font-bold text-xs py-2.5 px-3 rounded-md border border-surface-border transition-all flex items-center justify-center gap-1.5"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-hover text-white text-sm font-bold px-7 py-3.5 rounded-md shadow-md transition-all hover:shadow-lg"
          >
            <span>VIEW FULL SERVICES DIRECTORY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
