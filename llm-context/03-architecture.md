# Architecture

## Main Modules
- Pages (HTML): Content + forms + per-page inline config (e.g., `authCode`, `socketUrl`).
- Vendor JS: [assets/js/all.min.js](assets/js/all.min.js) (GSAP, Lottie, Fancybox, helpers).
- Site JS: [assets/js/custom.min.js](assets/js/custom.min.js) (initializes Swiper instances, Lottie banners, and UI interactions).
- Chat/Presence: [assets/js/socketPackage/socket.js](assets/js/socketPackage/socket.js), [assets/js/socketPackage/online-offline.js](assets/js/socketPackage/online-offline.js).
- Worker Bootstrapper: [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js) (loads minified helpers via dedicated workers on first interaction).
- Styles: [assets/css/all.min.css](assets/css/all.min.css), [assets/css/custom.min.css](assets/css/custom.min.css), [assets/css/responsive.css](assets/css/responsive.css).

## Execution Flow (Typical Page)
1. HTML/CSS load → navigation, hero sections.
2. Vendor JS loads ([assets/js/all.min.js](assets/js/all.min.js)), then site JS ([assets/js/custom.min.js](assets/js/custom.min.js)).
3. Site JS initializes:
   - Swiper sliders: `.packageSlider`, `.testimonailSlider`, `.clientLogoSlider`, `.servicesSlider`, etc.
   - Lottie animations (banner + service icons).
4. User interaction triggers [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js) to spawn web workers that request minified helper scripts (AJAX, alerts, lead/pricing). Not present in this repo → form-related features may not activate locally.
5. Socket scripts connect to external server if per-page vars are set and globals exist; presence events fire on `visibilitychange`.

## Data/Request Lifecycle (Client-Side)
- Forms:
  - Present as multi-step forms (`leadStepForm`, `regForm`) with `action="javascript:void(0)"`, implying JS-driven submission.
  - Referenced helper scripts (via workers) likely handle AJAX posting and validation.
  - Not confirmed from repository evidence due to missing worker payloads.
- Chat/Presence:
  - On `socket.connect`, emits `visitorData` with ip/url/date/type/websiteId. On visibility change, emits ONLINE/OFFLINE via `socketHelper.tabSwitch()`.
  - Requires inline `authCode` + `socketUrl` and global `ip`, `url`, `isDebug` (not always set on all pages).

## Boundaries
- Client-only code in repo; backends and analytics configuration are external (Ledge CRM chat server, GTM, ADA plugin).
- No local persistence or server-rendered pages in the repository.

## Patterns
- Initialization-driven site script for carousels and animations.
- Lazy-loading via web workers (performance-aware, but currently unresolved due to missing payloads).
- Externalized feature flags/config via inline variables in each HTML page.

## Architectural Hotspots
- Web workers + missing minified helper scripts (critical for forms/pricing).
- Chat globals (`authCode`, `socketUrl`, `ip`, `url`) and external connectivity.
- Mixed library versions between main site and “order/legal” section.
