export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  highlights: string[];
  keyFeatures: string[];
  scopeCoverage: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "air-freight",
    title: "Air Freight Forwarding",
    shortDescription: "Time-critical and scheduled international air cargo solutions connecting Dhaka to major global airports.",
    fullDescription: "DAC Pacific Dhaka division delivers fast, dependable air freight forwarding services engineered for high-value and urgent cargo. Operating out of Hazrat Shahjalal International Airport (DAC), we manage consolidations, direct airline charters, priority space allocation, and door-to-door transit for garments, pharmaceuticals, electronics, and perishables.",
    icon: "Plane",
    image: "/images/armach/air-freight-banner.jpg",
    highlights: [
      "Direct carrier contracts with leading airlines",
      "Priority space allocations during peak export seasons",
      "Express consolidation and direct master AWB options",
      "Real-time dispatch coordination from Dhaka airport",
    ],
    keyFeatures: [
      "Airport to Airport and Door to Door delivery",
      "Full and Part Air Cargo Chartering",
      "Hazardous Materials and Dangerous Goods handling",
      "Temperature-sensitive cold chain logistics",
      "Consolidation services for smaller consignments",
      "Full export documentation and consular legalization",
    ],
    scopeCoverage: [
      "North America East and West Coast Hubs",
      "European Union Central Gateways (FRA, AMS, LHR)",
      "Middle East Transshipment Hubs (DXB, DOH)",
      "Asia Pacific and Far East trade lanes",
    ],
  },
  {
    id: "ocean-freight",
    title: "Ocean Freight (FCL / LCL)",
    shortDescription: "Cost-effective containerized ocean logistics connecting Chittagong and Mongla ports to international shipping lanes.",
    fullDescription: "Our ocean freight solutions offer complete flexibility for full container load (FCL) and less than container load (LCL) consignments. Backed by volume agreements with global container liners, DAC Pacific provides stable sailing schedules, competitive freight rates, and seamless feeder connections between Chittagong and major transshipment ports.",
    icon: "Ship",
    image: "/images/armach/ocean-banner.jpg",
    highlights: [
      "Reliable feeder vessel connectivity from Chittagong",
      "Dedicated LCL consolidation box programs",
      "Standard 20ft, 40ft, 40ft HC, and special equipment",
      "Port-to-port and multimodal door delivery",
    ],
    keyFeatures: [
      "Full Container Load (FCL) operations",
      "Less than Container Load (LCL) groupage services",
      "Reefer container logistics for temperature-controlled goods",
      "Out of Gauge (OOG) and breakbulk project cargo",
      "Buyer consolidation and multi-vendor sorting",
      "Bill of Lading issuance and bank documentation support",
    ],
    scopeCoverage: [
      "Transpacific lanes to United States and Canada",
      "Direct services to Northern Europe and Mediterranean",
      "Intra-Asia and Southeast Asia regional routes",
      "Latin America and Africa transshipment lanes",
    ],
  },
  {
    id: "customs-brokerage",
    title: "Customs Brokerage & Clearance",
    shortDescription: "Expert regulatory compliance, tariff classification, and speedy customs clearance across Bangladesh ports.",
    fullDescription: "Navigating Bangladesh customs regulations requires deep institutional knowledge and rigorous compliance standards. Our licensed customs brokerage specialists handle clearance procedures at Dhaka Airport (DAC), Chittagong Sea Port (CTG), Kamalapur ICD, and Mongla Port, ensuring accurate HS code classification and timely release of export and import cargo.",
    icon: "FileCheck",
    image: "/images/armach/container-banner.jpg",
    highlights: [
      "Licensed customs clearance at all major Bangladesh customs houses",
      "Zero-delay documentation filing and assessment",
      "Specialized expertise in Ready-Made Garment (RMG) regulations",
      "Full compliance with National Board of Revenue (NBR) rules",
    ],
    keyFeatures: [
      "Import and Export declaration filing via ASYCUDA World",
      "Harmonized System (HS) code classification guidance",
      "Duty and tax payment facilitation",
      "Export Processing Zone (EPZ) and bonded warehouse clearance",
      "Temporary import/export and ATA Carnet processing",
      "Phytosanitary, BSTI, and regulatory permit coordination",
    ],
    scopeCoverage: [
      "Hazrat Shahjalal International Airport Customs House, Dhaka",
      "Chittagong Port Customs House",
      "Kamalapur Inland Container Depot (ICD), Dhaka",
      "Dhaka EPZ and Chittagong EPZ customs points",
    ],
  },
  {
    id: "warehousing-inland",
    title: "Warehousing & Inland Transport",
    shortDescription: "Secure container storage, cross-docking, and dedicated nationwide trucking networks across Bangladesh.",
    fullDescription: "DAC Pacific bridges factory floors and transit gateways with modern warehousing facilities and heavy transport fleets. From covered container freight stations (CFS) to GPS-monitored trailer fleets, we manage cargo storage, sorting, palletization, and inland transit between industrial belts like Gazipur, Narayanganj, Savar, and shipping terminals.",
    icon: "Warehouse",
    image: "/images/armach/warehousing-banner.jpg",
    highlights: [
      "Dedicated and shared warehousing with 24/7 security",
      "GPS-tracked container trailers and covered vans",
      "Strategic proximity to major export manufacturing zones",
      "Rapid loading, offloading, and container stuffing",
    ],
    keyFeatures: [
      "Short-term buffer storage and long-term warehousing",
      "Container Freight Station (CFS) stuffing and de-stuffing",
      "Cargo palletization, shrink-wrapping, and labeling",
      "Fleet of prime movers, 20ft/40ft trailers, and covered trucks",
      "Intermodal transport coordination between road and rail",
      "Inventory management and pick-and-pack dispatch",
    ],
    scopeCoverage: [
      "Dhaka, Gazipur, Savar, Narayanganj industrial corridors",
      "Dhaka to Chittagong highway cargo transit",
      "Inland Container Depot (ICD) shuttle services",
      "Factory pick-up and direct airport/seaport transfer",
    ],
  },
];
