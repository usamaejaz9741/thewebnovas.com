# Open Questions

- Form Submission Backend
  - What endpoint(s) do the forms post to? Are there validation/anti-spam layers? Not confirmed from repository evidence.

- Worker Helper Scripts
  - The worker bootstrapper references minified helper scripts (AJAX, SweetAlert, general/pricing/lead management). Where are these stored and how are they deployed? Not confirmed from repository evidence.

- Chat Globals
  - On pages without explicit `authCode`/`socketUrl`, how are `ip`, `url`, and `isDebug` provided? Is there a global initializer elsewhere in production? Not confirmed from repository evidence.

- Analytics/ADA Plugin
  - What GTM tags and ADA plugin features are expected to interact with the DOM? Any constraints we must respect? Not confirmed from repository evidence.

- Media Assets
  - Several image paths resolve to `.html` placeholders due to HTTrack. Where are the canonical media assets stored? Not confirmed from repository evidence.

- Release/Deployment
  - What is the deployment pipeline (hosting provider, cache/CDN rules)? Any pre-deploy checks? Not confirmed from repository evidence.
