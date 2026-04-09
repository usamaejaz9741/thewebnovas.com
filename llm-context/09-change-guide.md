# Change Guide

## Approach Changes Safely
- Prefer page markup and site CSS/JS (`custom.min.js`) over editing vendor bundles.
- Keep main-site and order/legal stacks separate to avoid version conflicts.
- For features that depend on external services (chat, forms), annotate assumptions and verify in a connected environment.

## Trace Behavior Before Editing
- Reproduce the behavior with a local HTTP server.
- Use DevTools:
  - Elements → locate selectors/classes tied to sliders/animations.
  - Sources → confirm `custom.min.js` contains the initializer.
  - Network → check for worker payload 404s and Socket.IO calls.
  - Console → note any runtime errors from missing globals.

## Validate Changes
- Functional: sliders move as configured; animations render; forms still step/validate.
- Non-functional: no new console errors; no additional 404s; page remains responsive.
- Visual: check responsive breakpoints (inspect `responsive.css`).

## Evidence to Gather (Before/After)
- Screenshots or short screencasts of target sections.
- Console/network logs (noting errors resolved or unchanged).
- Exact files and selectors touched; rationale for parameter changes (e.g., Swiper options).

## Minimal Safe Workflow
1. Start server:
   ```bash
   python -m http.server 8080
   ```
2. Identify page/section; confirm the responsible initializer in [assets/js/custom.min.js](assets/js/custom.min.js).
3. Make the smallest change that achieves the outcome (HTML/CSS/JS).
4. Reload; verify functionality and absence of new errors.
5. For chat/forms, clearly mark “Not confirmed from repository evidence” if a full end-to-end test is blocked by missing external pieces.
6. Prepare a brief change note referencing concrete files and observed effects; include regression checks you performed.
