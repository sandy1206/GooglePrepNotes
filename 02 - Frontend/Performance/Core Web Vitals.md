Date - 2024-09-02  |  Time - 14:28
Tags: #Core Web Vitals

----
## Table of contents

1. [Time to First Byte](#time-to-first-byte)
2. [Largest Contentful Paint](#largest-contentful-paint)
3. [First Contentful Paint](#first-contentful-paint)
4. [Interaction to Next Paint](#interaction-to-next-paint)
5. [Cumulative Layout Shift](#cumulative-layout-shift)

----

### Time to First Byte
![[good-ttfb-values.svg]]
This measure the time required to receive first byte from the server over a http call. 
this time is generally taken by following processes. 
1. **DNS Lookup time**  - time to get a dns endpoint. we should also notice that sometime we have lot of **Network hooping** where we send req from one server to another server like if cache is not present then CDN might redirect this request to origin al server. 
2. **connection time** -  This is time required to establish connection between browser and server. 
3. **Server response time** - This is mostly can be optimized as developer can directly changes things here, this will also include the some queries that are required to get from DB.

#### Optimization 
1. CDN 
2. cache-control
3. Avoid multiple redirects
4. Stream markup to the browser 
5. Use a service worker
	1. stale-while-revalidating - server from cache first and then download latest in background.
6. Use 103 Early Hints - tells browser to download heavy resource while server is preparing a Markup. 

---

### First Contentful Paint

![[good-fcp-values-18.svg]]

First contentful paint measures the first content load on page which user can see. this needs to be smaller than 1.8 s. remember not all page content needs to be loaded. We should target 75%.
#### How to measure

1. Chrome user experience report
2. lighthouse
3. chrome dev tools
4. page speed insights


#### Improvement

1. Remove unused css and javascript
2. Use preload and preconnect
3. minify css and js
4. eliminate render blocking resources
5. Avoid multiple page redirects
6. lower TTFB
7. Ensure text remain visible during webfont load

----

### Largest Contentful paint

![[good-lcp-values.svg]]
LCP reports the render time of the largest image, text block, or video visible in the viewport, relative to when the user first navigated to the page.

#### Elements considered

1. Img
2. Image inside svg
3. video
4. an element with backgrounf image loaded as `url()` 
5. ![[Pasted image 20240902185104.png]]

#### Improvements

1. Optimize server response time
2. Server Images Efficiently
	1. Compress and resixe images properly for different screen size.
	2. Use next gen image format like WebP and AVIF
	3. Lazy load offscreen Images
	4. Preload important Images
3. Minimize render blocking resources
	1. Defer or async javascript
	2. Place critical css directly inline or into head element
	3. Optimize css using minifying and removing unused.
4. Optimize font loading
	1. Ensure text remain visible during font loading use `font-display: swap`'
	2. Preload key fonts `<link rel='preload' />`
	3. use System fonts
5. Reduce third party scripts
6. Improve client side rendering
7. preconnect and prefetch

---

### Interaction to Next Paint

![[inp-desktop-v2.svg]]

![[a-diagram-depicting-inte-d2bec16a5952.svg]]

INP is a metric that assesses a page's overall responsiveness to user interactions by observing the latency of all click, tap, and keyboard interactions that occur throughout the lifespan of a user's visit to a page. The final INP value is the longest interaction observed, ignoring outliers.

#### Improvements

1. Improve input delay
2. Optimize event callbacks
	1. We can optimize work by dividing it into smaller chunks and hence reduce the load on main thread. one way to achieve this by using setTimeout
3. Avoid layout thrashing - this happens when we force synchronous layout render
4. Minimize dom size
5. use `content-visibility` property to boost performance
6. Avoid HTML render using javascript

---

### Cumulative layout shift

![[good-cls-values.svg]]


Layout shift occurs when an element changes its start position.
when new element is added or existing element changes its size will not make layout shift until and unless it makes another element changes its start position. 

```
layout shift score = impact fraction * distance fraction
```

**Impact Fraction** measures how unstable element impact the viewport area between two frames. 