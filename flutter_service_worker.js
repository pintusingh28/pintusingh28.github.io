'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0b9eb767d51cf497bba234e63c2af757",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "21b116e2ee9ff68d9361a37434cf2831",
"/": "21b116e2ee9ff68d9361a37434cf2831",
"main.dart.js": "0da8fdaa7130fb22b878b6e6d7ce559c",
"404.html": "f8e2980f860cb2c670a63c7b4005e2ae",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/favicon-16x16.png": "58f71ef7d59cc86103901991976dfa06",
"icons/icon-maskable-x512.png": "bccddfd51fa468fac22e353de41124e6",
"icons/android-chrome-192x192.png": "d4ebc27b2808a859045b398066fb6d1d",
"icons/apple-icon.png": "d4ebc27b2808a859045b398066fb6d1d",
"icons/apple-icon-144x144.png": "42d56ea1bfb6f17519c1fd1b2282b3ab",
"icons/android-chrome-256x256.png": "05699c2f05188d2d6f34e8079f4acdea",
"icons/apple-icon-precomposed.png": "d4ebc27b2808a859045b398066fb6d1d",
"icons/apple-icon-114x114.png": "1189665de668c5505fed3fbc0ee1d703",
"icons/icon-x512.png": "d7849370dce6c7d1aca197dd305ded92",
"icons/apple-icon-57x57.png": "4a1040f04bd83f52052a8a3dff8c5c0b",
"icons/apple-icon-152x152.png": "167e35d54752f6ee53e3e8783f65beff",
"icons/apple-icon-180x180.png": "abdea85c502e418042ea51c05270b710",
"icons/icon-maskable-x384.png": "58abe56aa42579dd3e8acdc3c25e8767",
"icons/icon-maskable-x192.png": "d0e921d0fd2d7f0ffc58429a8bf40d79",
"icons/apple-icon-76x76.png": "a75d16487cbe15af19db6f1c99bf2a80",
"icons/apple-icon-60x60.png": "24942da3778030ac769b9d9c391b21c9",
"icons/android-chrome-36x36.png": "512ed6909d7cd2a8a06b043716f6038c",
"icons/android-chrome-96x96.png": "2dc9f547e5e8dd1777250974fc2a21aa",
"icons/android-chrome-72x72.png": "3b97f928a8e078c58c2290b27f67e4f6",
"icons/icon-x192.png": "0a099b547b10851b5151b4a266ea4b1d",
"icons/icon-x384.png": "6e1624fe55ef592cd3f32108831bce24",
"icons/apple-icon-72x72.png": "3b97f928a8e078c58c2290b27f67e4f6",
"icons/apple-icon-120x120.png": "1a6ae08fc866b08aaa681a66418491f2",
"icons/android-chrome-48x48.png": "46ec9154a21e7a394c0787f6f06e1aa9",
"icons/favicon-32x32.png": "87d507ee346220f1f0390a6c218c73b4",
"icons/android-chrome-144x144.png": "42d56ea1bfb6f17519c1fd1b2282b3ab",
"manifest.json": "056bab6877364b85dfa4436f7011d4f6",
"main.dart.js_1.part.js": "7d13d2ab42e9850079ea94668d122db0",
"assets/AssetManifest.json": "96bd6945ed7995f6fad232e39d644cfb",
"assets/NOTICES": "a833e4dfe8d062e9c681fbc699b43014",
"assets/FontManifest.json": "a5d6341395a83948d0c9acdb4cd33992",
"assets/AssetManifest.bin.json": "734706caefa1a8516dd9b81d868cc45f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "80f7512d6a8bafdaad629fe0a49323ca",
"assets/fonts/MaterialIcons-Regular.otf": "ec2bebdbe0acb2e1a479b629a7a49cf1",
"assets/assets/images/ezzycare-banner.webp": "b2bd77ae59935009ad1833f1597c1ee5",
"assets/assets/images/me.webp": "9f6adc894f4ca8a62dec3228023b20d5",
"assets/assets/images/ege-money-banner.webp": "fd5dee6b57834e9392b02e089b772be0",
"assets/assets/images/shnatter-banner.webp": "2334dc1354e7cb1ff555b83eb6f98130",
"assets/assets/images/now-app-banner.webp": "08b362c53bf7ebced12c9967a88011fe",
"assets/assets/images/primopay-banner.webp": "c842c3e0239d3143bc7c6cdc185059c6",
"assets/assets/vectors/code.svg": "fc8d570fe295edfdd6c8c1e5ab926cee",
"assets/assets/vectors/landingBackground.svg": "f81c9d898cc468afbdbea573ca061ea7",
"assets/assets/vectors/logo.svg": "b863e472c622dc6dfe8a33031c0c0db6",
"assets/assets/icons/language/javascript.svg": "7c9d17daee75681ecfcb149162649db4",
"assets/assets/icons/language/flutter.svg": "09a7f36813047716b037306f7abd9e8b",
"assets/assets/icons/language/nodejs.svg": "a0cfea51942be87914f0e7adf6e3d783",
"assets/assets/icons/language/kotlin.svg": "3ff888e6a42d937d94fe59e4c56f9849",
"assets/assets/icons/language/dart.svg": "64dbcb0e0832065a50582e08249569bc",
"assets/assets/icons/language/typescript.svg": "18e7ae5d5d54dddb19deaaddf64b2d9f",
"assets/assets/icons/language/swift.svg": "27c5d98df8715b081ba3f13e3daf795c",
"assets/assets/icons/deviceMode.svg": "bacb03d4bafa1f01dc45d1152785beab",
"assets/assets/icons/email.svg": "32efb25c13aeaeb4c7f979673393e7ba",
"assets/assets/icons/social/github.svg": "e9175cb0dc2df0bb98e8ced84ef2398e",
"assets/assets/icons/social/x.svg": "fd698b257ef5fbd0a62ae1d09a0124bf",
"assets/assets/icons/social/instagram.svg": "ee1d37ccfc39c1aee5e0788b5cd5e2fa",
"assets/assets/icons/social/linkedin.svg": "6d7b911ab88256a5e7e8efaaaaa153f3",
"assets/assets/icons/darkMode.svg": "c2063c1a6f9915d71480ebd44f5a5422",
"assets/assets/icons/phone.svg": "ca0406119de9c6f283ce98d5074bde6e",
"assets/assets/icons/lightMode.svg": "996448140994de4fa9f4bcc407351fe0",
"assets/assets/icons/arrowUpRight.svg": "e26de6f1501d03e56d69b67938a5fa97",
"assets/assets/icons/menu.svg": "029d7087b252df2b672433245d2b31a3",
"assets/assets/fonts/EuclidCircularA-MediumItalic.ttf": "f95599704a4ceabc75268feb2be931f7",
"assets/assets/fonts/EuclidCircularA-Light.ttf": "54330d7091c1d3d05f033a08b7fb9950",
"assets/assets/fonts/EuclidCircularA-BoldItalic.ttf": "3d49fe6bbdb2c1fd6fb78c9f38011733",
"assets/assets/fonts/EuclidCircularA-Bold.ttf": "c9c7790611487f10ab2d674f6a8909d6",
"assets/assets/fonts/EuclidCircularA-Medium.ttf": "f27978ebb847738736f0bc1b76a96c0e",
"assets/assets/fonts/EuclidCircularA-SemiBoldItalic.ttf": "2d80645bfb28d69acf5f76918767a39f",
"assets/assets/fonts/EuclidCircularA-LightItalic.ttf": "252db82ae4b26cddb9837016461b93a5",
"assets/assets/fonts/EuclidCircularA-Regular.ttf": "e191fa05c7960306760e908cc169f28b",
"assets/assets/fonts/EuclidCircularA-SemiBold.ttf": "1fd0745bac683551717ebb18a78ef5eb",
"assets/assets/fonts/EuclidCircularA-Italic.ttf": "77ab61abcedb5a343e5ab0e1fb3edd7b",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
