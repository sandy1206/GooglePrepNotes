Date - 2024-09-02  |  Time - 14:28
Tags: #Core Web Vitals

----
## Table of Contents

1. [Time to First Byte](#time-to-first-byte)
2. [Largest Contentful Paint](#largest-contentful-paint)
3. [First Contentful Paint](#first-contentful-paint)
4. [Interaction to Next Paint](#interaction-to-next-paint)
5. [Cumulative Layout Shift](#cumulative-layout-shift)
6. [[Core Web Vitals#Cumulative Layout Shift]]

---

### Time to First Byte

![[good-ttfb-values.svg]]

This measures the time taken to receive the first byte from the server over an HTTP call. This time generally includes the following processes:

1. **DNS Lookup Time**: The time required to resolve the DNS endpoint. Consider factors like **network hopping**, where a request may be redirected from one server to another (e.g., from a CDN to the origin server if the cache is not present).
2. **Connection Time**: The time taken to establish a connection between the browser and the server.
3. **Server Response Time**: The time required for the server to process the request and respond. This can often be optimized by developers, including reducing database query time.

#### Optimization

1. Use a CDN.
2. Implement effective cache-control.
3. Avoid multiple redirects.
4. Stream markup to the browser.
5. Use a service worker with `stale-while-revalidate` to serve from cache first and then update in the background.
6. Use 103 Early Hints to tell the browser to download heavy resources while the server prepares the markup.

---

### First Contentful Paint

![[good-fcp-values-18.svg]]

First Contentful Paint (FCP) measures the time it takes for the first piece of content to be loaded and visible to the user. The target should be under 1.8 seconds, with the aim for the most important content (about 75%) to be loaded quickly.

#### How to Measure

1. Chrome User Experience Report
2. Lighthouse
3. Chrome DevTools
4. PageSpeed Insights

#### Improvement

1. Remove unused CSS and JavaScript.
2. Use `preload` and `preconnect`.
3. Minify CSS and JS.
4. Eliminate render-blocking resources.
5. Avoid multiple page redirects.
6. Lower TTFB.
7. Ensure text remains visible during webfont load.

---

### Largest Contentful Paint

![[good-lcp-values.svg]]

Largest Contentful Paint (LCP) reports the render time of the largest image, text block, or video visible in the viewport, relative to when the user first navigated to the page.

#### Elements Considered

1. `<img>` elements
2. Images inside `<svg>`
3. `<video>` elements
4. Background images loaded via `url()`
5. Block-level text elements

![[Pasted image 20240902185104.png]]

#### Improvements

1. Optimize server response time.
2. Serve images efficiently:
   - Compress and resize images for different screen sizes.
   - Use next-gen image formats like WebP and AVIF.
   - Lazy load offscreen images.
   - Preload important images.
3. Minimize render-blocking resources:
   - Defer or async JavaScript.
   - Inline critical CSS or place it in the `<head>` element.
   - Minify and remove unused CSS.
4. Optimize font loading:
   - Ensure text remains visible during font load (`font-display: swap`).
   - Preload key fonts using `<link rel='preload' />`.
   - Use system fonts where possible.
5. Reduce third-party scripts.
6. Improve client-side rendering.
7. Use `preconnect` and `prefetch` for critical resources.

---

### Interaction to Next Paint

![[inp-desktop-v2.svg]]

![[a-diagram-depicting-inte-d2bec16a5952.svg]]

Interaction to Next Paint (INP) assesses a page's overall responsiveness to user interactions by observing the latency of all clicks, taps, and keyboard interactions throughout the page's lifespan. The final INP value is the longest interaction observed, excluding outliers.

#### Improvements

1. Improve input delay.
2. Optimize event callbacks:
   - Divide work into smaller chunks to reduce load on the main thread (e.g., using `setTimeout`).
3. Avoid layout thrashing, which occurs when synchronous layout reflows are forced.
4. Minimize DOM size.
5. Use the `content-visibility` property to boost performance.
6. Avoid HTML rendering using JavaScript where possible.

---

### Cumulative Layout Shift

![[good-cls-values.svg]]

Cumulative Layout Shift (CLS) measures the visual stability of a page by tracking layout shifts that occur unexpectedly. Layout shift occurs when an element changes its start position, causing other elements to move.

```
layout shift score = impact fraction * distance fraction
```


- **Impact Fraction**: Measures the proportion of the viewport affected by the shift.
- **Distance Fraction**: Measures how far elements have moved relative to the viewport.

For example, if an element moves 25% of the viewport, and this affects 75% of the screen, the _impact fraction_ is `0.75` and the _distance fraction_ is `0.25`, resulting in a _layout shift score_ of `0.75 * 0.25 = 0.1875`.

#### Common Causes

1. Images without dimensions.
2. Ads, embeds, and other late-loaded content.
3. Animations involving box shadow, box sizing, or top/left properties.
4. Web fonts—using `font-display: optional` can help.
5. Back/forward cache issues.
