# Development Process and Workflow

## Document Information
- Document Path: ./doc/process.md
- Project: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Benchmark: Armach Logistics Limited (armachbd.com)
- Status: Phase 1 Planning Document

## Operational Rules and Methodology

### 1. The I-M-E-T Plan Cycle
For every single task, the development workflow strictly follows this cycle:
- I (Input): Gather all necessary design references, content, benchmarks, and functional requirements.
- M (Mission): Define explicit success criteria, boundary limits, and expected deliverables for the single task.
- E (Execute): Implement the solution with minimal, clean, type-safe code using Next.js, Tailwind CSS, and shadcn components.
- T (Testing): Run automated and manual tests to confirm functionality, responsiveness, accessibility, and zero console/build errors before marking the task complete.

### 2. Single-Task Discipline
- Exactly 1 task is executed at a time.
- No parallel unverified changes.
- If an error is detected during testing, work halts immediately on other items until the error is diagnosed, fixed, and re-verified.

### 3. Execution Summary Versioning
- Before executing any command or codebase change, a brief "Execution Summary: Version [x.y.z]" is posted.
- Changes are tracked incrementally in ./doc/readme.md with updated version tags.

### 4. Milestone Schedule (10 to 12 Working Days)

Phase 1 (Days 1 to 2): Planning and Asset Intake
- Create comprehensive UI/UX plan and architecture documents.
- Reverse engineer armachbd.com benchmark layouts, navigation hierarchy, and content sections.
- Document user journeys, layout gap solutions, and execution checklist.
- Wait for user approval before writing application code.

Phase 2 (Days 3 to 7): Core Page Development
- Setup Next.js, Tailwind CSS, and shadcn component framework.
- Build universal responsive header with Dhaka contact info and navigation.
- Build universal responsive footer with Dhaka office address and service links.
- Build Home Page (hero slider, value proposition, executive welcome, services summary, statistics counter).
- Build About Us / Profile page (company overview, vision, mission, core values, global network).
- Build Logistics Services pages (Air Freight Forwarding, Ocean Freight FCL/LCL, Customs Brokerage, Warehousing and Inland Transport).
- Build Tracking / Tools directory page (external carrier portal links).
- Build Contact Us & Inquiry page (lead capture form routing to dinesh@dacpacific.com and Google Maps embed).

Phase 3 (Days 8 to 10): Client Review and Staging Adjustments
- Deploy to preview staging URL.
- Review with client and adjust copy, telephone numbers, and visual hierarchy.
- Refine mobile touch targets and typography.

Phase 4 (Days 11 to 12): QA and Production Deployment
- Cross-browser testing on Chrome, Safari, Firefox, and Edge.
- Responsive audit on mobile, tablet, laptop, and 4K desktop screens.
- Production build validation (npm run build).
- DNS configuration pointing dacpacifichk.com to production hosting.
