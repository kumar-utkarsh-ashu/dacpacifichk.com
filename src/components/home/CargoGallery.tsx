import React from "react";

export default function CargoGallery() {
  const gallery = [
    { title: "Air Cargo Terminal", image: "/images/armach/gallery01.png" },
    { title: "Ocean Container Yard", image: "/images/armach/gallery02.png" },
    { title: "Bonded CFS Warehouse", image: "/images/armach/gallery03.png" },
    { title: "Intermodal Trucking Fleet", image: "/images/armach/gallery04.png" },
    { title: "Cold Chain Storage", image: "/images/armach/gallery05.png" },
    { title: "Port Clearance Operations", image: "/images/armach/gallery06.png" },
  ];

  return (
    <section className="py-20 bg-surface-light border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
            Operational Field Showcase
          </span>
          <h2 className="text-3xl font-extrabold text-navy">
            LOGISTICS IN ACTION
          </h2>
          <div className="w-16 h-1 bg-crimson mx-auto rounded-full"></div>
          <p className="text-slate-muted text-sm leading-relaxed">
            Everyday freight handling, airport palletization, sea container dispatch, and bonded storage across Bangladesh trade hubs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden border border-surface-border shadow-xs hover:shadow-md transition-all bg-white"
            >
              <div className="h-36 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-2.5 bg-white text-center">
                <span className="text-[11px] font-bold text-navy group-hover:text-crimson transition-colors block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
