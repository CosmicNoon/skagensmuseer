/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.png",
    "revision": "cfbf25c7fa49fe553768c2a801c982ed"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "6a552e92ea4359a46c9aee854f251395"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2adb017e051adf2b5efa0d2b492f1832"
  },
  {
    "url": "css/main.css",
    "revision": "049507b730e326864987e1487e188831"
  },
  {
    "url": "docs/tests/main.css",
    "revision": "a2ab99a7aba0c52d8b474cd98855f17a"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d3f74435d5da974a57a132f134e967d7"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "6c6aac732d23aab9655448a84ec13abd"
  },
  {
    "url": "ico/close-icon.svg",
    "revision": "55e0bd1ffb13411b8d712753e81ee271"
  },
  {
    "url": "ico/close-icon2.svg",
    "revision": "dc3b95536442739504b33d1004615047"
  },
  {
    "url": "ico/facebook-icon.svg",
    "revision": "a52f715ba93624a03b29b428567ee292"
  },
  {
    "url": "ico/ikoen_hvild_video.svg",
    "revision": "6aa4bfd0204924f393f16dab504489bf"
  },
  {
    "url": "ico/ikone_kort_moerk.svg",
    "revision": "699abe8da4a3dcd057ae9e48ced4d2a6"
  },
  {
    "url": "ico/ikoner_man_mrk.svg",
    "revision": "72994385c3e6df703e7f4b2e493ebfd8"
  },
  {
    "url": "ico/ikoner_man.svg",
    "revision": "2c10d69593475afb893b68794488e4a9"
  },
  {
    "url": "ico/instagram-icon.svg",
    "revision": "deeb84121ef3613fe801925f5498645f"
  },
  {
    "url": "ico/kort_pil.svg",
    "revision": "4ef461c9e22cbfdb4feb687995bf60c4"
  },
  {
    "url": "ico/kryds-martin.svg",
    "revision": "f7f039361df9725b7ff3276efb253ec8"
  },
  {
    "url": "ico/mail_ikon.svg",
    "revision": "15fdfb5fdfec15ddd720a44a52290a0c"
  },
  {
    "url": "ico/mail.svg",
    "revision": "1b71f63312f152c6238b7302f962b7c6"
  },
  {
    "url": "ico/map-icon-yellow.svg",
    "revision": "5bd174551793b90921f47d13c468bb40"
  },
  {
    "url": "ico/menu-3.svg",
    "revision": "72f2477e5546111fe58f09e5962120e7"
  },
  {
    "url": "ico/menu-4.svg",
    "revision": "c76b632e06cdb509e0dab7e20ddb3720"
  },
  {
    "url": "ico/menu-5.svg",
    "revision": "aba4124d89e61e3c70df6ba09944fc1a"
  },
  {
    "url": "ico/menu-kontakt-icon.svg",
    "revision": "d2c8e157ddf93a91fb085ce7104b03a8"
  },
  {
    "url": "ico/menu-map-icon.svg",
    "revision": "5ca8512d7c84ffd4e8efdb865245bb9d"
  },
  {
    "url": "ico/menu-museums-icon.svg",
    "revision": "1770fd22233de0a3df86d67aa8510429"
  },
  {
    "url": "ico/menu-painter-icon.svg",
    "revision": "b60fa1d3cda091df655311344e8d51d0"
  },
  {
    "url": "ico/menu-round-icon2.svg",
    "revision": "529a24b838c5b3ea6309c438c38ad72d"
  },
  {
    "url": "ico/menu-video-icon.svg",
    "revision": "a1cea2add0563b4d0fc111be53c3f52c"
  },
  {
    "url": "ico/Skagens_kunstmueer_logo_dark.svg",
    "revision": "8c69fbe5590d68d94c0f2a289022c3b6"
  },
  {
    "url": "ico/tel_ikon.svg",
    "revision": "802ec127edeb1417d8fa3269be57af75"
  },
  {
    "url": "ico/twitter-icon.svg",
    "revision": "ba51799711a29761695a5d19326f480b"
  },
  {
    "url": "ico/video_ikoen.svg",
    "revision": "a2079f04014a19beb2e851c0970f084a"
  },
  {
    "url": "img/anchershus.png",
    "revision": "73495e6fc4431614948689511c105e17"
  },
  {
    "url": "img/drachmannshus.png",
    "revision": "49ff17d059f60f88005f34f6de3c1969"
  },
  {
    "url": "img/Kort.svg",
    "revision": "dd2ef39e1a78ebe5dfa342269921c3b5"
  },
  {
    "url": "img/museum.png",
    "revision": "f6262f6b15176e7ac21a96911de8eb4f"
  },
  {
    "url": "img/plus1.png",
    "revision": "986e8d7f951d0c9589065de998386d74"
  },
  {
    "url": "img/plus3.png",
    "revision": "f799f92b3138dfd8eba88dc576903885"
  },
  {
    "url": "img/thumbnail.png",
    "revision": "c233a4a03f211d599344223bc1a03c04"
  },
  {
    "url": "index.html",
    "revision": "bb42420838a6339695965a1cf1a78fb0"
  },
  {
    "url": "js/nav.js",
    "revision": "77742f27a5d3e7c6f5479853dc42a911"
  },
  {
    "url": "js/showHide.1.js",
    "revision": "19b31c0aafad0c3b85148da3240505d7"
  },
  {
    "url": "js/showHide.js",
    "revision": "277c7079b502cd866e1e0585ca9ec56d"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "663fda6eccd18902457d7be5e58bd82e"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "c1aa10e68203fcdda4e054513d3efaee"
  },
  {
    "url": "sw-register.js",
    "revision": "bf62ae84bd77525dc6296bb9e875d1d2"
  },
  {
    "url": "video/video-poster.png",
    "revision": "44e0c8a25fdce69ef47d791c1d249127"
  },
  {
    "url": "video/video-poster.svg",
    "revision": "c03bd9f84878f66f2f3ac84d5eeca08b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
