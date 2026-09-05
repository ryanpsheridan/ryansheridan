const CACHE = "golftrip-v7";
const NET_TIMEOUT = 3000;

// The page needs its runtime, React, Leaflet, fonts and photos to render at
// all, so the whole asset set is precached rather than left to runtime
// caching. That is the difference between working on a course with no signal
// and showing a blank screen.
const ASSETS = [
  "/golftrip/assets/photo-backyard.jpg",
  "/golftrip/assets/photo-bigx.jpg",
  "/golftrip/assets/photo-bluewater.jpg",
  "/golftrip/assets/photo-breakfast.jpg",
  "/golftrip/assets/photo-chubby.jpg",
  "/golftrip/assets/photo-fmbrew.jpg",
  "/golftrip/assets/photo-palmcity.jpg",
  "/golftrip/assets/photo-twinpeaks.jpg",
  "/golftrip/assets/logo-splitwise.png",
  "/golftrip/",
  "/golftrip",
  "/golftrip/manifest.json",
  "/golftrip/icon-192.png",
  "/golftrip/icon-512.png",
  "/golftrip/assets/032d5767-fafa-4122-b94c-4c30fa135a58.woff2",
  "/golftrip/assets/09429051-9fa6-47b3-b660-2b35e9047ae2.woff2",
  "/golftrip/assets/0d276d84-f013-4338-b172-9895cdb0db0e.js",
  "/golftrip/assets/18e41d0a-17e9-492f-85c9-bd05536dafe4.woff2",
  "/golftrip/assets/1fa0a412-1b80-472d-8191-e2d41dada281.woff2",
  "/golftrip/assets/22a3bb87-434e-4885-bcd6-2bb567d4941b.woff2",
  "/golftrip/assets/26f27325-4b4a-4ef1-aac8-818db3c6e8b0.woff2",
  "/golftrip/assets/368889f2-af08-45de-a255-ba458ae36e7a.jpg",
  "/golftrip/assets/38cf5d1d-187f-4007-ba71-a098de64b86f.jpg",
  "/golftrip/assets/3e8fa1ff-3014-4ed1-9513-c8ba5affe1d9.woff2",
  "/golftrip/assets/41f50196-a48c-40fe-aa59-ec3a5dca5597.woff2",
  "/golftrip/assets/4d18a40c-98be-422a-869f-327e1c5cdf76.woff2",
  "/golftrip/assets/53fbbca4-9d41-40e8-9926-a407ce00e83f.woff2",
  "/golftrip/assets/58bdb5ee-87a9-4822-b265-88b1c28a2997.woff2",
  "/golftrip/assets/5c370eae-9580-43c7-a14b-4674a39345d9.png",
  "/golftrip/assets/5eddd9a2-a346-4045-9b58-646594fa3689.woff2",
  "/golftrip/assets/615c6723-83bb-4565-a94b-bebef393b223.png",
  "/golftrip/assets/652f5b0e-1f37-411e-bf61-bb9f311ce1cb.woff2",
  "/golftrip/assets/68f363a0-a5a1-443c-aa2c-dc812f1b2842.js",
  "/golftrip/assets/6be00f72-a1a2-4a63-b7b2-0c00c67c6cca.png",
  "/golftrip/assets/6c4bd310-4dbb-46ca-a739-394111b92a31.woff2",
  "/golftrip/assets/6fa97095-035f-4253-8b07-8409f03e347d.woff2",
  "/golftrip/assets/700973cd-a64d-4c32-a0de-78b50cb27e74.woff2",
  "/golftrip/assets/731ca771-afc1-4989-a381-20de594ad8f6.jpg",
  "/golftrip/assets/87121de2-d969-4cee-be26-4332df028ee3.woff2",
  "/golftrip/assets/93d2894c-a1c5-4857-a34d-482eeb403ae9.woff2",
  "/golftrip/assets/97873b0b-3118-4852-9785-b679fe1cbff9.woff2",
  "/golftrip/assets/9d40224f-4e5d-49d9-9c01-ba627b010c79.js",
  "/golftrip/assets/a012dc2b-d35c-4046-8b93-8030db9bddf3.js",
  "/golftrip/assets/bc55da1b-4ca2-4131-a30c-65d28c254136.woff2",
  "/golftrip/assets/cc9bc872-fe3b-4f3d-b5d6-52b9d98a4056.png",
  "/golftrip/assets/cf1948a0-ba15-4cdd-95d2-ac6fd4afca8d.woff2",
  "/golftrip/assets/dd5757c9-7dd9-4712-85e1-48debbfb398e.png",
  "/golftrip/assets/ded8e158-fb89-460a-a853-f71a478858f0.woff2",
  "/golftrip/assets/df6146bf-a944-4024-b27b-c2b04d93fb17.woff2",
  "/golftrip/assets/ea728f9e-1619-41f0-87c8-a1c202c16799.woff2",
  "/golftrip/assets/ec05aa4b-ac67-4c62-9caa-723f2bd5ac59.woff2",
  "/golftrip/assets/f729e61b-3e54-420b-9fda-6c55aac3b9a2.woff2",
  "/golftrip/assets/feff1447-96fd-4e17-9fd7-212ea9f4d7af.woff2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(ASSETS.map((url) => cache.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

function save(req, res) {
  if (res && res.ok) {
    const copy = res.clone();
    caches.open(CACHE).then((cache) => cache.put(req, copy));
  }
  return res;
}

// Reject rather than hang, so a dead connection falls back to cache quickly
// instead of leaving the page on a white screen.
function fromNetwork(req, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    fetch(req).then(
      (res) => { clearTimeout(timer); resolve(res); },
      (err) => { clearTimeout(timer); reject(err); }
    );
  });
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isDoc = req.mode === "navigate" ||
    (req.headers.get("accept") || "").indexOf("text/html") !== -1;

  if (isDoc) {
    // The page changes on every deploy, so try the network first: cache-first
    // here means you always see the previous version until a second reload.
    event.respondWith(
      fromNetwork(req, NET_TIMEOUT)
        .then((res) => save(req, res))
        .catch(() => caches.match(req).then((c) => c || caches.match("/golftrip/")))
    );
    return;
  }

  // Assets are uuid-named and immutable, so the cache is authoritative and
  // there is nothing to revalidate.
  event.respondWith(
    caches.match(req).then((cached) =>
      cached || fetch(req).then((res) => save(req, res)).catch(() => cached)
    )
  );
});
