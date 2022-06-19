const APP_PREFIX = 'FoodFest-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const FILES_TO_CACHE =[
    "./public/css/styles.css",
    "./public/icon-72x72.png",
    "./public/icon-128x128.png",
    "./public/icon-96x96.png",
    "./public/icon-144x144.png",
    "./public/icon-152x152.png",
    "./public/icon-192x192.png",
    "./public/icon-384x384.png",
    "./public/icon-512x512.png",
    "./public/js/index.js",
    "./public/index.html"
]

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
          console.log('installing cache : ' + CACHE_NAME)
          return cache.addAll(FILES_TO_CACHE)
        })
      )

})