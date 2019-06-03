/* Alle Seiten cachen
self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request)
        .then(cachedResponse => cachedResponse || fetch(event.request))
);
});
 */

var CACHE_NAME = 'cache-studboard';
var urlsToCache = [
    'Praktikum Dateien/header320x34.png',
    'Praktikum Dateien/header640x67.png',
    'Praktikum Dateien/header1280x133.png',
    'Praktikum Dateien/header1920x200.png',
    'Praktikum Dateien/Projektlogo.png',
    'Praktikum Dateien/video.mp4',
    'converter.js',
    'copyright.html',
    'datenschutz.html',
    'geolocation.js',
    'haftung.html',
    'impressum.html',
    'index.html',
    'kontakt.html',
    'neueArtikel.html',
    'projekt.css',
    'Projekt1.html',
    'Projekt2.html',
    'projektuebersicht.html',
    'script.js',
    'sw.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request).then(
                    function(response) {
                        // Check if we received a valid response
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // IMPORTANT: Clone the response. A response is a stream
                        // and because we want the browser to consume the response
                        // as well as the cache consuming the response, we need
                        // to clone it so we have two streams.
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});