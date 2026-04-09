# Task Readiness

## Safe Places to Change
- Static content/layout: root `.html` pages.
- Styles: [assets/css/custom.min.css](assets/css/custom.min.css), [assets/css/responsive.css](assets/css/responsive.css).
- Slider content/markup and Lottie placements in pages.
- Slider/lottie init parameters in [assets/js/custom.min.js](assets/js/custom.min.js) (with caution).

## Files to Inspect First (Common Tasks)
- Change slider behavior → [assets/js/custom.min.js](assets/js/custom.min.js).
- Tweak animations → [assets/js/custom.min.js](assets/js/custom.min.js) and assets under [assets/images/lottie](assets/images/lottie/).
- Edit navigation/sections → target `.html` page in root.
- Chat settings per page → look for inline `authCode`/`socketUrl` near page bottom (e.g., [packages.html](packages.html)) and scripts in [assets/js/socketPackage](assets/js/socketPackage).
- Forms UX → target page markup; note dependence on missing worker helper scripts.

## What Not to Change Casually
- [assets/js/all.min.js](assets/js/all.min.js) vendor bundle.
- [assets/js/socketPackage/socket.io.js](assets/js/socketPackage/socket.io.js) library.
- GTM snippets in pages.
- Order/legal bundle in [assets/order/js/lib.js](assets/order/js/lib.js) unless working specifically on legal pages.

## Recommended Workflow
1. Run a local HTTP server.
2. Reproduce the scenario; open devtools console/network.
3. Identify the responsible page and initializer (often `custom.min.js`).
4. Make focused edits; prefer markup/CSS/site JS over vendor JS.
5. Verify no new 404s or console errors; sliders/animations still work.
6. For chat- or form-related changes, confirm external variables and endpoints; otherwise treat as “Not confirmed from repository evidence.”

## Open Questions to Resolve Before Risky Changes
- Where are the AJAX/lead/pricing worker payloads hosted or committed?
- What are the expected form submission endpoints and anti-spam flows?
- Who owns GTM configuration and chat `authCode` lifecycle?
