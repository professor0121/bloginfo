@echo off
REM ============================================================
REM  Next.js Blog - Create MISSING files only
REM  Skips: app/, public/, .gitignore, README.md,
REM         eslint.config.mjs, next.config.ts, package.json,
REM         postcss.config.mjs, tsconfig.json
REM  Run from your project root: c:\Users\ravik\OneDrive\Desktop\bloginfo
REM ============================================================

echo.
echo  =============================================
echo   Creating missing architecture...
echo  =============================================
echo.

REM ── 1. NEW ROOT-LEVEL FILES ───────────────────────────────────
echo [1/6] Root files...

type nul > .env
type nul > .env.example
type nul > mdx-components.tsx

echo    Done.

REM ── 2. CONTENT FOLDER ────────────────────────────────────────
echo [2/6] Content folders and sample posts...

mkdir content\blogs\seo
mkdir content\blogs\nextjs
mkdir content\blogs\ai

type nul > content\blogs\seo\getting-started-with-seo.mdx
type nul > content\blogs\nextjs\nextjs-15-whats-new.mdx
type nul > content\blogs\ai\intro-to-llms.mdx

echo    Done.

REM ── 3. PUBLIC SUBFOLDERS ─────────────────────────────────────
echo [3/6] Public subfolders...

mkdir public\images
mkdir public\ads
mkdir public\favicon

echo    Done.

REM ── 4. SRC FOLDER ────────────────────────────────────────────
echo [4/6] src folder structure...

REM ── src/app/  (move existing app/ into src/app/ OR keep as-is)
REM    NOTE: Your current app/ is at root. The architecture uses src/app/.
REM    This script creates src/app/ alongside your existing root app/.
REM    After running, manually move root app/ into src/ if you prefer.

mkdir src\app\(main)\blog\[slug]
mkdir src\app\(main)\blog\category\[slug]
mkdir src\app\(main)\blog\tag\[slug]
mkdir src\app\(main)\about
mkdir src\app\(main)\contact
mkdir src\app\(main)\privacy-policy
mkdir src\app\api\views
mkdir src\app\api\newsletter
mkdir src\app\api\analytics

type nul > src\app\sitemap.ts
type nul > src\app\robots.ts
type nul > src\app\globals.css
type nul > src\app\layout.tsx

type nul > "src\app\(main)\page.tsx"
type nul > "src\app\(main)\blog\page.tsx"
type nul > "src\app\(main)\blog\[slug]\page.tsx"
type nul > "src\app\(main)\blog\category\[slug]\page.tsx"
type nul > "src\app\(main)\blog\tag\[slug]\page.tsx"
type nul > "src\app\(main)\about\page.tsx"
type nul > "src\app\(main)\contact\page.tsx"
type nul > "src\app\(main)\privacy-policy\page.tsx"

type nul > src\app\api\views\route.ts
type nul > src\app\api\newsletter\route.ts
type nul > src\app\api\analytics\route.ts

echo    Done.

REM ── 5. COMPONENTS ────────────────────────────────────────────
echo [5/6] Components...

mkdir src\components\ui
mkdir src\components\blog
mkdir src\components\seo
mkdir src\components\ads
mkdir src\components\analytics
mkdir src\components\layout
mkdir src\components\shared

type nul > src\components\ui\Button.tsx
type nul > src\components\ui\Badge.tsx
type nul > src\components\ui\Card.tsx
type nul > src\components\ui\Input.tsx
type nul > src\components\ui\Skeleton.tsx
type nul > src\components\ui\ThemeToggle.tsx

type nul > src\components\blog\PostCard.tsx
type nul > src\components\blog\PostList.tsx
type nul > src\components\blog\PostHeader.tsx
type nul > src\components\blog\TableOfContents.tsx
type nul > src\components\blog\TagList.tsx
type nul > src\components\blog\CategoryBadge.tsx
type nul > src\components\blog\ReadingProgress.tsx
type nul > src\components\blog\RelatedPosts.tsx
type nul > src\components\blog\ViewCounter.tsx
type nul > src\components\blog\ShareButtons.tsx

type nul > src\components\seo\JsonLd.tsx
type nul > src\components\seo\OpenGraph.tsx
type nul > src\components\seo\BreadcrumbSchema.tsx

type nul > src\components\ads\AdBanner.tsx
type nul > src\components\ads\AdSidebar.tsx
type nul > src\components\ads\InArticleAd.tsx

type nul > src\components\analytics\GoogleAnalytics.tsx
type nul > src\components\analytics\PageViewTracker.tsx

type nul > src\components\layout\Header.tsx
type nul > src\components\layout\Footer.tsx
type nul > src\components\layout\Sidebar.tsx
type nul > src\components\layout\MobileMenu.tsx
type nul > src\components\layout\Newsletter.tsx

type nul > src\components\shared\Pagination.tsx
type nul > src\components\shared\SearchBar.tsx
type nul > src\components\shared\BackToTop.tsx
type nul > src\components\shared\CookieBanner.tsx

echo    Done.

REM ── 6. LIB / HOOKS / TYPES / CONFIG / STYLES / DATA ─────────
echo [6/6] lib, hooks, types, config, styles, data...

mkdir src\lib\mdx
mkdir src\lib\seo
mkdir src\lib\analytics
mkdir src\lib\adsense
mkdir src\lib\pixel
mkdir src\lib\utils

type nul > src\lib\mdx\index.ts
type nul > src\lib\mdx\plugins.ts
type nul > src\lib\seo\index.ts
type nul > src\lib\seo\metadata.ts
type nul > src\lib\analytics\index.ts
type nul > src\lib\adsense\index.ts
type nul > src\lib\pixel\index.ts
type nul > src\lib\utils\index.ts
type nul > src\lib\utils\date.ts
type nul > src\lib\utils\string.ts

mkdir src\hooks
type nul > src\hooks\useTheme.ts
type nul > src\hooks\useReadingProgress.ts
type nul > src\hooks\useViewCounter.ts
type nul > src\hooks\useNewsletter.ts

mkdir src\types
type nul > src\types\index.ts
type nul > src\types\blog.ts
type nul > src\types\config.ts

mkdir src\config
type nul > src\config\site.ts
type nul > src\config\seo.ts
type nul > src\config\ads.ts

mkdir src\styles
type nul > src\styles\typography.css
type nul > src\styles\syntax.css

mkdir src\data
type nul > src\data\authors.ts
type nul > src\data\navigation.ts

echo    Done.

echo.
echo  =============================================
echo   All missing files created successfully!
echo  =============================================
echo.
echo  IMPORTANT - Manual step required:
echo  Your existing files at root level are untouched:
echo    app\  ^(favicon.ico, globals.css, layout.tsx, page.tsx^)
echo    public\  ^(*.svg files^)
echo    .gitignore, README.md, eslint.config.mjs,
echo    next.config.ts, package.json, postcss.config.mjs, tsconfig.json
echo.
echo  Action needed:
echo    Move your root app\ folder INTO src\  so it becomes src\app\
echo    Then delete the duplicate src\app\globals.css and src\app\layout.tsx
echo    ^(since you already have those at root app\^)
echo.
pause