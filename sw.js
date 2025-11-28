const CACHE_NAME = 'ma-grocerie-v1';

self.addEventListener('install', function(event) {
    console.log('Service Worker installé');
    self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
    // Laisser passer toutes les requêtes
    event.respondWith(fetch(event.request));
});
