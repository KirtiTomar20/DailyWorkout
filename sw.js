// Tiny offline cache for the Daily app.
// Bump CACHE when you edit files so devices pick up the new version.
const CACHE = "daily-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.json",
  "./icon.svg",
  "./images/dumbbell-row.png",
  "./images/chest-press.png",
  "./images/shoulder-press.png",
  "./images/reverse-fly.png",
  "./images/bicep-curl.png",
  "./images/dead-bug.png",
  "./images/chair-squat.png",
  "./images/romanian-deadlift.png",
  "./images/glute-bridge.png",
  "./images/farmer-carry.png",
  "./images/lateral-raise.png",
  "./images/triceps-extension.png",
  "./images/plank.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first so edits show up when online; falls back to cache offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("./index.html")))
  );
});
