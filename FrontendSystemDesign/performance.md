# Performance

## Table of contents
 - HTML Performance


## HTML Performance
 - **Time to First Byte**- Reduce time spent on **Time to First Byte** while this is not the sole metrics but we should also consider we should also consider **Largest Contentful Paint** & **First Contentful Paint**
 - **Minimize Redirect** - redirects or request hopping between different server should be as minimal as possible
 - **Caching** - while it is ahard to cache html, as it is only pints to javascript and css files which might have changed their code or output. cached html is hard to invalidate on user browser so mostly we should **Avoid** this but we can use something like **E-Tag** header through which we can compute weather resource is changed or not.
 - **Use Compression** - The most widely used compression algorithms are gzip and Brotli. Brotli results in about a 15% to 20% improvement over gzip. We should also focus that file size below **1KB dont compress very well**
	- **Dynamic Compression** - compresses a resource at the time it's requested, and sometimes every time it is requested. in most cases **HTML is Dynamically Compressed**
	- **Static Compression** - compresses files ahead of time, requiring no compression to be performed at the time of the request. Static compression removes the latency involved in compression itself
- **Use CDN**

### Critical Rendering Path
> The critical rendering path refers to the steps involved until the web page starts rendering in the browser. To render pages, browsers need the HTML document itself as well as all the critical resources necessary for rendering that document.

- The rendering path involves the following steps:

	- Constructing the Document Object Model (DOM) from the HTML.
	- Constructing the CSS Object Model (CSSOM) from the CSS.
	- Applying any JavaScript that alters the DOM or CSSOM.
	- Constructing the render tree from the DOM and CSSOM.
	- Perform style and layout operations on the page to see what elements fit where.
	- Paint the pixels of the elements in memory.
	- Composite the pixels if any of them overlap.
	- Physically draw all the resulting pixels to screen.
