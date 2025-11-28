// Service Worker qui ne fait absolument rien
self.addEventListener('install', function(event) {
    console.log('Service Worker installé - mode pass-through');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});

// Ne pas intercepter les requêtes - tout passe directement
self.addEventListener('fetch', function(event) {
    // Laisser toutes les requêtes passer sans interception
    return;
});
