self.addEventListener("install", e => {
  console.log("[ServiceWorker] Installed");
});
self.addEventListener("fetch", e => {
  console.log("[ServiceWorker] Fetching", e.request.url);
});
