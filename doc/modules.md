# Modules Specification - DAC Pacific Dhaka Logistics Website

## Document Information
- Document Path: ./doc/modules.md
- Project: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Benchmark: Armach Logistics Limited (armachbd.com)
- Status: Phase 1 Planning Document

## Detailed Module Specifications

### Module 1: Home Page Module
- Component Files:
  - ./src/app/page.tsx (main page entry)
  - ./src/components/home/HeroSlider.tsx
  - ./src/components/home/QuickActionStrip.tsx
  - ./src/components/home/ExecutiveWelcome.tsx
  - ./src/components/home/ServicesSummary.tsx
  - ./src/components/home/WhyChooseUs.tsx
  - ./src/components/home/StatsCounter.tsx
  - ./src/components/home/PartnerLogos.tsx
- Content Source: Benchmark armachbd.com sections adapted for DAC Pacific branding and Dhaka logistics division.
- Features:
  - Auto-playing accessible slider with manual pause on hover and keyboard navigation.
  - Interactive service teaser cards linking to detailed service sections.
  - Animated statistics counter triggerable on scroll viewport entry.
  - Fast response call-to-action banner.

### Module 2: About Us / Profile Module
- Component Files:
  - ./src/app/about/page.tsx
  - ./src/components/about/CompanyOverview.tsx
  - ./src/components/about/VisionMission.tsx
  - ./src/components/about/CoreValues.tsx
  - ./src/components/about/GlobalNetwork.tsx
- Content Source: Armach overview.php and vision.php customized for DAC Pacific.
- Features:
  - Clear narrative on DAC Pacific's logistics focus in Bangladesh.
  - Visual core values cards (Speed, Integrity, Reliability, Security).
  - Map infographic or vector representation of international forwarding network connections (Asia, Europe, North America, Middle East).

### Module 3: Logistics Services Module
- Component Files:
  - ./src/app/services/page.tsx (comprehensive overview)
  - ./src/components/services/ServiceCard.tsx
  - ./src/components/services/ServiceDetailModal.tsx (or tabbed/anchored sections)
  - ./src/components/services/ServiceInquiryCTA.tsx
- Content Source: SOW Core Sections and benchmark armachbd.com services.
- Detailed Services Included:
  1. Air Freight Forwarding:
     - Priority, standard, and consolidated air cargo.
     - Hazmat and temperature-controlled capabilities.
     - Direct connection to Shahjalal International Airport (DAC).
  2. Ocean Freight Solutions (FCL and LCL):
     - Full Container Load (FCL) and Less than Container Load (LCL).
     - Chittagong and Mongla port handling.
     - Carrier contracts with major ocean liners.
  3. Customs Brokerage and Compliance:
     - Comprehensive customs documentation in Bangladesh.
     - HS Code classification and duty assessment.
     - Export processing zone (EPZ) and bonded warehouse clearances.
  4. Warehousing and Inland Transport:
     - Short and long-term secure warehousing.
     - Container freight station (CFS) operations.
     - Dedicated fleet and intermodal transport across Bangladesh industrial corridors.

### Module 4: Tracking / Tools Link Module
- Component Files:
  - ./src/app/tracking/page.tsx
  - ./src/components/tracking/CarrierSearch.tsx
  - ./src/components/tracking/CarrierCard.tsx
  - ./src/data/tracking-carriers.ts
- Content Source: SOW Section 1 & Section 3 (External directory, no proprietary database required).
- Features:
  - Instant client-side filter by category (Ocean Lines, Airlines, Couriers).
  - Instant text search by carrier name (e.g. typing "Maersk" or "Emirates" filters cards).
  - Direct deep links with proper security attributes (rel="noopener noreferrer" target="_blank").
  - Helpful sample tracking number formats to assist users before they visit external portals.

### Module 5: Contact Us and Quote Inquiry Module
- Component Files:
  - ./src/app/contact/page.tsx
  - ./src/components/contact/ContactInfoCards.tsx
  - ./src/components/contact/InquiryForm.tsx
  - ./src/components/contact/MapEmbed.tsx
  - ./src/app/api/inquiry/route.ts (serverless dispatch)
- Content Source: SOW Section 1 (contact requirements, routing directly to dinesh@dacpacific.com).
- Features:
  - Multi-field quote and message form.
  - Real-time client-side validation using Zod.
  - Immediate submission progress spinner and success alert.
  - Serverless API handler dispatching notification to dinesh@dacpacific.com.
  - Responsive embedded Google Map for Dhaka office location.
  - Click-to-call and click-to-email action buttons for instant mobile interaction.
