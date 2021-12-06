self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/style.css", "./images/logo192.png"])
        })
    );
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => {
                console.log(res)
                return res || fetch(e.request)
            })
    )
})