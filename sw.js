const CACHE_NAME = 'atoyac-radio-v1';
const urlsToCache = [
  './',
  './index.html',
  'https://code.jquery.com/jquery-3.2.1.min.js',
  'https://extassisnetwork.com/player/Luna/luna.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});