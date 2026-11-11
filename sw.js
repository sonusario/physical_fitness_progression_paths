// Offline support: serve the cached copy first, refresh it in the background,
// and tell open pages when a newer build of the app has arrived.
const CACHE = 'fpp-v3';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png'];
const buildOf = text => { const m = /APP_BUILD = ['"]([^'"]*)['"]/.exec(text || ''); return m ? m[1] : ''; };
const ONE = { ignoreSearch: true, ignoreVary: true };

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {}).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => e.waitUntil((async () => {
  // Only this app's old caches: every app on this domain shares one Cache Storage.
  const names = await caches.keys();
  await Promise.all(names.filter(n => n.startsWith('fpp-') && n !== CACHE).map(n => caches.delete(n)));
  await self.clients.claim();
})()));

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const isPage = e.request.mode === 'navigate';
  const key = isPage ? new Request(new URL('./', self.location.href)) : e.request;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(key, ONE);
    const seen = hit ? hit.clone() : null;  // read later, after hit is handed to the page
    const refresh = (async () => {
      try {
        const r = await fetch(e.request, { cache: 'no-store' });
        if (!r || !r.ok) return null;
        if (isPage && seen) {
          const [a, b] = await Promise.all([seen.text(), r.clone().text()]);
          const ba = buildOf(a), bb = buildOf(b);
          if (bb && ba !== bb) {
            const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
            for (const w of wins) w.postMessage({ type: 'update-ready', build: bb });
          }
        }
        await c.put(key, r.clone());
        return r;
      } catch (err) { return null; }
    })();
    if (hit) { e.waitUntil(refresh); return hit; }
    const fresh = await refresh;
    return fresh || new Response('Offline, and this page has not been cached yet.', { status: 504, headers: { 'Content-Type': 'text/plain' } });
  }));
});
