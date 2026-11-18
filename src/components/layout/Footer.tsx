import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Plane,
  Ship,
  FileCheck,
  Warehouse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { companyInfo } from "@/data/company-info";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-soft border-t border-navy-light/40">
      {/* Top Banner Accent */}
      <div className="bg-crimson h-1.5 w-full"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link href="/" className="inline-block hover:opacity-95 transition-opacity">
              <Logo variant="light" />
            </Link>

            <p className="text-sm leading-relaxed text-slate-300">
              Your premier supply chain and freight forwarding gateway in Bangladesh. Providing direct air freight, ocean container logistics, licensed customs clearance, and inland transport connecting Dhaka to global trade centers.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 pt-2 border-t border-navy-light/40">
              <ShieldCheck className="w-4 h-4 text-crimson" />
              <span>Accredited International Freight Forwarding Network</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b border-navy-light pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-crimson" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-crimson" />
                  <span>About Us & Company Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about#vision"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-crimson" />
                  <span>Vision, Mission & Core Values</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-crimson" />
                  <span>Logistics Services Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tracking"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-crimson" />
                  <span>Carrier Track & Trace Portal</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-crimson" />
                  <span>Contact Dhaka Office</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Freight Solutions */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b border-navy-light pb-2 inline-block">
              Freight Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#air-freight"
                  className="flex items-start gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Plane className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Air Freight Forwarding (DAC Airport)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ocean-freight"
                  className="flex items-start gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Ship className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Ocean Freight (FCL / LCL Chittagong)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#customs-brokerage"
                  className="flex items-start gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <FileCheck className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Customs Brokerage & Clearance</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services#warehousing-inland"
                  className="flex items-start gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Warehouse className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Warehousing & Inland Transport</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Dhaka Office Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wider uppercase border-b border-navy-light pb-2 inline-block">
              Dhaka Division Office
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-crimson mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-white">{companyInfo.address.line1}</p>
                  <p>{companyInfo.address.line2}</p>
                  <p>{companyInfo.address.city} - {companyInfo.address.postalCode}, {companyInfo.address.country}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{companyInfo.address.airportDistance}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-crimson shrink-0" />
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-crimson shrink-0" />
                <a
                  href={`mailto:${companyInfo.inquiryEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.inquiryEmail}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-white">{companyInfo.businessHours.days}</p>
                  <p className="text-xs text-slate-400">{companyInfo.businessHours.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/40 border-t border-navy-light/30 py-4 px-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            Copyright 2026 DAC Pacific. All Rights Reserved. dacpacifichk.com
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <Link href="/about" className="hover:text-white transition-colors">
              About DAC Pacific
            </Link>
            <span>|</span>
            <Link href="/tracking" className="hover:text-white transition-colors">
              Carrier Tracking
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact & Inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
