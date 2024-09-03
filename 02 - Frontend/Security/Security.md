Date - 2024-09-03  |  Time - 07:38
Tags: #Security

----

## Table of contents 

1. [Origin](#origin)
2. [Site](#site)
3. [Content security policy](#content-security-policy)
4. [x frame option](#x-frame-option)
5. [Cross-Origin Resource Policy (CORP)](#)
6. [Cross-Origin Opener Policy (COOP)](#Cross-Origin-Opener-Policy-(COOP))
7. [Cross-Origin Resource Sharing (CORS)](#Cross-Origin-Resource-Sharing-(CORS))
8. [HTTP Strict Transport Security (HSTS)](#HTTP-Strict-Transport-Security-(HSTS))
9. [[Cookie]]

---

### Origin

![[Pasted image 20240903075302.png]]

Origin is combination of scheme, hostname and port if specified.

### Site

![[Pasted image 20240903075523.png]]

Same site means scheme , and domain that is TLD, subdomain don't matter, ports don't matter.

---

### Content Security Policy

This is a feature of a web browser that allows developer to specify from where the content will be loaded so dev can mention the origin.

This helps to mitigate the XSS attacks. 
here is how we can achieve
```http
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';
```

1. `default-src 'self'` - all types of content will be only loaded from same origin. 
2. `script-src 'self'` - scripts will be loaded only from same origin
3. ` object-src 'self'` - Disables loading of plugins

There are more headers like this for ex `font-src` `medis-src` `style-src` etc.

---

### X Frame Option

A hacker can embed our website into an iframe and invoke unintended action by user so to restrict this we can set

`x-frame-options: DENY`

---

### Cross-Origin Resource Policy (CORP)

CORP allows us to mitigate security issues when some other domain or site loads our resources like video image or scripts, by allowing us to define which websites can load our content.
This prevents leaks. 

1. Cross-Origin-Resource-Policy: same-origin
2. Cross-Origin-Resource-Policy: same-site
3. Cross-Origin-Resource-Policy: cross-origin

----

### Cross-Origin Opener Policy (COOP)

A bad actor can open our website in a popup and do unintended work to avoid this we can use this header
```
Cross-Origin-Opener-Policy: same-origin-allow-popups
```

----

### Cross-Origin Resource Sharing (CORS)

This is not a header but policy by browser to prevent a website to load content from another origin. 
this is a default behavior by browser.

----
### HTTP Strict Transport Security (HSTS)

This is a security header in which site tells browser to never load website without https.
```
Strict-Transport-Security: max-age=31536000
```

Browser will use https to access this domain for this specified duration.

---
