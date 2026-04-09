# Tech Stack

## Languages and Frameworks
- HTML5, CSS3, JavaScript (no TypeScript present).
- No server-side framework in repository; static site.

## Key Libraries (Visible Evidence)
- Bootstrap 4 CSS present in [assets/css/all.min.css](assets/css/all.min.css) (top banner).
- Swiper (CSS references “Swiper 9.4.1” in [assets/css/all.min.css](assets/css/all.min.css)).
- GSAP included within [assets/js/all.min.js](assets/js/all.min.js) (animation/timeline code).
- Lottie Web and `lottie-player` web component (Lottie Web ^5.10.0, `lottie-player` 2.0.2 strings in [assets/js/all.min.js](assets/js/all.min.js)); JSON animations under [assets/images/lottie](assets/images/lottie/).
- jQuery 3.7.0 loaded from CDN on most pages (search `code.jquery.com/jquery-3.7.0.min.js` in [index.html](index.html), [packages.html](packages.html), [digital-marketing.html](digital-marketing.html)).
- Socket.IO client in [assets/js/socketPackage/socket.io.js](assets/js/socketPackage/socket.io.js).
- Fancybox components included within [assets/js/all.min.js](assets/js/all.min.js) (class names, AJAX loader).
- SweetAlert styles in [assets/css/ledge/sweetalert.css](assets/css/ledge/sweetalert.css).

Special “order/legal” pages:
- jQuery v2.1.1 and Bootstrap v3.3.7 within [assets/order/js/lib.js](assets/order/js/lib.js).
- Bootstrap 4 stylesheet copy in [assets/order/css/style.css](assets/order/css/style.css) (header comment; but JS in that section is Bootstrap 3).

## Tooling / Build / Test / Lint / Format
- No `package.json`, build tools (Webpack/Vite/Gulp), or test tooling in repo.
- Minified bundles committed: [assets/js/all.min.js](assets/js/all.min.js), [assets/js/custom.min.js](assets/js/custom.min.js), minified CSS in [assets/css](assets/css).
- Implication: site is maintained as static assets; changes occur directly in HTML/CSS/JS.

## Infrastructure / Deployment Clues
- Google Tag Manager (GTM-5ZPSVTZG) across pages (e.g., [index.html](index.html), [web-design.html](web-design.html)).
- External ADA plugin loaded at page end in [index.html](index.html).
- Live chat via external Socket.IO server `https://chat.ledgecrm.com` (e.g., [digital-marketing.html](digital-marketing.html), [packages.html](packages.html)).
- CDN dependency: jQuery 3.7 via `code.jquery.com`.

## Version and Runtime Clues
- Swiper: CSS banner indicates “Swiper 9.4.1” (in [assets/css/all.min.css](assets/css/all.min.css)).
- Lottie Web: “^5.10.0” strings; `lottie-player` “2.0.2” (in [assets/js/all.min.js](assets/js/all.min.js)).
- jQuery: 3.7.0 on most pages via CDN; 2.1.1 in [assets/order/js/lib.js](assets/order/js/lib.js).
- Bootstrap: 4.x CSS (site-wide), Bootstrap 3.3.7 JS (order/legal bundle).
