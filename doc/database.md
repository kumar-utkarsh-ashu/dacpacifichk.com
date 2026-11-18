# Database and Data Architecture

## Document Information
- Document Path: ./doc/database.md
- Project: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Status: Phase 1 Planning Document

## Data Strategy and Philosophy

In accordance with Section 3 of the Scope of Work (SOW):
"Exclusions: Custom backend shipment tracking databases (external carrier links only), and post-launch scope additions."

The DAC Pacific website is deliberately designed as a high performance, secure, low maintenance static-first platform with serverless operational endpoints. No heavy relational or NoSQL database is required for core operation, eliminating recurring database hosting fees, maintenance overhead, security patching vulnerabilities, and connection latency.

## Form Data Model: Lead Capture and Quote Inquiries

Submissions from the Contact and Quote forms are validated and routed in real time directly to dinesh@dacpacific.com.

### Inquiry Data Schema (Zod TypeScript Definition)
- fullName: string, required, minimum 2 characters, maximum 100 characters.
- companyName: string, optional, maximum 100 characters.
- email: string, required, valid email format.
- phone: string, required, valid international phone number format (support for Bangladesh +880 formats and international).
- serviceType: enum, required:
  - "air-freight" (Air Freight Forwarding)
  - "ocean-fcl" (Ocean Freight Full Container Load)
  - "ocean-lcl" (Ocean Freight Less than Container Load)
  - "customs-brokerage" (Customs Clearance and Brokerage)
  - "warehousing-inland" (Warehousing and Inland Transport)
  - "general-inquiry" (General Inquiry)
- originPort: string, optional (e.g., Dhaka, Chittagong, Shanghai, Dubai).
- destinationPort: string, optional (e.g., Rotterdam, New York, Hamburg, Singapore).
- cargoDetails: string, optional (weight, dimensions, commodity type).
- message: string, required, minimum 10 characters, maximum 2000 characters.
- submissionTimestamp: ISO 8601 string generated upon submission.
- ipAddress: string (for rate limiting and spam prevention).

### Processing and Transport
1. Client-side validation: React Hook Form evaluates inputs against Zod schema.
2. API Route endpoint: POST request dispatched to ./src/app/api/inquiry/route.ts.
3. Server-side validation: Request body re-validated with Zod to block malformed or malicious payloads.
4. Email dispatch: Formatted HTML email automatically dispatched to dinesh@dacpacific.com with sender contact details, requested service, origin/destination, and cargo requirements.
5. Client notification: UI updates with a clean success card and reference confirmation message.

## Static Data Models

### 1. Tracking Carrier Directory Data Model
Stored in ./src/data/tracking-carriers.ts:
- id: string
- name: string
- category: "shipping-line" | "airline" | "express-courier"
- logoUrl: string
- officialTrackingUrl: string
- description: string
- sampleFormat: string (e.g. "MAEU1234567" for Maersk or "176-12345678" for Emirates)

### 2. Services Data Model
Stored in ./src/data/services.ts:
- slug: string
- title: string
- shortDescription: string
- detailedDescription: string
- keyFeatures: array of strings
- benefits: array of strings
- image: string
- iconName: string
