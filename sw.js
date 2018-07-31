const CACHE_NAME = 'cache-v1';  
const urlsToCache = [  
  '/',
  // './currency_conversion.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
];

self.addEventListener('install', event => {  
  caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(urlsToCache);
    });
});

// self.addEventListener('fetch', event => {  
//   const { request } = event;

//   event.respondWith(caches.open(CACHE_NAME)
//     .then(cache => cache.match(request))
//     .then(matching => matching || fetch(request)));

//   event.waitUntil(caches.open(CACHE_NAME)
//     .then(cache => fetch(request)
//       .then(response => cache.put(request, response))));
// });

