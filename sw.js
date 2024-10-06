// Name of the cache
const CACHE_NAME = 'my-site-cache-v1';

// Files to cache (add all the assets you want your service worker to cache)
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/images/logo.png'
];

// Install event: cache files during service worker installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: serve cached content if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the cached response
        if (response) {
          return response;
        }
        // Fall back to network fetch if not in cache
        return fetch(event.request);
      })
  );
});

// Activate event: update the cache if there are new files
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete outdated caches
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
