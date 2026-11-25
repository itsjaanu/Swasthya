/* Optional offline shell cache. GitHub Pages serves this file; register it only on HTTPS. */
const CACHE='swasthya-shell-v1';
const ASSETS=['./','./index.html','./css/app.css','./css/responsive.css','./js/main.js','./js/app.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
