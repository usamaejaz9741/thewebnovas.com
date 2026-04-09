# Developer Workflow

## Setup
- Static site; no package manager or build needed.
- Use a local HTTP server to avoid CORS/worker path issues.

Example quick-serve:
```bash
# from repo root
python -m http.server 8080
# then open http://localhost:8080/index.html
```

Alternatives
- Use VS Code Live Server extension.

## Run / Debug
- Inspect console for:
  - Worker spawn logs from [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js).
  - Socket.IO connection attempts from [assets/js/socketPackage/socket.js](assets/js/socketPackage/socket.js).
- Network tab:
  - Verify vendor/site JS and CSS load correctly.
  - Expect 404 for missing worker payloads (minified helper scripts referenced by the worker bootstrapper).
  - Socket attempts to `https://chat.ledgecrm.com` on pages that define `authCode` and `socketUrl` (e.g., [digital-marketing.html](digital-marketing.html), [packages.html](packages.html)).

## Testing / Linting / Build
- None configured in repo; manual browser testing is primary.

## Env/Config Requirements
- Per-page inline variables power chat:
  - `authCode` (Base64-like string, e.g., `"Mjkw"`) and `socketUrl` (e.g., `"https://chat.ledgecrm.com/"`) found at bottom of pages like [digital-marketing.html](digital-marketing.html) and [packages.html](packages.html).
- Global `ip`, `url`, `isDebug` assumed by chat scripts but not always defined locally; absence can cause runtime errors.

## Migrations/Seeds/Setup Caveats
- Web worker payloads (AJAX/lead/pricing helpers) are not in this repo; features dependent on them will not function locally. Plan edits accordingly and coordinate to obtain those files if necessary.

## Common Failure Points
- 404s for worker payloads → form submission/validation may not work.
- Socket errors if `authCode`/`socketUrl`/globals are missing on a given page.
- Image assets under [assets/images](assets/images) include `.html` placeholders from mirroring; broken visuals possible.
- Library conflicts if main-site and order/legal bundles overlap inadvertently.
