"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Plane,
  Ship,
  FileCheck,
  Warehouse,
  ExternalLink,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { companyInfo } from "@/data/company-info";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full bg-white border-b border-surface-border sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-navy text-white text-xs py-2 px-4 border-b border-navy-light/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6 text-slate-soft">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-crimson" />
              <span>{companyInfo.businessHours.days}: {companyInfo.businessHours.hours}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Dhaka Division Operations Active</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-soft hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-crimson" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <span className="text-navy-light">|</span>
            <a
              href={`mailto:${companyInfo.inquiryEmail}`}
              className="flex items-center gap-1.5 text-slate-soft hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-crimson" />
              <span>{companyInfo.inquiryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <Link href="/" className="hover:opacity-95 transition-opacity">
            <Logo variant="dark" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                isActive("/")
                  ? "text-crimson bg-crimson-light"
                  : "text-navy hover:text-crimson hover:bg-surface-light"
              }`}
            >
              HOME
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link
                href="/about"
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1 ${
                  isActive("/about")
                    ? "text-crimson bg-crimson-light"
                    : "text-navy hover:text-crimson hover:bg-surface-light"
                }`}
              >
                ABOUT US
                <ChevronDown className="w-4 h-4" />
              </Link>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-surface-border rounded-lg shadow-xl py-2 mt-0">
                  <Link
                    href="/about#overview"
                    className="block px-4 py-2 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    Corporate Overview
                  </Link>
                  <Link
                    href="/about#vision"
                    className="block px-4 py-2 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/about#values"
                    className="block px-4 py-2 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    Core Values
                  </Link>
                  <Link
                    href="/about#network"
                    className="block px-4 py-2 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    Global Forwarding Network
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1 ${
                  isActive("/services")
                    ? "text-crimson bg-crimson-light"
                    : "text-navy hover:text-crimson hover:bg-surface-light"
                }`}
              >
                SERVICES
                <ChevronDown className="w-4 h-4" />
              </Link>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-surface-border rounded-lg shadow-xl py-2 mt-0">
                  <Link
                    href="/services#air-freight"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    <Plane className="w-4 h-4 text-crimson" />
                    <span>Air Freight Forwarding</span>
                  </Link>
                  <Link
                    href="/services#ocean-freight"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    <Ship className="w-4 h-4 text-crimson" />
                    <span>Ocean Freight (FCL / LCL)</span>
                  </Link>
                  <Link
                    href="/services#customs-brokerage"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    <FileCheck className="w-4 h-4 text-crimson" />
                    <span>Customs Brokerage</span>
                  </Link>
                  <Link
                    href="/services#warehousing-inland"
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-navy hover:bg-surface-light hover:text-crimson font-medium"
                  >
                    <Warehouse className="w-4 h-4 text-crimson" />
                    <span>Warehousing & Inland Transport</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/tracking"
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors flex items-center gap-1 ${
                isActive("/tracking")
                  ? "text-crimson bg-crimson-light"
                  : "text-navy hover:text-crimson hover:bg-surface-light"
              }`}
            >
              TRACK & TRACE
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                isActive("/contact")
                  ? "text-crimson bg-crimson-light"
                  : "text-navy hover:text-crimson hover:bg-surface-light"
              }`}
            >
              CONTACT US
            </Link>
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact#inquiry"
              className="bg-crimson hover:bg-crimson-hover text-white text-sm font-bold px-5 py-2.5 rounded-md shadow-md transition-all hover:shadow-lg transform active:scale-95"
            >
              ENQUIRY NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="p-2 text-navy hover:text-crimson rounded-md border border-surface-border"
              title="Call Dhaka Office"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy hover:text-crimson rounded-md border border-surface-border"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-surface-border px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md font-semibold text-base ${
              isActive("/") ? "bg-crimson-light text-crimson" : "text-navy hover:bg-surface-light"
            }`}
          >
            Home
          </Link>

          <div>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-semibold text-base ${
                isActive("/about") ? "bg-crimson-light text-crimson" : "text-navy hover:bg-surface-light"
              }`}
            >
              About Us
            </Link>
            <div className="pl-6 space-y-1 mt-1 border-l-2 border-surface-border ml-3">
              <Link
                href="/about#overview"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Overview
              </Link>
              <Link
                href="/about#vision"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Vision & Mission
              </Link>
              <Link
                href="/about#values"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Core Values
              </Link>
              <Link
                href="/about#network"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Global Network
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-semibold text-base ${
                isActive("/services") ? "bg-crimson-light text-crimson" : "text-navy hover:bg-surface-light"
              }`}
            >
              Services
            </Link>
            <div className="pl-6 space-y-1 mt-1 border-l-2 border-surface-border ml-3">
              <Link
                href="/services#air-freight"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Air Freight Forwarding
              </Link>
              <Link
                href="/services#ocean-freight"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Ocean Freight (FCL/LCL)
              </Link>
              <Link
                href="/services#customs-brokerage"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Customs Brokerage
              </Link>
              <Link
                href="/services#warehousing-inland"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-sm text-navy hover:text-crimson"
              >
                Warehousing & Inland Transport
              </Link>
            </div>
          </div>

          <Link
            href="/tracking"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md font-semibold text-base ${
              isActive("/tracking") ? "bg-crimson-light text-crimson" : "text-navy hover:bg-surface-light"
            }`}
          >
            Track & Trace Directory
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md font-semibold text-base ${
              isActive("/contact") ? "bg-crimson-light text-crimson" : "text-navy hover:bg-surface-light"
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-3 border-t border-surface-border">
            <Link
              href="/contact#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-crimson hover:bg-crimson-hover text-white font-bold py-3 rounded-md shadow-md"
            >
              ENQUIRY NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
