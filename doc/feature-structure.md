# Feature Structure and UI/UX Specification

## Document Information
- Document Path: ./doc/feature-structure.md
- Project: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Benchmark: Armach Logistics Limited (armachbd.com)
- Status: Phase 1 Planning Document

## Design System Foundations

### Brand Colors
- Primary Navy / Maritime Blue: #0B2545 (conveys international logistics trust and security)
- Accent Crimson / Cargo Red: #D90429 (high visibility for Call to Action buttons and alerts)
- Secondary Slate Blue: #134074 (supporting navigation and hover states)
- Light Neutral Background: #F8F9FA (clean readability for content sections)
- Pure White: #FFFFFF (cards, modals, clean surfaces)
- Dark Slate Charcoal: #1E293B (body text and high contrast readability)

### Typography
- Primary Heading Font: Inter / Montserrat (clean modern sans-serif with bold geometry)
- Primary Body Font: Inter (legible at all responsive scales)
- Scale:
  - H1 Hero: 48px to 64px (desktop), 32px to 40px (mobile)
  - H2 Section Header: 32px to 40px (desktop), 24px to 28px (mobile)
  - H3 Subsection / Card Title: 20px to 24px (desktop), 18px to 20px (mobile)
  - Body Text: 16px (desktop), 15px (mobile)
  - Meta / Caption: 13px to 14px

## Universal Header Specification (Shared Across All Pages)

### Desktop View (Viewport width greater than or equal to 1024px)
- Top Bar:
  - Left: Welcome message or operating schedule (Sun - Thu 9:00 AM - 6:00 PM BST).
  - Center: Contact details with clickable telephone link and email link.
  - Right: Social media icons and agency network links.
- Main Nav:
  - Left: DAC Pacific logo (linking to /).
  - Center:
    - Home (/)
    - About Us (/about) with dropdown menu (Company Overview, Vision and Mission, Core Values, Network).
    - Logistics Services (/services) with dropdown menu (Air Freight, Ocean Freight, Customs Brokerage, Warehousing and Inland).
    - Tracking Directory (/tracking).
    - Contact Us (/contact).
  - Right: Primary CTA button: "Enquiry Now" (prominent red/crimson button opening quick quote modal or routing to /contact#quote).

### Mobile View (Viewport width less than 1024px)
- Sticky compact header.
- Left: DAC Pacific logo.
- Right: Quick Call phone button and Mobile Drawer toggle button (hamburger icon).
- Mobile Drawer (Sheet component):
  - Slide-in from right.
  - Full hierarchical navigation links with smooth expandable accordions for sub-sections.
  - Dhaka phone and email direct tap-to-call links.
  - Prominent "Enquiry Now" button at top and bottom.

## Universal Footer Specification (Shared Across All Pages)

### Desktop Grid Layout (4 Columns)
- Column 1: DAC Pacific Dhaka Division overview, brief brand statement, international freight forwarding network association.
- Column 2: Quick Links (Home, About Us, Company Profile, Global Network, Tracking Portal, Contact Us).
- Column 3: Core Freight Services (Air Freight Forwarding, Ocean Freight FCL/LCL, Customs Clearance, Warehousing and Distribution, Multi-Modal Solutions).
- Column 4: Dhaka Division Office Details:
  - Physical Address: Dhaka Office, Bangladesh.
  - Direct Phone: Dhaka operational phone line.
  - Email: info@dacpacific.com / dinesh@dacpacific.com.
  - Business Hours: Sunday to Thursday, 9:00 AM to 6:00 PM BST.
- Bottom Bar: Full copyright statement (Copyright 2026 DAC Pacific. All Rights Reserved.) and privacy policy link.

### Mobile Grid Layout
- Single column stacked with clean collapsible or clearly spaced segments to avoid vertical clutter.
- Tap-to-call phone button and tap-to-email button prominently displayed.

## Screen-by-Screen Specification

### Screen 1: Home Page (/)
1. Hero Section:
   - Full-width modern hero slider with smooth transitions.
   - Slide 1 (Air Freight): "Make Your Business Soar High" - Fast air cargo solutions connecting Dhaka to global hubs.
   - Slide 2 (Ocean Freight): "An Ocean of Possibilities" - FCL and LCL container logistics from Chittagong port.
   - Slide 3 (Land / Multimodal): "We Handle With Care" - Secure warehousing and inland transportation across Bangladesh.
   - CTAs per slide: "Explore Services" (Primary), "Request a Quote" (Secondary).
2. Quick Quote / Shipment Tracking Bar:
   - Compact dual-tab strip right beneath hero allowing visitors to quickly jump to tracking links or submit a quick rate inquiry.
3. Executive Welcome and Value Proposition:
   - Headline: "We Provide Reliable and Cost-Effective Freight Services"
   - Introduction to DAC Pacific Dhaka Division capabilities, reliability, and client commitment.
4. Core Services Showcase:
   - 4 to 6 structured service cards with high resolution imagery, title, description, and "Learn More" links.
5. Why Choose Us (Operational Strengths):
   - 4 feature blocks: Global Carrier Network, Customs Expertise, On-Time Dispatch, Dedicated Account Support.
6. Statistics and Milestones Counter:
   - Key operational numbers: Countries Connected, Shipments Handled, Airline and Ocean Carrier Partners, Customer Satisfaction.
7. Call to Action Banner:
   - High-impact banner: "Ready to Move Your Cargo? Get in Touch with Our Dhaka Specialists Today." with "Contact Dhaka Office" button.

### Screen 2: About Us / Corporate Profile (/about)
1. Page Header Banner: "About DAC Pacific - Dhaka Logistics Division"
2. Corporate Overview: History, commitment to Bangladesh international trade, relationship with global forwarding partners.
3. Vision and Mission:
   - Vision Statement: To be the preferred logistics and freight forwarding partner in Bangladesh recognized for agility and reliability.
   - Mission Statement: Delivering seamless supply chain execution with customer-first operational discipline.
4. Core Values: Integrity, Speed, Transparency, Accountability, Global Collaboration.
5. Freight Forwarding Network: Overview of global airline partnerships, shipping lines, and cross-border logistics capabilities.
6. Corporate CTA: "Partner With DAC Pacific" -> links to contact page.

### Screen 3: Logistics Services (/services)
1. Page Header Banner: "Comprehensive Freight and Supply Chain Solutions"
2. Service 1: Air Freight Forwarding (Consolidation, express cargo, chartering, airport-to-airport, door-to-door).
3. Service 2: Ocean Freight Solutions (FCL, LCL consolidation, break-bulk, port-to-port Chittagong connections).
4. Service 3: Customs Brokerage and Compliance (Import/Export clearance, tariff classification, documentation in Bangladesh).
5. Service 4: Warehousing and Inland Distribution (Secure storage, container handling, nationwide trucking).
6. Service Features Grid: Detailed specification table showing features, documentation requirements, and typical transit routes.
7. Service Inquiry CTA: "Inquire About This Service" button on every service card pre-filling service type in the contact form.

### Screen 4: Tracking and Tools Directory (/tracking)
1. Page Header Banner: "Carrier Tracking and Logistics Tools"
2. Purpose Statement: Direct links to official carrier tracking portals.
3. Category Filter / Navigation:
   - All Carriers
   - Shipping Lines (Container Tracking)
   - Airlines (Air Waybill Tracking)
   - Express Couriers
4. Carrier Cards Grid:
   - Card displays: Carrier Name, Logo, Category, AWB/Container format hint, "Track on Official Portal" external link opening in a new tab with rel="noopener noreferrer".
   - Key Shipping Lines: Maersk Line, MSC, CMA CGM, Hapag-Lloyd, Evergreen, ONE, Yang Ming, Cosco.
   - Key Airlines: Emirates SkyCargo, Qatar Airways Cargo, Biman Bangladesh Cargo, Turkish Cargo, Saudia Cargo, Singapore Airlines Cargo.
5. Disclaimer Note: External tracking portals are managed directly by respective carriers. DAC Pacific provides verified links for client convenience.

### Screen 5: Contact Us and Quote Inquiry (/contact)
1. Page Header Banner: "Contact DAC Pacific - Dhaka Office"
2. Contact Information Cards:
   - Physical Office Address: Dhaka Division, Bangladesh.
   - Telephone: Direct telephone line.
   - Email: info@dacpacific.com and direct operational email dinesh@dacpacific.com.
   - Operating Hours: Sunday - Thursday: 9:00 AM - 6:00 PM BST (Friday - Saturday: Closed / Urgent by appointment).
3. Interactive Lead Capture / Quote Inquiry Form:
   - Fields: Full Name, Company, Email, Phone, Service Needed, Origin Port, Destination Port, Cargo Weight/Dimensions, Message.
   - Form Submission: Dispatches directly to dinesh@dacpacific.com with instant client-side validation and confirmation feedback.
4. Interactive Google Map Embed: Dhaka office location map embed.
