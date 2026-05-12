@AGENTS.md
You are a senior full-stack architect and Next.js expert.

Create a production-ready modern blogging platform using:

TECH STACK:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- MDX for blog content
- Vercel deployment
- Google AdSense integration
- Meta Pixel integration
- SEO optimization
- next-sitemap
- Framer Motion
- Fuse.js for search
- reading-time
- remark-gfm
- rehype-highlight

PROJECT GOAL:
Build a highly scalable, SEO-optimized, monetization-ready blogging platform architecture suitable for:
- technical blogs
- AI blogs
- programming tutorials
- SaaS content marketing
- affiliate blogging
- future SaaS expansion

The architecture must follow modern enterprise-grade standards.
==================================================
ARCHITECTURE 
==================================================
project/
│
├── content/
│   └── blogs/
│       ├── ai/
│       ├── nextjs/
│       ├── seo/
│       └── tutorials/
│
├── public/
│   ├── ads/
│   ├── favicon/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── og/
│   └── manifest.json
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── (main)/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── privacy-policy/
│   │   │   ├── terms/
│   │   │   │
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── page.tsx
│   │   │   │   │
│   │   │   │   ├── category/
│   │   │   │   │   └── [slug]/
│   │   │   │   │       └── page.tsx
│   │   │   │   │
│   │   │   │   ├── tag/
│   │   │   │   │   └── [slug]/
│   │   │   │   │       └── page.tsx
│   │   │   │   │
│   │   │   │   ├── search/
│   │   │   │   │   └── page.tsx
│   │   │   │   │
│   │   │   │   └── rss.xml/
│   │   │   │
│   │   │   └── newsletter/
│   │   │
│   │   ├── api/
│   │   │   ├── analytics/
│   │   │   │   └── route.ts
│   │   │   ├── newsletter/
│   │   │   │   └── route.ts
│   │   │   ├── search/
│   │   │   │   └── route.ts
│   │   │   ├── views/
│   │   │   │   └── route.ts
│   │   │   └── webhooks/
│   │   │
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── opengraph-image.tsx
│   │   ├── twitter-image.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   │
│   ├── components/
│   │   │
│   │   ├── ads/
│   │   │   ├── AdBanner.tsx
│   │   │   ├── AdInline.tsx
│   │   │   ├── AdSidebar.tsx
│   │   │   ├── AdSticky.tsx
│   │   │   ├── AutoAds.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── analytics/
│   │   │   ├── GoogleAnalytics.tsx
│   │   │   ├── PageViewTracker.tsx
│   │   │   ├── PerformanceTracker.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── blog/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostHeader.tsx
│   │   │   ├── PostHero.tsx
│   │   │   ├── PostContent.tsx
│   │   │   ├── PostList.tsx
│   │   │   ├── FeaturedPosts.tsx
│   │   │   ├── RelatedPosts.tsx
│   │   │   ├── CategoryBadge.tsx
│   │   │   ├── TagList.tsx
│   │   │   ├── ReadingProgress.tsx
│   │   │   ├── ReadingTime.tsx
│   │   │   ├── ShareButtons.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── ViewCounter.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── seo/
│   │   │   ├── JsonLd.tsx
│   │   │   ├── BreadcrumbSchema.tsx
│   │   │   ├── BlogSchema.tsx
│   │   │   ├── OrganizationSchema.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── search/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SearchDialog.tsx
│   │   │   ├── SearchResults.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── BackToTop.tsx
│   │   │   ├── CookieBanner.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── EmptyState.tsx
│   │   │   ├── ErrorState.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Modal.tsx
│   │       ├── Badge.tsx
│   │       ├── Skeleton.tsx
│   │       ├── Tooltip.tsx
│   │       └── index.ts
│   │
│   ├── config/
│   │   ├── ads.ts
│   │   ├── seo.ts
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── env.ts
│   │
│   ├── data/
│   │   ├── authors.ts
│   │   ├── navigation.ts
│   │   └── social-links.ts
│   │
│   ├── hooks/
│   │   ├── useNewsletter.ts
│   │   ├── useReadingProgress.ts
│   │   ├── useTheme.ts
│   │   ├── useViewCounter.ts
│   │   ├── useDebounce.ts
│   │   └── useSearch.ts
│   │
│   ├── lib/
│   │   │
│   │   ├── adsense/
│   │   │   ├── config.ts
│   │   │   ├── inject.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── analytics/
│   │   │   ├── google.ts
│   │   │   ├── events.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── mdx/
│   │   │   ├── getPost.ts
│   │   │   ├── getPosts.ts
│   │   │   ├── serialize.ts
│   │   │   ├── toc.ts
│   │   │   ├── related.ts
│   │   │   ├── search-index.ts
│   │   │   ├── plugins.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── pixel/
│   │   │   ├── fbPixel.ts
│   │   │   ├── events.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── seo/
│   │   │   ├── metadata.ts
│   │   │   ├── generateMeta.ts
│   │   │   ├── generateSchema.ts
│   │   │   ├── openGraph.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── search/
│   │   │   ├── fuse.ts
│   │   │   ├── filters.ts
│   │   │   └── index.ts
│   │   │
│   │   └── utils/
│   │       ├── date.ts
│   │       ├── string.ts
│   │       ├── slug.ts
│   │       ├── url.ts
│   │       ├── constants.ts
│   │       └── index.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── syntax.css
│   │   ├── typography.css
│   │   └── animations.css
│   │
│   ├── types/
│   │   ├── blog.ts
│   │   ├── seo.ts
│   │   ├── analytics.ts
│   │   ├── ads.ts
│   │   └── index.ts
│   │
│   └── middleware.ts
│
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── mdx-components.tsx
├── next.config.ts
├── next-sitemap.config.js
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── package.json
└── vercel.json
==================================================
CORE REQUIREMENTS
==================================================

1. BLOGGING SYSTEM
- Blogs must be written in MDX format
- Support markdown frontmatter
- Dynamic blog routes
- Categories
- Tags
- Related posts
- Featured posts
- Reading time
- Table of contents
- Syntax highlighting
- Blog search
- Pagination
- SEO-friendly slugs

2. SEO OPTIMIZATION
Implement full technical SEO:
- Dynamic metadata generation
- OpenGraph tags
- Twitter cards
- Canonical URLs
- Sitemap.xml
- Robots.txt
- JSON-LD schema
- Structured metadata
- Mobile optimization
- Core Web Vitals optimization
- Static generation where possible

3. MONETIZATION
Implement:
- Google AdSense integration
- In-article ads
- Sidebar ads
- Banner ads
- Auto ads
- Clean reusable ad components

4. TRACKING & ANALYTICS
Implement:
- Meta Pixel
- Google Analytics
- Event tracking architecture
- Page view tracking
- Conversion-ready setup

5. UI/UX
Create:
- Modern responsive UI
- Dark mode
- Beautiful typography
- Reading progress bar
- Sticky TOC
- Clean card layouts
- Minimal modern aesthetic
- Smooth animations with Framer Motion

6. PERFORMANCE
Optimize:
- Static generation
- Dynamic imports
- Lazy loading
- next/image optimization
- Font optimization
- SEO performance
- Lighthouse score optimization

==================================================
MDX REQUIREMENTS
==================================================

Implement:
- MDX parser
- Frontmatter support
- Syntax highlighting
- Custom MDX components
- Code block styling
- Dynamic TOC generation
- Blog indexing utilities

Example frontmatter:

---
title:
description:
date:
category:
tags:
image:
published:
featured:
author:
---

==================================================
SEO REQUIREMENTS
==================================================

Implement:
- generateMetadata()
- sitemap.ts
- robots.ts
- dynamic OG images
- structured schema
- metadata utility layer
- reusable SEO helper functions

==================================================
ADSENSE REQUIREMENTS
==================================================

Create reusable ad system:

components/ads/
- InArticleAd
- SidebarAd
- BannerAd
- AutoAds

Ensure:
- clean architecture
- reusable placements
- responsive ads
- optimized loading

==================================================
META PIXEL REQUIREMENTS
==================================================

Create architecture:

lib/pixel/
- fbPixel.ts
- events.ts

Implement:
- PageView tracking
- custom events
- route tracking
- conversion-ready setup

==================================================
SEARCH SYSTEM
==================================================

Implement:
- Fuse.js search
- search indexing
- category filtering
- tag filtering
- optimized client search

==================================================
FUTURE SCALABILITY
==================================================

Architecture must support future features:
- authentication
- admin dashboard
- AI article generation
- newsletter system
- comments
- memberships
- premium content
- multi-language support
- CMS migration
- analytics dashboard

==================================================
DELIVERABLES
==================================================

Generate:

1. Complete production-ready folder structure
2. Full architecture explanation
3. Recommended package installation
4. SEO architecture
5. MDX architecture
6. AdSense architecture
7. Meta Pixel architecture
8. Performance optimization strategy
9. Deployment strategy
10. Environment variable setup
11. Reusable utility structure
12. Best practices
13. Security considerations
14. Scalable coding standards
15. Production deployment checklist

==================================================
CODING STANDARDS
==================================================

Use:
- strict TypeScript
- reusable components
- clean architecture
- modular code
- scalable utilities
- modern React patterns
- server components where appropriate
- client/server separation
- optimized rendering strategies

==================================================
EXPECTED OUTPUT STYLE
==================================================

Provide:
- professional architecture diagrams
- clean folder trees
- explanations for every major folder
- production-grade recommendations
- scalability reasoning
- SEO reasoning
- monetization reasoning
- deployment reasoning



The final result should look like a real enterprise-grade modern blogging platform architecture used in production SaaS companies.