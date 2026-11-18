# Deployment and Hosting Specifications

## Document Information
- Document Path: ./doc/deployment.md
- Project: DAC Pacific (Dhaka Logistics Division) Corporate Website
- Domain: dacpacifichk.com
- Benchmark: Armach Logistics Limited (armachbd.com)
- Status: Phase 1 Planning Document

## Hosting Targets and Compatibility

The application is structured for instant zero-configuration deployment to standard cloud edge networks:
1. Primary Target: Vercel (recommended for Next.js App Router, edge caching, automated SSL, global CDN).
2. Secondary Target: Netlify (full Next.js plugin support, serverless functions, automatic SSL).
3. Self-Hosted / Node.js Container Target: Standalone Docker container or Node.js server (`next build` outputting standalone bundle).

## Build and Output Verification

- Build Command: `npm run build`
- Output Directory: `.next`
- Static Assets Directory: `./public/`
- Runtime Node version: Node.js 18.x or 20.x LTS

To verify a local production build before deployment:
1. Run `npm run build`
2. Run `npm run start`
3. Inspect production performance locally on http://localhost:3000

## Domain Configuration: dacpacifichk.com on GoDaddy

As outlined in Section 2 and Section 3 of the SOW:
"Client Dependencies: Client to provide hosting server access and GoDaddy DNS access for dacpacifichk.com."

### DNS Setup Instructions for Vercel Deployment:
1. Apex Domain (dacpacifichk.com):
   - Type: A Record
   - Name / Host: @
   - Value / Points to: 76.76.21.21
   - TTL: 600 seconds (or 1 Hour)
2. Subdomain (www.dacpacifichk.com):
   - Type: CNAME Record
   - Name / Host: www
   - Value / Points to: cname.vercel-dns.com
   - TTL: 600 seconds (or 1 Hour)

### DNS Setup Instructions for Netlify Deployment:
1. Apex Domain (dacpacifichk.com):
   - Type: A Record
   - Name / Host: @
   - Value / Points to: 75.2.60.5
   - TTL: 600 seconds (or 1 Hour)
2. Subdomain (www.dacpacifichk.com):
   - Type: CNAME Record
   - Name / Host: www
   - Value / Points to: [site-name].netlify.app
   - TTL: 600 seconds (or 1 Hour)

## Environment Variables Configuration

Create a local environment file at `./.env.local` (and mirror in Vercel / Netlify dashboard):
- CONTACT_NOTIFICATION_EMAIL=dinesh@dacpacific.com
- NEXT_PUBLIC_SITE_URL=https://dacpacifichk.com
- SMTP_HOST=[Client SMTP Server or Transactional Mail Host]
- SMTP_PORT=587
- SMTP_USER=[Client SMTP User]
- SMTP_PASS=[Client SMTP Password]
- SMTP_FROM="DAC Pacific Inquiry <inquiries@dacpacifichk.com>"

## SSL and Security Headers
- Automatic SSL certificate provisioned via Let's Encrypt through Vercel/Netlify.
- Standard security headers injected via ./next.config.js:
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: strict-origin-when-cross-origin
  - Content-Security-Policy configured for external assets and Google Maps iframe embed.
