# nanda-portfolio

Personal portfolio website of **Nanda Ferdiansyah** — Industrial Engineer, 3D Design Engineer, and Business Process Analyst.

Built with the same layout and flow as [satriabahari.my.id](https://www.satriabahari.my.id) (sticky sidebar profile + menu, dark/light toggle, card-based sections), minus the parts that were not needed: no i18n (English only), no dashboard, no guestbook, no links page, and no Google login.

## Tech stack

| Layer     | Choice                             |
| --------- | ---------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack) |
| Language  | TypeScript                         |
| Styling   | Tailwind CSS v4                    |
| Animation | Framer Motion                      |
| Theming   | next-themes (class strategy)       |
| State     | Zustand (mobile menu)              |
| Icons     | react-icons                        |
| Mail      | Nodemailer (contact form)          |

Every page is static except the contact form's API route. Copy `.env.example` to `.env.local` to enable the two optional integrations (email delivery and the live Instagram feed) — without them the site still builds and runs.

## Contact form email

`/contact` posts to `app/api/contact/route.ts`, which sends the message straight to `nferdiansyah6@gmail.com` — the visitor never leaves the page. Two variables are required in `.env.local`:

```bash
MAIL_USER=nferdiansyah6@gmail.com   # Gmail account that sends the mail
MAIL_PASS=xxxxxxxxxxxxxxxx          # Google App Password (16 chars, no spaces)
MAIL_TO=nferdiansyah6@gmail.com     # optional, defaults to PROFILE.email
```

To create the app password: Google Account → Security → turn on **2-Step Verification** → **App passwords** → create one for "Mail". Use that value, not the account password. On Vercel, add the same variables under Project Settings → Environment Variables.

Messages arrive with the visitor's address as `Reply-To`, so replying from Gmail goes straight back to them. The form also carries a hidden honeypot field to absorb spam bots. If the variables are missing, the form reports that email is not configured instead of failing silently.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npx eslint .     # lint
```

## Pages

| Route              | Contents                                                  |
| ------------------ | --------------------------------------------------------- |
| `/`                | Intro, skills by category, what I do, featured projects    |
| `/about`           | Longer bio, stats, current roles, working approach         |
| `/career`          | Work experience (expandable details) + education           |
| `/projects`        | Project list with category filter                          |
| `/projects/[slug]` | Project detail: story, highlights, tools used              |
| `/portfolio`       | Design gallery grouped by tool, with a lightbox viewer     |
| `/achievements`    | Patent, certifications, and programs with category filter  |
| `/creations`       | Instagram profile card + optional embedded posts           |
| `/contact`         | Contact details, social links, and a mailto-based form     |

## Editing content

All content lives in plain TypeScript files under `common/constants/` — no CMS, no markdown:

| File              | What it controls                                          |
| ----------------- | --------------------------------------------------------- |
| `profile.ts`      | Name, role, location, email, phone, bio, services, SEO     |
| `menu.tsx`        | Sidebar navigation items                                   |
| `stacks.tsx`      | Skills grouped into Main / Business Process / Design / Coding / Statistics (the `All` tab is generated automatically) |
| `careers.ts`      | Work experience entries                                    |
| `education.ts`    | Education entries                                          |
| `projects.ts`     | Projects and their detail pages                            |
| `portfolio.ts`    | Gallery images on `/portfolio` (title, tool, description)  |
| `achievements.ts` | Patents, certifications, programs, awards                  |
| `socialMedia.tsx` | Social links in sidebar, mobile menu, and contact page     |
| `creations.ts`    | Instagram username and the posts embedded on `/creations`  |

### Skill icons

Each entry picks its artwork in this order: `image` (a file under `public/images/stacks/`), then `icon` (a Simple Icons glyph from `react-icons`), then `monogram`. SolidWorks, Blender, Python, Matlab, and Tableau use artwork downloaded from [Icons8](https://icons8.com), whose free tier asks for a visible credit — either keep a credit line on the site or swap those five files for licence-free equivalents.

Entries without a glyph — brands like SolidWorks, Fusion 360, Excel, Power BI, SPSS, Matlab, Tableau, and every Business Process method (BPMN, Six Sigma, Lean, TPM, Kanban, Kaizen, VSM) — use a coloured monogram badge instead. Set `monogram` and `color` on the entry in `stacks.tsx`.

### The Instagram feed on `/creations`

The page has two modes and picks automatically:

**1. Curated embeds (default, zero setup).** Paste post URLs into `INSTAGRAM_POSTS` in `common/constants/creations.ts`:

```ts
export const INSTAGRAM_POSTS: string[] = [
  "https://www.instagram.com/p/ABC123xyz/",
  "https://www.instagram.com/reel/DEF456uvw/",
];
```

Each one renders through Instagram's official embed — no API key or token needed. Leaving the array empty shows only the profile card.

**2. Live feed (automatic).** Set `INSTAGRAM_ACCESS_TOKEN` in `.env.local` and the page fetches the real feed instead, rendering it as an Instagram-style square grid (revalidated hourly). To get a token:

1. The account must be a **Professional account** (Creator or Business) — switch it in the Instagram app under Settings → Account type.
2. Create an app at [developers.facebook.com](https://developers.facebook.com/apps) and add the **Instagram** product with *Instagram API setup with Instagram login*.
3. Add `@e_techstudio` as an Instagram tester, accept the invite in the app under Settings → Website permissions → Apps and websites.
4. Generate a user access token with the `instagram_business_basic` scope, then exchange it for a long-lived token (60 days) and put it in `.env.local`.

Long-lived tokens expire, so refresh the value periodically — if it expires, the page silently falls back to mode 1 rather than breaking.

## Assets to drop in

| File                              | Used by                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| `public/images/nanda.jpg`         | Sidebar profile photo (falls back to an "NF" monogram if absent)  |
| `public/images/nanda-about.jpg`   | Portrait beside the bio on `/about`                               |
| `public/cv-nanda-ferdiansyah.pdf` | `PROFILE.resume_url`, if you want a downloadable CV link          |
| `public/images/careers/*.png`     | Optional company logos referenced in `careers.ts`                 |
| `public/images/education/*.png`   | Optional school logo referenced in `education.ts`                 |

## Deploying

The site is fully static, so any host works. On Vercel: import the repository, keep the defaults, and set the production domain. Then update `METADATA.url` in `common/constants/profile.ts` so canonical URLs, `sitemap.xml`, and `robots.txt` point at the real domain.
