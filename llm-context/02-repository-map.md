# Repository Map

## Top-Level Pages
- Marketing site pages: [index.html](index.html), [about-us.html](about-us.html), [contact-us.html](contact-us.html), [packages.html](packages.html), [portfolio.html](portfolio.html), [web-design.html](web-design.html), [ecommerce.html](ecommerce.html), [seo.html](seo.html), [video-animation.html](video-animation.html), [mobile-app.html](mobile-app.html), [marketing-collateral.html](marketing-collateral.html), [creative-copywriting.html](creative-copywriting.html), [web-portal.html](web-portal.html), [reviews.html](reviews.html).

What lives here:
- Page-specific content sections, forms (`leadStepForm`/`regForm`), sliders, and inline variables for chat on some pages (e.g., `authCode`, `socketUrl` in [digital-marketing.html](digital-marketing.html), [packages.html](packages.html)).

## assets/css
- [assets/css/all.min.css](assets/css/all.min.css): Consolidated vendor CSS (Bootstrap 4, Swiper CSS).
- [assets/css/custom.min.css](assets/css/custom.min.css): Site-specific styles (components, theming).
- [assets/css/responsive.css](assets/css/responsive.css): Responsive rules and Swiper button tweaks.
- [assets/css/ledge/sweetalert.css](assets/css/ledge/sweetalert.css): SweetAlert styles.

Common edits:
- Styling adjustments → `custom.min.css` or `responsive.css` (prefer to keep vendor CSS as-is).

## assets/js
- [assets/js/all.min.js](assets/js/all.min.js): Vendor bundle (GSAP, Lottie, Fancybox, utilities).
- [assets/js/custom.min.js](assets/js/custom.min.js): Site initializations (Swiper sliders, lottie init, section behaviors).
- [assets/js/socketPackage/socket.io.js](assets/js/socketPackage/socket.io.js): Socket.IO client library.
- [assets/js/socketPackage/socket.js](assets/js/socketPackage/socket.js): Live chat/presence init, event emits; depends on page inline `authCode`, `socketUrl`.
- [assets/js/socketPackage/online-offline.js](assets/js/socketPackage/online-offline.js): Emits presence on tab hide/show.
- [assets/js/web-workers/backend/web-worker-backend.js](assets/js/web-workers/backend/web-worker-backend.js): On first user interaction, spawns workers that request minified helper scripts (AJAX, alerts, lead/pricing). Not present in this repo → risk.

Common edits:
- Sliders/animations/UX tweaks → `custom.min.js`.
- Chat behavior → `socket.js` / `online-offline.js` (be careful; external dependency).
- Avoid editing `all.min.js` unless replacing vendor bundle wholesale.

## assets/images
- Lottie JSON assets in [assets/images/lottie](assets/images/lottie/).
- Many “images” are `.html` placeholders due to mirroring (e.g., under [assets/images/portfolio](assets/images/portfolio/)); verify actual assets before depending on them.

## assets/order
- [assets/order/js/lib.js](assets/order/js/lib.js): jQuery 2.1.1 + Bootstrap 3.3.7 bundle for order/legal pages.
- [assets/order/css](assets/order/css): Styles for order/legal section.
- Used by [order/privacy-policy.html](order/privacy-policy.html), [order/terms-and-conditions.html](order/terms-and-conditions.html).

## order (root)
- Legal pages: [order/privacy-policy.html](order/privacy-policy.html), [order/terms-and-conditions.html](order/terms-and-conditions.html).

## “Start Here” for Agents
- For content/layout changes: open the target page in root (.html).
- For styling: `assets/css/custom.min.css` and `assets/css/responsive.css`.
- For sliders/UX: `assets/js/custom.min.js`.
- For chat/presence: `assets/js/socketPackage` (check inline `authCode`/`socketUrl` on each page).
- Validate form flows carefully due to missing worker payloads referenced by `web-worker-backend.js`.
