This is a Key Component of [[Service Worker]]. 

It is used along with service worker to store request  and response of API , so it is possible to serve the resource in offline mode as well. this will reduce a network load.

**Creating and Accessing a Cache**
```js
// Open a cache
caches.open('my-cache-v1').then((cache) => {
  console.log('Cache opened:', cache);
});

```

**Adding Items to a Cache**
```js
caches.open('my-cache-v1').then((cache) => {
  cache.add('/path/to/resource'); // Caches the request and response
  // Or use cache.addAll() to add multiple resources
  cache.addAll(['/path/to/resource1', '/path/to/resource2']);
});

```

