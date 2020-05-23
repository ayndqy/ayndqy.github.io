var CACHE_NAME = 'notecards-cache-v1';

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			console.log('Opened cache');
			return cache.addAll([
				'/',
				'./index.html',
				'./app.css',
				'./fonts/fonts.css',
				'./build/bundle.js',
				'./build/bundle.css'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);

	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});