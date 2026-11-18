"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  ShieldCheck,
  Plane,
  Ship,
  Loader2,
} from "lucide-react";
import { companyInfo } from "@/data/company-info";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: "air-freight",
    originPort: "Dhaka (DAC)",
    destinationPort: "",
    cargoDetails: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setReferenceId(data.referenceId || "");
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          serviceType: "air-freight",
          originPort: "Dhaka (DAC)",
          destinationPort: "",
          cargoDetails: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error communicating with the server. Please email dinesh@dacpacific.com directly.");
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
              Direct Dhaka Logistics Operations Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Contact Us & Request a Quote
            </h1>
            <p className="text-base sm:text-lg text-slate-soft leading-relaxed">
              Reach our Dhaka division directly for rate inquiries, vessel schedules, customs clearance consultation, and space booking.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
                Office Information
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Dhaka Division Hub
              </h2>
              <div className="w-14 h-1 bg-crimson rounded-full"></div>
              <p className="text-sm text-slate-muted leading-relaxed">
                Our logistics coordinators are available during standard Bangladesh business days to handle all commercial inquiries, space allocations, and customs clearance procedures.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="bg-surface-light border border-surface-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Office Location</h3>
                  <p className="text-xs text-slate-600 mt-1 font-medium">{companyInfo.address.line1}</p>
                  <p className="text-xs text-slate-600">{companyInfo.address.line2}</p>
                  <p className="text-xs text-slate-600">{companyInfo.address.city} - {companyInfo.address.postalCode}, {companyInfo.address.country}</p>
                  <p className="text-[11px] text-slate-500 mt-1 font-semibold">{companyInfo.address.airportDistance}</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-surface-light border border-surface-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Direct Telephone</h3>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="text-sm font-bold text-navy hover:text-crimson block mt-1 transition-colors"
                  >
                    {companyInfo.phoneDisplay}
                  </a>
                  <p className="text-xs text-slate-muted mt-0.5">Sunday to Thursday: 9:00 AM - 6:00 PM BST</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-surface-light border border-surface-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Operational Inquiries</h3>
                  <a
                    href={`mailto:${companyInfo.inquiryEmail}`}
                    className="text-sm font-bold text-crimson hover:underline block mt-1"
                  >
                    {companyInfo.inquiryEmail}
                  </a>
                  <a
                    href={`mailto:${companyInfo.generalEmail}`}
                    className="text-xs text-slate-muted block mt-0.5 hover:text-navy"
                  >
                    {companyInfo.generalEmail}
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-surface-light border border-surface-border rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">Working Hours</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    <span className="font-semibold text-navy">{companyInfo.businessHours.days}:</span> {companyInfo.businessHours.hours}
                  </p>
                  <p className="text-xs text-slate-muted mt-0.5">
                    {companyInfo.businessHours.weekend}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Visual Card */}
            <div className="rounded-xl overflow-hidden border border-surface-border shadow-xs h-40 relative">
              <img
                src="/images/armach/contact-right.jpg"
                alt="DAC Pacific Dhaka Contact Desk"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent"></div>
              <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white uppercase tracking-wider">
                Dhaka Operations Customer Support
              </span>
            </div>

            {/* Port Gateways Badge */}
            <div className="bg-navy rounded-xl p-6 text-white space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-crimson">
                Operational Coverage
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-soft">
                <div className="flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-crimson" />
                  <span>DAC Airport Cargo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Ship className="w-4 h-4 text-crimson" />
                  <span>Chittagong Port (CTG)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-crimson" />
                  <span>Kamalapur ICD Dhaka</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-crimson" />
                  <span>Mongla Sea Port</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7" id="inquiry">
            <div className="bg-white border border-surface-border rounded-2xl p-6 sm:p-10 shadow-lg">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-crimson block">
                  Lead Capture & Quote Inquiry Form
                </span>
                <h3 className="text-2xl font-black text-navy">
                  Send Your Freight Inquiry
                </h3>
                <p className="text-xs text-slate-muted">
                  All submissions are automatically routed directly to <span className="font-semibold text-navy">dinesh@dacpacific.com</span> for priority rate calculation.
                </p>
              </div>

              {/* Status Alert Banner */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-bold text-sm">Inquiry Transmitted Successfully</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed pl-7">
                    {statusMessage}
                  </p>
                  {referenceId && (
                    <p className="text-[11px] font-mono font-bold text-emerald-900 pl-7">
                      Reference ID: {referenceId}
                    </p>
                  )}
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 space-y-1">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    <span className="font-bold text-sm">Submission Error</span>
                  </div>
                  <p className="text-xs text-red-800 leading-relaxed pl-7">
                    {statusMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Full Name <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Mohammad Rahman"
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Apparels Ltd"
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Business Email <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. shipments@company.com"
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Phone Number <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +880 1711 000000"
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Service Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Freight Service <span className="text-crimson">*</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    >
                      <option value="air-freight">Air Freight Forwarding</option>
                      <option value="ocean-fcl">Ocean Freight (FCL)</option>
                      <option value="ocean-lcl">Ocean Freight (LCL)</option>
                      <option value="customs-brokerage">Customs Brokerage</option>
                      <option value="warehousing-inland">Warehousing & Inland</option>
                      <option value="general-inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Origin Port */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Origin Port / City
                    </label>
                    <input
                      type="text"
                      name="originPort"
                      value={formData.originPort}
                      onChange={handleChange}
                      placeholder="e.g. Dhaka (DAC) or CTG"
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    />
                  </div>

                  {/* Destination Port */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Destination Port / City
                    </label>
                    <input
                      type="text"
                      name="destinationPort"
                      value={formData.destinationPort}
                      onChange={handleChange}
                      placeholder="e.g. Rotterdam, New York"
                      className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                    />
                  </div>
                </div>

                {/* Cargo Details */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-navy">
                    Cargo Specifications (Gross Weight / CBM / Commodity)
                  </label>
                  <input
                    type="text"
                    name="cargoDetails"
                    value={formData.cargoDetails}
                    onChange={handleChange}
                    placeholder="e.g. 500 Cartons RMG, 2,800 KG, 14 CBM"
                    className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-navy">
                    Inquiry Details & Requirements <span className="text-crimson">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify shipment deadline, special handling needs, or questions for our Dhaka operations desk..."
                    className="w-full px-3.5 py-2.5 bg-surface-light border border-surface-border rounded-lg text-sm text-navy placeholder:text-slate-muted focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-crimson hover:bg-crimson-hover disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg active:scale-98"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT INQUIRY TO DINESH@DACPACIFIC.COM</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-surface-border shadow-sm">
          <div className="bg-surface-light p-4 border-b border-surface-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-navy">
              <MapPin className="w-4 h-4 text-crimson" />
              <span>Dhaka Division Location Reference: Uttara Sector 3, Dhaka</span>
            </div>
            <span className="text-[11px] text-slate-muted">Hazrat Shahjalal International Airport (DAC) Corridor</span>
          </div>
          <div className="w-full h-80 bg-slate-200">
            <iframe
              title="DAC Pacific Dhaka Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700301980838!2d90.3900!3d23.8683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4217143f2a1%3A0x6b8030f1d1d86d5e!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
