# Project Overview

This repository is a static marketing website for a digital agency (“The Web Novas”), mirrored via HTTrack. It presents services, portfolio, reviews, and pricing “packages,” with lead capture via multi-step forms and a live chat/presence integration. Pages share a common header/navigation and rely on a vendor JS bundle and site JS for sliders and animations.

- Home/sections: see index and service pages such as [index.html](index.html), [web-design.html](web-design.html), [digital-marketing.html](digital-marketing.html), [packages.html](packages.html), [portfolio.html](portfolio.html).
- Shared assets: CSS in [assets/css](assets/css), JS in [assets/js](assets/js), images/lottie assets in [assets/images](assets/images).

## Product Purpose
- Showcase agency capabilities, portfolio, and pricing to drive inquiries.
- Capture leads via on-page forms and initiate chat or callbacks.

## Main Users/Consumers
- Prospective clients evaluating services.
- Internal marketing/sales (analyzing GTM, chat presence, form submissions).

## High-Level Architecture
- Static HTML/CSS/JS site.
- Vendor bundle + site script initialize UI: sliders (Swiper), animations (Lottie), and other UX elements. See [assets/js/all.min.js](assets/js/all.min.js), [assets/js/custom.min.js](assets/js/custom.min.js).
- Live chat/presence via Socket.IO client to an external server, with per-page `authCode` and `socketUrl`. See [assets/js/socketPackage/socket.js](assets/js/socketPackage/socket.js), [assets/js/socketPackage/online-offline.js](assets/js/socketPackage/online-offline.js), and page-level inline vars in [digital-marketing.html](digital-marketing.html) and [packages.html](packages.html).
- Web worker bootstrapper defers loading of several minified worker scripts (AJAX helpers, alerts, lead/pricing management). See [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js). The referenced worker payloads are not present in this repo (risk).

## Key Systems/Components
- UI/Animations: Swiper, GSAP, Lottie + `lottie-player` web component. See [assets/js/custom.min.js](assets/js/custom.min.js), [assets/js/all.min.js](assets/js/all.min.js).
- Lead Forms: `leadStepForm`/`regForm` patterns on pages like [index.html](index.html), [about-us.html](about-us.html), [packages.html](packages.html).
- Chat/Presence: Socket.IO client stack under [assets/js/socketPackage](assets/js/socketPackage).
- Analytics: Google Tag Manager (GTM-5ZPSVTZG) present across pages (e.g., [index.html](index.html), [web-design.html](web-design.html)).
- Order/legal sub-stack: separate “order” CSS/JS under [assets/order](assets/order) used by [order/privacy-policy.html](order/privacy-policy.html) and [order/terms-and-conditions.html](order/terms-and-conditions.html).

## Important Risks and Unknowns
- Missing worker payloads referenced by [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js) (AJAX, lead/pricing management). Form behavior likely incomplete locally.
- External chat dependency (`authCode`, `socketUrl`, `ip/url` globals). Local runtime may emit errors if values are absent.
- Mixed library versions (main site uses jQuery 3.7 + Bootstrap 4 CSS; “order” pages bundle jQuery 2.1.1 + Bootstrap 3.3.7 in [assets/order/js/lib.js](assets/order/js/lib.js)).
- Many “images” are HTTrack HTML placeholders under [assets/images](assets/images); content fidelity uncertain.

## How To Use This Context
- Treat this as the canonical, evidence-backed memory for future agents. Start with 00–03 for orientation, use 02 (repo map) to find files, 04 (workflow) to run/debug, 05 (conventions) to mirror style, 06–07 (risks/readiness) before edits, 09 (change guide) for safe execution.
- When behavior depends on external services (chat, GTM, ADA plugin), mark “Not confirmed from repository evidence” and validate in an environment with network access before shipping.
