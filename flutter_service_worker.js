'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "99dc0a109c7aab818ccee0cff14e4e39",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "4e27cb08f1d72714ba7a90b557b61a7c",
"/": "4e27cb08f1d72714ba7a90b557b61a7c",
"main.dart.js": "59a73f345fb8138100c8c5b682c1e637",
"404.html": "7be9d8a9441a36cd5b0d44036e59d99a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/favicon-16x16.png": "ef526365df08ded1855fd1170febe780",
"icons/icon-maskable-x512.png": "945ebfd83f9605dce2a814c1d32f21d4",
"icons/android-chrome-192x192.png": "2866bbcbbf18f1f9c10b6bd5a9d8b33e",
"icons/apple-icon.png": "6a8cc2fa94b18d6a89ebac6b97a07b16",
"icons/apple-icon-144x144.png": "0ac25bcf51eaae26e4e83506860df6e2",
"icons/android-chrome-256x256.png": "005969ffc0c76d99a9290613b7cabd6d",
"icons/apple-icon-precomposed.png": "6a8cc2fa94b18d6a89ebac6b97a07b16",
"icons/apple-icon-114x114.png": "b71a6bac8152b44214df850d4648e383",
"icons/icon-x512.png": "945ebfd83f9605dce2a814c1d32f21d4",
"icons/apple-icon-57x57.png": "62ec21eacbd755648ef002d4c6c76e4e",
"icons/apple-icon-152x152.png": "76772fe4dafe67213325d6c6e49a22a4",
"icons/apple-icon-180x180.png": "d8e350b21ba821dfd49428f9766337f2",
"icons/icon-maskable-x384.png": "cf1ecaef0e8221dc5e17bacd88aba4fa",
"icons/icon-maskable-x192.png": "0fd793029d72b77c3afe10942c10034c",
"icons/apple-icon-76x76.png": "0f33f6a2855f693d84cd7efae7aee50a",
"icons/apple-icon-60x60.png": "e9921433a09566830952085e2ce4d1e2",
"icons/android-chrome-36x36.png": "4929d5d987bcab2c734b6d64e9005b84",
"icons/android-chrome-96x96.png": "ccc8a1e0c4581ecb90baeb9edc2fe114",
"icons/android-chrome-72x72.png": "daaf869441fd9d81fd4b19abfb14680b",
"icons/icon-x192.png": "0fd793029d72b77c3afe10942c10034c",
"icons/icon-x384.png": "cf1ecaef0e8221dc5e17bacd88aba4fa",
"icons/apple-icon-72x72.png": "db1167916658467936c12083b2200ad2",
"icons/apple-icon-120x120.png": "4c66a94bd5abc0073da56397d300dd2c",
"icons/android-chrome-48x48.png": "fdcb0fc7c0d7dbd383e9b7da7ca13631",
"icons/favicon-32x32.png": "6320e6b0c6c7cd046df41cda3ec2a793",
"icons/android-chrome-144x144.png": "0558d913a5df0e142d31de1bbe43b0f1",
"manifest.json": "65a9d716e16148f59aa865ed1c269839",
"main.dart.js_1.part.js": "45934df1db46f5aa59f4689116d9b64d",
"assets/AssetManifest.json": "c43ba94d44cbb67e2b9e33d1fef8561e",
"assets/NOTICES": "277d00109fd942807b948e038a386f41",
"assets/FontManifest.json": "a5d6341395a83948d0c9acdb4cd33992",
"assets/AssetManifest.bin.json": "bf24cabd9e2607c6035380ffb8b19962",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5925ca644e4f327c2ea22975ae93b4bc",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/icons/deviceMode.svg": "bacb03d4bafa1f01dc45d1152785beab",
"assets/assets/icons/darkMode.svg": "c2063c1a6f9915d71480ebd44f5a5422",
"assets/assets/icons/lightMode.svg": "996448140994de4fa9f4bcc407351fe0",
"assets/assets/icons/logo.svg": "d52bec9ff2fa6378d6299f7e87cb66dd",
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
