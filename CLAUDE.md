# CLAUDE.md — Portfolio website for Silfi Ardila Putri

Read `PRD.md` first. It defines what to build, the requirements (R1–R9), acceptance criteria, and what is out of scope.

## What this project is

A fast, static, single-page portfolio for a Product Manager, plus one case-study page at `/case-study/mepo`.
Primary visitor: recruiters on mobile who spend under a minute. Secondary: PM hiring managers who read the case study.

## Stack

- Astro (latest stable) + Tailwind CSS, TypeScript
- Static output, deployed to Vercel
- Vercel Web Analytics for click events
- No backend, no CMS, no client-side framework unless a component truly needs it

## Content rules (important)

- **All profile content comes from `content.json`.** Never hardcode names, dates, titles, skills, or certificate data in components. Load it with a typed loader (`src/lib/content.ts`) and validate it with a Zod schema.
- The case study comes from `content/case-study-mepo.md`. If its frontmatter `status` is not `ready`, do not render the page; show the case-study card with a "Coming soon" label instead.
- Any value equal to `"TODO"` or any `*Note` field must never appear on the page. Hide the element and log a build-time warning listing every missing item.
- Never invent content: no made-up metrics, testimonials, projects, logos, or employers. If something is missing, leave it out.
- Language: English for v1.

## Page structure (single page, in this order)

1. Hero — R1
2. Highlights — R2
3. Featured case study card — R3
4. Experience timeline — R4 (show the QA → PM progression at Mepo)
5. How I work — R5 (P1, can come in v1.1)
6. Skills, grouped with evidence — R6
7. Certifications grid with filter Product / AI / Technical — R7 (P1)
8. Contact + CV download — R8

Sticky navigation with anchors — R9 (P1).

## Files and assets

- Certificates: `public/certificates/*.pdf`, already named; paths are in `content.json`.
- CV: `public/cv/Silfi-Ardila-Putri-CV.pdf` (provided by Silfi; if missing, hide CV buttons and warn).
- Profile photo: `public/images/profile.jpg` (provided by Silfi; if missing, use an initials avatar).
- `public/images/mepo-certificate-preview.jpg` can be used as the visual on the Best Award highlight.

## Design guidelines

- Clean, professional, text-first. Content and readability over visual effects.
- One accent color, generous whitespace, system or one Google font, max text width ~70 characters.
- Mobile first. Hero content (name, role, value proposition, CV + contact buttons) must fit a 375×667 viewport without scrolling.
- Light and dark mode via `prefers-color-scheme`.
- No stock photos, no heavy animations, no carousels.

## Analytics events (R8)

`cv_download`, `contact_email`, `contact_linkedin`, `case_study_open`, `case_study_scroll_75`.

## Definition of done

Before saying a task is finished:

1. `npm run build` passes with no errors.
2. Check every P0 acceptance criterion in `PRD.md` and report pass/fail per requirement ID.
3. Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95.
4. Verify at 360, 768, and 1280 px widths: no horizontal scroll.
5. Cross-check that every date, title, and issuer on the page matches `content.json`.
6. Confirm no `TODO` text, phone number, address, student ID, or aptitude-test data appears anywhere.

## Out of scope for v1

Blog, CMS, multi-language, contact form with backend, custom domain (Vercel subdomain is fine).
