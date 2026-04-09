# Risk Register

- Risk: Missing worker helper payloads
  - Why: `web-worker-backend.js` spawns workers that expect minified scripts (AJAX, alerts, lead/pricing) not present in repo.
  - Impact: Form submission/validation/pricing logic may not execute; runtime errors/404s.
  - Inspect: [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js); browser network for worker script 404s.
  - Safer strategy: Avoid relying on these flows locally; if editing form UX, confine to markup/validation; obtain original helper scripts before changing core behaviors.

- Risk: External chat dependency
  - Why: Socket.IO connects to `https://chat.ledgecrm.com` and requires `authCode`, `socketUrl`, possibly `ip/url` globals.
  - Impact: Connection failures/errors locally; noisy logs; analytics effects.
  - Inspect: [assets/js/socketPackage/socket.js](assets/js/socketPackage/socket.js), [assets/js/socketPackage/online-offline.js](assets/js/socketPackage/online-offline.js); page-level inline vars (e.g., [digital-marketing.html](digital-marketing.html)).
  - Safer strategy: Gate chat init behind presence of required vars; do not modify unless necessary.

- Risk: Mixed library versions (main vs. order/legal)
  - Why: Main site uses Bootstrap 4 CSS, jQuery 3.7; order/legal pages bundle jQuery 2.1.1 and Bootstrap 3.3.7 JS.
  - Impact: Conflicts if assets cross-contaminate; unexpected UI issues.
  - Inspect: [assets/order/js/lib.js](assets/order/js/lib.js), [assets/order/css](assets/order/css).
  - Safer strategy: Keep contexts isolated; avoid globally including order/legal JS on main pages.

- Risk: Minified vendor bundles
  - Why: Hard to debug/patch precisely.
  - Impact: Changes risky; regressions hard to trace.
  - Inspect: [assets/js/all.min.js](assets/js/all.min.js).
  - Safer strategy: Prefer adjustments in [assets/js/custom.min.js](assets/js/custom.min.js) or page markup/CSS; replace vendor bundle only with verified equivalents.

- Risk: HTTrack artifacts in images
  - Why: Many “image” paths point to `.html` placeholders.
  - Impact: Broken visuals; layout inconsistencies.
  - Inspect: [assets/images](assets/images) subfolders (e.g., portfolio and technology subtrees).
  - Safer strategy: Verify assets exist before referencing; replace with real images where needed.

- Risk: Analytics/ADA plugin side effects
  - Why: GTM and ADA plugin run remotely; logic not visible here.
  - Impact: Hard to predict event tags, DOM modifications.
  - Inspect: Page bottoms and GTM snippets on pages like [index.html](index.html).
  - Safer strategy: Avoid altering GTM snippets; validate changes in an environment with network access.
