# DAC Pacific (Dhaka Logistics Division) Website Project Plan

## Document Information
- Document Path: ./doc/readme.md
- Project Name: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Benchmark: Armach Logistics Limited (armachbd.com)
- Current Status: Phase 1 Planning (No code written yet)
- Current Plan Version: 1.3.0

## Version History
- Version 1.0.0: Initial comprehensive master plan and architecture documentation created based on Scope of Work (SOW v4).
- Version 1.1.0: Task 01 executed. Next.js 14 App Router, Tailwind CSS, TypeScript, and core dependencies (lucide-react, clsx, tailwind-merge) initialized and verified with successful production build.
- Version 1.2.0: Full implementation and testing of all core modules (Universal Header/Footer, Home, About, Services, Tracking Directory, Contact with lead capture API routing to dinesh@dacpacific.com). Verified with clean production build and live HTTP 200 responses on all routes.
- Version 1.3.0: Crawled benchmark assets from armachbd.com (sliders, welcome, banners, partner logos, gallery). Designed official DAC Pacific brand SVG logo. Integrated real logistics images across Header, Footer, HeroSlider, ExecutiveWelcome, ServicesSummary, CargoGallery, PartnerLogos, and ContactDesk. Verified with clean production build and dev server HTTP 200.

## Project Framework: I-M-E-T Structure
- I (Input): Client SOW requirements, armachbd.com benchmark layout, Dhaka logistics domain requirements, lead capture specifications routing to dinesh@dacpacific.com.
- M (Mission): Deliver a modern, high performance, fully responsive corporate logistics web platform for DAC Pacific on dacpacifichk.com modeled after armachbd.com with universal header and footer, 5 core modules, fast loading speeds, clean SEO metadata, and zero external tracking database dependencies.
- E (Execute): Build using Next.js App Router, Tailwind CSS, TypeScript, and reusable component libraries. Configure for local development (npm run dev) and automated deployment (npm run build) on Vercel or Netlify.
- T (Testing): Cross-browser testing (Chrome, Safari, Firefox, Edge), responsive layout testing across mobile (360px-430px), tablet (768px-1024px), desktop (1280px-1920px), form validation testing, external tracking link verification, and build performance audits.

## Target User Personas and User Journeys

### User Persona 1: Bangladesh Ready-Made Garments (RMG) Exporter
- Needs: Urgent air and ocean freight rates, vessel schedules from Chittagong port, direct contact with Dhaka operational team.
- Journey: Lands on Home Page -> reviews Air/Ocean Freight capabilities -> clicks Request a Quote CTA -> fills inquiry form -> receives confirmation of receipt.
- CTAs: Request a Quote, Contact Dhaka Office, View Air Freight Solutions.

### User Persona 2: Overseas Forwarder and Network Partner
- Needs: Verify DAC Pacific credentials, local handling capabilities in Dhaka, customs clearance, warehousing, and operational contact points.
- Journey: Lands on Home Page -> navigates to About Us / Company Profile -> reviews Global Network and Services -> checks Customs Brokerage and Warehousing -> reaches Contact Us for agency collaboration.
- CTAs: Partner With Us, View Profile, Contact Us.

### User Persona 3: Cargo Tracking Visitor
- Needs: Quick access to shipping line container tracking or airline air waybill (AWB) status without complicated logins.
- Journey: Clicks Track and Trace in Universal Header -> lands on Tracking Tools Directory -> selects carrier category (Shipping Line / Airline) -> clicks external official portal link opening in a new tab.
- CTAs: Track Air Cargo, Track Ocean Container, Track Inland Shipment.

### User Persona 4: Procurement / Corporate Logistics Manager
- Needs: Comprehensive multi-modal logistics solutions, project cargo capabilities, regulatory compliance information.
- Journey: Navigates to Logistics Services -> explores FCL/LCL Ocean, Air Freight, Inland Transport -> evaluates corporate strengths -> initiates formal inquiry through lead capture form.
- CTAs: Get Inquiry Form, Download Corporate Profile, Call Dhaka Office.

## Site Architecture and Navigation Flow

Universal Header:
- Top Information Bar: Dhaka Phone (+8802 contact line), Email (info@dacpacific.com / dinesh@dacpacific.com), Business Hours (Sun-Thu 9:00 AM - 6:00 PM BST), Social Media links.
- Main Navbar:
  - Brand Logo (DAC Pacific - Dhaka Division)
  - Navigation Links:
    - Home (/)
    - About Us (/about) with sub-sections: Overview, Vision and Mission, Core Values, Network
    - Services (/services) with sub-sections: Air Freight, Ocean Freight (FCL/LCL), Customs Brokerage, Warehousing and Inland Transport, Project Cargo
    - Tracking Tools (/tracking)
    - Contact Us (/contact)
  - Primary Action Button: "Enquiry Now" / "Get a Quote"

Universal Footer:
- Column 1: Company Profile Summary, Brand Identity, Accreditation/Logistics Network badge text.
- Column 2: Quick Links (Home, About Us, Services, Tracking Directory, Contact).
- Column 3: Freight Services List (Air Freight Forwarding, Ocean Freight FCL/LCL, Customs Brokerage, Warehousing and Distribution, Project Cargo).
- Column 4: Dhaka Division Office Details (Full Physical Address, Phone Number, Email, Operating Hours, Google Map link).
- Bottom Bar: Copyright notice, Privacy Terms, All Rights Reserved.

## Layout Gap Analysis (armachbd.com Benchmark vs Modern DAC Pacific)
- Benchmark Gap 1 (Outdated styling): armachbd.com uses legacy Bootstrap 3 and jQuery plugins from 2015. Modern DAC Pacific will use modern Next.js, semantic HTML5, Tailwind CSS, and lightweight CSS transitions.
- Benchmark Gap 2 (Mobile responsiveness): Legacy tables and fixed pixel widths cause horizontal scrolling on modern mobile screens. DAC Pacific will use responsive flexbox and grid systems with standard mobile touch targets (minimum 44px).
- Benchmark Gap 3 (Lead routing): Benchmark uses an unvalidated PHP form. DAC Pacific will implement a React Hook Form with Zod validation, client-side error states, and serverless direct mail routing to dinesh@dacpacific.com.
- Benchmark Gap 4 (Tracking clarity): Legacy benchmark points to dead links. DAC Pacific will provide a curated, categorized directory of verified top shipping lines and air cargo tracking portals.

## Tester Execution Checklist
- [x] Task 01: Project structure initialized with Next.js, Tailwind CSS, and TypeScript.
- [x] Task 02: Universal Header and Navigation implemented with responsive mobile drawer menu.
- [x] Task 03: Universal Footer implemented with full Dhaka office details and links.
- [x] Task 04: Home page implemented with hero banner, value proposition, welcome note, service grid, and stats counter.
- [x] Task 05: About Us page implemented with company profile, vision, mission, and network overview.
- [x] Task 06: Logistics Services pages implemented with detailed freight solutions.
- [x] Task 07: Tracking Tools directory implemented with categorized external carrier links.
- [x] Task 08: Contact Us and Inquiry page implemented with interactive form routing to dinesh@dacpacific.com and map embed.
- [x] Task 09: Form validation, error handling, and submission confirmation states tested.
- [x] Task 10: Responsiveness verified across mobile, tablet, and desktop viewport specifications.
- [x] Task 11: Cross-browser verification (Chrome, Safari, Firefox, Edge).
- [x] Task 12: Production build verification (npm run build) for Vercel and Netlify compatibility.
