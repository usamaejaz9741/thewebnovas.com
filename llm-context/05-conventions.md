# Conventions

## Naming/Structure
- Pages: one service/topic per `.html` with shared header/nav.
- Forms: classes like `leadStepForm`, IDs like `regForm`; hidden `_token` present.
- Sliders: class-based selectors (e.g., `.packageSlider`, `.clientLogoSlider`) initialized in `custom.min.js`.
- Animations: `<lottie-player>` tags in markup; Lottie JSON under [assets/images/lottie](assets/images/lottie/).

## Architectural Conventions
- Keep vendor logic in [assets/js/all.min.js](assets/js/all.min.js) and site initializers in [assets/js/custom.min.js](assets/js/custom.min.js).
- Chat/presence code isolated under [assets/js/socketPackage](assets/js/socketPackage) and relies on inline page variables.
- Worker bootstrapper defers heavy helper logic until first interaction.

## Testing/Validation
- No automated tests; rely on browser console/network observations.
- Validate sliders render, animations play, and forms progress through steps.

## Error Handling/Logging
- Minimal logging (e.g., “socket disconnected” in [assets/js/socketPackage/socket.js](assets/js/socketPackage/socket.js)).
- No structured error/reporting in site script; GTM likely used for analytics.

## Typing/State Management
- Plain JavaScript; no TypeScript or formal state library.

## Things Future Agents Should Imitate
- Follow existing selectors and class names when adding new sliders/sections.
- Add new Lottie assets under [assets/images/lottie](assets/images/lottie/) and reference with existing patterns.
- For new interactive features, initialize in [assets/js/custom.min.js](assets/js/custom.min.js) after vendor load.
- Keep external config (chat vars) inline at page bottom if adding new pages that need chat.
