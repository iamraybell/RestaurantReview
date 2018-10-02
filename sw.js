
const CACHE_NAME = "restaurant_reviews_cache_v1";
let urlsToCache = [
  "/",
  "sw_reg.js",
  "./index.html",
  "./restaurant.html",
  "./js/main.js",
  "./js/restaurant_info.js",
  "./data/restaurants.json",
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
  "./css/styles.css",
  "./css/small.css",
  "./css/med.css",
  "./js/dbhelper.js",
];

self.addEventListener("fetch", function(event){
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
        if (response) {

          return response;
        }

        return fetch(event.request);

      })
      .catch(function(error){
        console.log(error, event.request);
      })
  );
});

self.addEventListener("install", function(event) {

  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {

        return cache.addAll(urlsToCache);

      })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(names){
      Promise.all(
        names.filter(function(name){
          return name.startsWith("restaurant_reviews_cache") &&
          name != CACHE_NAME;
        })
      )
    })
  );
});

