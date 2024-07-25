Cookie is small piece of data that browser send to user by setting a cookie and then browser sends it server on each  subsequent request. 

```http
Set-Cookie: name=value; Expires=Wed, 21 Aug 2024 07:28:00 GMT; Path=/; Domain=example.com; Secure; HttpOnly

```

cookie can be accessed by JavaScript by using 

```js
document.cookie
```


**Cookie Attributes**

1. **Name and Value**: The basic key-value pair stored in the cookie.
2. **Expires / Max-Age**: Determines the lifespan of the cookie.
	1. **Expires**: Specifies an exact date and time when the cookie should expire.
	2. **Max-Age**: Specifies the number of seconds until the cookie expires from the time it was set.
3. **Domain**: Defines which domain can access the cookie. By default, it’s the domain that set the cookie.
4. **Path**: Restricts the cookie to a specific path within the domain. By default, it’s the path of the request that created the cookie.
5. **Secure**: Indicates that the cookie should only be sent over secure ([[HTTPS]]) connections.
6. **HttpOnly**: Restricts access to the cookie from JavaScript, helping to protect against cross-site scripting ([[XSS]]) attacks.

**Limitations**

1. **Size Limit** : only 4kb size allowed
2. **Performance Impact**: needs to sen on every request so performance impact.
3. **Security**: can be used in [[XSS]] and [[CSRF]]

### **Common Uses**
---



- **Session Management**: Maintaining user sessions and authentication states.
- **User Preferences**: Storing user-specific settings or themes.
- **Tracking**: Tracking user behavior and analytics.

### Notes
---

