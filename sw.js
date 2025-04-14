self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("mingling-reminder").then(function(cache) {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/logic.js",
                "/quotes.json",
                "/manifest.json",
                "/icon.png"
            ]);
        })
    );
});