Date - 2024-09-03  |  Time - 10:14
Tags: #Priority to resorce

---

### Table of Contents

1. [PreConnect](#preconnect)
2. [Preload](#preload)
3. [Prefetch](#prefetch)
4. [103 Early Hints](#103-early-hints)
5. [Prerender](#prerender)
6. [ETag](#ETag)
7. [Cache Control](#cache-control)
8. [Lazy Loading](#lazy loading)
9. [Async](#async)
10. [Defer](#defer)
11. [Will Change](#will-change)

----

### Preconnect

Pre connect allows the browser to set up early connections before an HTTP request is actually sent to the server. This includes DNS lookups, TLS negotiations, and TCP handshakes. Preconnect helps reduce latency for critical third-party resources. 

**Usage:** ```html <link rel="preconnect" href="https://example.com">```

----

### Preload

Preload is used to prioritize loading of a resource, it tells browser to load a resource as soon as possible and make it available for when its needed.

```html
<link rel="preload" href="https://example.com/styles.css" as="style">
```

----

### Prefetch

this is used to load resources in advance that might be needed for future navigation. this is helpful when we want enable a loading of critical resource even before it is needed.

```html
<link rel="prefetch" href="https://example.com/next-page.html">
```

----

### 103 Early Hints

103 Early hints HTTP status code allows server to send a preliminary headers before the final response, enabling browser to begin loading critical resources earlier. 

```http
HTTP/1.1 103 Early Hints
Link: </style.css>; rel=preload; as=style
Link: </script.js>; rel=preload; as=script
```

---

### Prerender

allows browser to pre render a page that user likely to visit next
```html
<link rel="prerender" href="https://example.com/next-page.html">
```

---

### ETags

Allows server to check weather the resource has modified or not since last visit. 

----

### Cache-Control

This can help in identifying caching policy for browser and help in reducing the latency. 


----

### Lazy Loading

```html
<img src="image.jpg" loading="lazy" alt="Description">
```

----

### Async

This tell browser to load a script in background without blocking HTML rendering, but as soon as script is downloaded it will be executed and hence only after script is downloaded HTML parsing will be blocked.

```html
<script async src="script.js">
```

----

### Defer

This is same as async but with a major difference is the even after downloading a script it will not start executing until and unless HTML parsing is complete

```html
<script defer src="script.js">
```

----

### Will Change

Will change property will hint browser to let know in advance which element are likely to change , allowing it to have better performance.

```css
.animating-element {
  will-change: transform;
}
```


----
