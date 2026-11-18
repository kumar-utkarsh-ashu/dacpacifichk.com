# Technology Stack and Specifications

## Document Information
- Document Path: ./doc/technology.md
- Project: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Status: Phase 1 Planning Document

## Core Architecture and Frameworks

### 1. Framework: Next.js (App Router)
- Version: Next.js 14 LTS (or latest stable App Router)
- Rationale: Provides static site generation (SSG) for instant page loads, built-in SEO metadata management, serverless API routes for inquiry form dispatch, and image optimization.
- Project Structure:
  - Root: ./
  - Configuration: ./next.config.js, ./tsconfig.json, ./tailwind.config.js
  - Application Code: ./src/app/
  - Components: ./src/components/
  - Static Assets: ./public/
  - Documentation: ./doc/

### 2. Styling: Tailwind CSS
- Version: Tailwind CSS 3.4+
- Rationale: Utility-first CSS framework ensuring zero runtime CSS bloat, exact responsive breakpoint matching, and clean customization of DAC Pacific brand colors (Deep Maritime Blue, Cargo Crimson/Red, Cool Slate, Clean White).
- Configuration: Standard color palette tokens defined in ./tailwind.config.js.

### 3. UI Component Library: shadcn/ui and Lucide Icons
- Rationale: High-quality, unstyled, accessible UI primitives based on Radix UI that can be directly customized in the repository without external dependency lock-in.
- Components to use: Button, Card, Dialog, Input, Textarea, Select, NavigationMenu, Sheet (for mobile drawer), Accordion.
- Icons: Lucide React (standardized modern SVG icons for shipping, air cargo, ocean vessel, warehouse, phone, mail, map pin, tracking).

### 4. Language: TypeScript
- Strict typing enabled across all components, API request handlers, tracking directory objects, and form payloads to eliminate runtime bugs.

### 5. Form Handling and Validation
- React Hook Form for performant, uncontrolled form inputs with minimal re-renders.
- Zod schema validation for strict client-side and server-side input sanitization.
- Transport: Serverless route handler (./src/app/api/inquiry/route.ts) sending inquiries directly to dinesh@dacpacific.com via SMTP (Nodemailer or Resend / SendGrid API integration).

### 6. Development Scripts
- Development server: `npm run dev` (starts development server at http://localhost:3000)
- Production build: `npm run build` (generates optimized production build compatible with Vercel and Netlify)
- Local production preview: `npm run start`
- Code formatting and linting: `npm run lint`

### 7. Performance and Optimization Goals
- Lighthouse Performance Score: 90+
- First Contentful Paint (FCP): Under 1.2 seconds
- Cumulative Layout Shift (CLS): Under 0.05
- Mobile responsive viewport support: 320px to 2560px
